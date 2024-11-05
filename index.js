const os = require('os');
const diskusage = require('diskusage');
const si = require('systeminformation');

// Function to get CPU and memory info
function getSystemSpecs() {
    const cpu = os.cpus();
    const memory = os.totalmem();
    const freeMemory = os.freemem();
    const architecture = os.arch();
    const platform = os.platform();

    console.log('System Specifications:');
    console.log(`CPU: ${cpu.length} cores`);
    console.log(`Memory: ${(memory / 1024 / 1024 / 1024).toFixed(2)} GB total`);
    console.log(`Free Memory: ${(freeMemory / 1024 / 1024 / 1024).toFixed(2)} GB`);
    console.log(`Architecture: ${architecture}`);
    console.log(`Platform: ${platform}`);
}

// Function to get disk usage info
function getDiskUsage() {
    const path = '/'; // Default for most systems, change to specific path if needed
    diskusage.check(path, (err, info) => {
        if (err) {
            console.error('Error retrieving disk usage:', err);
        } else {
            console.log('\nDisk Usage:');
            console.log(`Total space: ${(info.total / 1024 / 1024 / 1024).toFixed(2)} GB`);
            console.log(`Free space: ${(info.free / 1024 / 1024 / 1024).toFixed(2)} GB`);
            console.log(`Used space: ${(info.used / 1024 / 1024 / 1024).toFixed(2)} GB`);
        }
    });
}

// Function to get additional system information using systeminformation
function getAdditionalSystemInfo() {
    si.cpu().then(cpuInfo => {
        console.log('\nAdditional CPU Info:');
        console.log(cpuInfo);

        si.mem().then(memoryInfo => {
            console.log('\nMemory Info:');
            console.log(`Total Memory: ${(memoryInfo.total / 1024 / 1024 / 1024).toFixed(2)} GB`);
            console.log(`Free Memory: ${(memoryInfo.free / 1024 / 1024 / 1024).toFixed(2)} GB`);
        }).catch(console.error);

    }).catch(console.error);
}

// Get and display system specs
getSystemSpecs();

// Get and display disk usage info
getDiskUsage();

// Get additional system info
getAdditionalSystemInfo();
