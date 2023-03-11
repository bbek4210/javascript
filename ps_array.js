// //create an array of numbers and take input from the user to add numbers to this array.
// let arr=[1,2,3,4,86] 
// let a=prompt("enter your number")
// a=Number.parseInt(a)
// arr.push(a)
// console.log(arr)


// //keep adding no to the array in question 1 until 0 is added to the array
// let arr1=[1,2,3,4,86] 
// let a1;
// do{
//  a1=prompt("enter your number")
// a1=Number.parseInt(a1)
// arr1.push(a1)
// }while(a1!=0) ;
// console.log(arr1)

//filter for numbers divisible by 10 from a given array
let arr2=[1,2,40,45,60]
let n=arr2.filter((x)=>{
    return x%10==0
})
console.log(n)

//create an array of square of given no.
let c=[1,2,3,4]
let b=c.map((q)=>{
    return q*q
})
console.log(b)

//use reduce to calculate factorial of a given number from an array of fisrt n natural numbrs.
//(n being the no.whose factorial needs to be calculated.)
let arr=[1,2,3,4]
let p=arr.reduce((z1 ,z2)=>{
return z1*z2
})
console.log(p)