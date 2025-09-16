// let user={
//     username:"hello",
//     // price:34
// };

// const printUserInfo=(obj)=>{
//     console.log(`username is ${obj.username} and price is ${obj.price}`)
// }

// const printSecondElement=(arr)=>{
//     return arr[2];
// }

// let n2=printSecondElement([1,2,3,4,5]);

// console.log(n2);


// let ar=[1,2,3,4,5]

// ar.forEach(num=>console.log(num))

// const sumArr=(...ar)=>{
//     return ar.reduce((hel,curr)=>hel+curr);
// }

// const demo=(first,...oth)=>{
//     console.log("first",first);
//     console.log("others",...oth);
// }

// demo(1,2,3,3,4,45,5,)

// function shopcart(discountObject,...prices)
// {
//   let total= prices.reduce((acc,curr)=>acc+curr);
//   if(discountObject && discountObject.discount)
//   {
//      total-=(discountObject.discount/100)*total;
//   }
//   return total;
// }