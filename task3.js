function reverse(obj){
    let newObj = {};
    if(typeof obj !== "object" || obj === null){
        throw new TypeError("An argument of reverse function must be an object!!!");
    }
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key] !== "object"){
                newObj[obj[key]] = key;
            } else {
                newObj[key] = reverse(obj[key]);  
            }
        }
    }
    return newObj;
}

// reverse function test
let obj = {
    a: 1,
    b: 2,
    c: "string1",
    nestedObj: {
        d: 3,
        e: 4,
        nestedNestedObj: {
            f: "string2",
            1: "string3",
        }
    }
}

try{
    console.log(reverse(obj));
    console.log(reverse(132));
}catch(err){
    console.log(err.name + ":", err.message);
}
