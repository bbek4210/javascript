// wap using prompt function to take input of age as a value from the user and use alert to tell him if he can drive?

// let age =prompt("enter your age")
// age =Number.parseInt(age)
// const CanDrive=(age)=>{
//     return age>=18?true:false
// }
// if(CanDrive(age)){
//     alert("yes you can drive")
// }
// else{
//    alert ("you cannot drive")
// }

//in Q1.use confirm to ask the user if he wants to see the prompt again
// let runAgain = true;
// const CanDrive = (age) => {
//   return age >= 18 ? true : false;
// };
// while (runAgain) {
//   let age = prompt("enter your age");
//   age = Number.parseInt(age);
//   if (CanDrive(age)) {
//     alert("yes you can drive");
//   } else {
//     alert("you cannot drive");
//   }
//   runAgain=confirm("do u want ro play it again?")
// }

// //wap to change the url to tiktok.com if user inputs a number equal to 6.
// let num=prompt("enter a number")
// num=Number.parseInt(num)
// if(num==6){
//     location.href="https://tiktok.com"
// }

//change the bg of the page to any color based on user input through prompt.
let color=prompt("enter the page background color")
document.body.style.background=color