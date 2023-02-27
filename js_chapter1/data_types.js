//primitive data types
let a= null;
let b= 342;
let c= Symbol("hello") 
let d= "bibek"
let e= true; // can be false also
let f= BigInt("67")+BigInt("3")
let g =undefined
console.log(a,b,c,d,e,f,g)
console.log(typeof d)
console.log(typeof f)

//objects in js
const item={
    "bibek":true,
    "bhandari":false,
    "sam":76,
    "ram":undefined
}
console.log(item["bhandari"])
console.log(item["sam"])