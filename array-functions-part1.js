let input = process.argv.slice(2);
let result=input.map((item)=>{
    return item[0];
}).reduce((str,inputString)=>{
    return str=str+inputString;
},"");

console.log(`[${input}] becomes "${result}"`);
