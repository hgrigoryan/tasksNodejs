//myMap implementation
function myMap(arr, func){
    let newArr = [];
    arr.forEach(element => newArr.push(func(element)));       
    return newArr;
}

//myMap test
let arr = [1, 2, 3];
function multiply(arg){
    return arg*2;
}

console.log("map test");
console.log(myMap(arr, multiply));
console.log(myMap(arr, z=>z+3));
console.log(myMap(arr, function(num) {
    return Math.sqrt(num)}))


//mySlice implementation
function mySlice(arr, start = 0, end){
    let newArr = [];
    let length = arr.length;
    if(start === null || Number(start) === NaN)
        start = 0;
    if(end === undefined || end > length)
        end = arr.length;
    if(start > length-1 || end == null || Number(end) === NaN)
        return newArr;
    if(start < 0)
        start = length + start;
    if(end < 0)
        end = length + end; 
    for(let i = start; i < end; ++i)
        newArr.push(arr[i]);
    return newArr;
}

//mySlice test
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("\nslice test");
console.log(mySlice(arr1));
console.log(mySlice(arr1, 2));
console.log(mySlice(arr1, 3, 5));
console.log(arr1.slice(null , -8));
console.log(mySlice(arr1, null, -8));