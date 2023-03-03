//wap to print the marks of student in an obj using for loop.

let marks={
    bibek:98,
    binita:78,
    bibika:6
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("the marks of " +Object.keys (marks) [i]+ " are " +marks[Object.keys(marks)[i]])
}

// using for in loop for same q.
for(let key in marks){
    console.log("the marks of "+key+" are " +marks[key])
}

//wap to print try again until the user enters the correct number,
// let cn=43
// let i
// while(i!=cn){
//     console.log("try again")
//     i=prompt("enter a number")
// }
// console.log("you entered correct number.")

// wap to find a mean using function
 const mean = (a,b,c,d) => {
    return(a+b+c+d)/4
 }
 console.log(mean(4,5,6,7))