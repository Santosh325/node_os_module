const operatingSytem = require('os');


// accessing the os architecture using arch()
const arch = operatingSytem.arch();
console.log(arch);

// accessing the os free memory using freemem()
const freeMem = operatingSytem.freemem();

// it will give you in bytes
console.log(freeMem);

// here converting bytes in to giga bytes
// first 1024 - it gives kilo bytes
// second 1024 - it gives mega bytes
// third 1024 - it gives giga bytes
console.log(`${freeMem / 1024 / 1024 / 1024}`)

// to display total memory
const totalMemory = operatingSytem.totalmem();
console.log(`${totalMemory / 1024/1024/1024}`);


// to find out host name
console.log(operatingSytem.hostname());

// to find out which platform we are using
console.log(operatingSytem.platform())

// to find which dir path
console.log(operatingSytem.homedir())

// os.type()
// returns the os name as returnd by uname(3).
// for ex, it returns "Linux" on Linux, 'Darwin on macOs, and
// 'Windows_NT' on Windows

console.log(operatingSytem.type());