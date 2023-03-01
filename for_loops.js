// //for loop

for (let a=0;a<5;a++){
    console.log(a)
}

//program to add first n natural numbers.
let sum=0
let n=prompt("enter the num")
n=Number.parseInt(n)
for(let i=0;i<n;i++){
    sum+=(i+1)
}
console.log("sum of first"+n+"natiral numbers is" +sum)

//the for in loop
let obj={
    bibek:98,
    bibika:45,
    babita:99,
    binita:23
}
for (let a in obj){
    console.log("marks of "+a+" are" +obj[a])
}

//the for loop
for (let b of "bibek"){
    console.log(b)
}