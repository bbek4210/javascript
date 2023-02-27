// 1)create a variable of type string and try to add a number to it.

let a = "bibek"
let b = 5
console.log(a + b)


//2) use type opeartor to find the datatype of the string in the last question.

console.log(typeof (a + b))

//3)create a const obj in js .can you change it to hold a number later?

const a1 = {
    name: "bibekbhandari",
    section: "k10",
    isPrincipal: false
}
//a1=54 // will thro error because a1 is constant and is already occupied
//hence it cant hold a number later.

//4) try to add a new key to the const obj in problem no.3 .were u able to do so?

a1['friend'] = "saurabh"
console.log(a1)
//yes we were able to add a key.

//5)wap in js to create a word meaning dictionary of 3 words.

const dict = {
    podcasting: "the practice of using the internet to make digital recordings of broadcasts available for downloading to a computer or mobile device.",
    dart: "a small pointed missile that can be thrown or fired.",
    technology: "the application of scientific knowledge for practical purposes, especially in industry",
}
console.log(dict.dart)
console.log(dict.technology)