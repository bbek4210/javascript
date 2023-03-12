console.log("hello bibek")
function addThreeNumbers(a, b, c){
    return a+b+c;
}
    let c = addThreeNumbers(1,2,3)
    console.log(c)


    let random = Math.floor(Math.random() * 101);
console.log(random)
let chances = 0;
let input;
while (input != random){
  input = Number.parseInt(prompt("Enter a Number between 0 to 100"));
  
  if(input != random){
  console.log("Wrong! Try again.")}
  
  if (random>input){
    console.log("The Number is bigger than " + input)
  }
  else if (random<input) {
    console.log("The Number is smaller than " + input)
  }
  
  chances += 1;
}
console.log("Congrats Champ!")
console.log(`You scored ${100-chances} points.`)

