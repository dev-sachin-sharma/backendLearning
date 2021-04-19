const os=require('os')


//  this is to get user INfo
const user=os.userInfo();
console.log(user)

// this is to get sytem uptime in seconds
console.log(`system uptime is ${os.uptime()}  seconds`)

//   this is to get os details
const osDetails={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(osDetails)