let user={
    username:"hello",
    // price:34
};

const printUserInfo=(obj)=>{
    console.log(`username is ${obj.username} and price is ${obj.price}`)
}

const printSecondElement=(arr)=>{
    return arr[2];
}

let n2=printSecondElement([1,2,3,4,5]);
console.log(n2);
