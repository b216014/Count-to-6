let inputArgs=process.argv.slice(2);
let result=Math.min(...inputArgs);

console.log(`The minimum of [${inputArgs}] is ${result}`);