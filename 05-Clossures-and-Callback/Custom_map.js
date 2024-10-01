// Mimicing the behavior of MAP function that JS provides

function mapper(arr, fn){

    let result = [];

    for(let i = 0; i < arr.length; i++){
        // calling callBack
        let res = fn(arr[i], i);
        result.push(res);
    }

    return result;

}

let arr = [1, 2, 3, 4, 5];

let x = mapper(arr, function cuber(val, index){

    console.log(val, index, val * val * val);

    return val * val * val;

})

console.log(x, arr);