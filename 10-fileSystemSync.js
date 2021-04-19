const {readFileSync,writeFileSync} = require('fs')

const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

writeFileSync('./content/third.txt',`here is the result  : ${first} , ${second}`,{
    flag:'a'
})


console.log(readFileSync('./content/third.txt','utf8'));