//myFlat implementation
function myFlat(arr, dept = 1){
    let newArr = [];
    if(dept === 0)
        return arr;
    --dept;
    arr.forEach(element => {
        if(Array.isArray(element)){
            let subArr = myFlat(element, dept);
            //subArr.forEach(element => newArr.push(element));
            newArr = newArr.concat(subArr);
        }
        else
            newArr.push(element);
    });
    
    return newArr;
}

//myFlat test
let arr = [1, 2, 3, [4, 5, [6, 7, 8, 9, 10], 11, 12], [13, [14, 15, [16]]], 17, 18];
console.log(myFlat(arr));
console.log(myFlat(arr, 2 ));
console.log(myFlat(arr, 5 ));
console.log(myFlat(arr, Infinity ));
console.log(arr.flat(Infinity));