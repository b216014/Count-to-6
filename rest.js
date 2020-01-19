module.exports=(...args)=>{
    let ans= args.reduce((res,value)=>{
        res+=value;
        return res;
    },0);
    return ans/args.length;
}