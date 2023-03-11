//for loop
let a=[1,2,3,4,78]
for(let i=0;i<a.length;i++){
    console.log(a[i])
}

//for each loop
a.forEach((element)=>{
    console.log(element*element)

})

//for of loop
for (let i of a){
    console.log(i)
}

//for in loop

for(let item in a){
    console.log(item) //provides key /index
}

//array.from loop

let name="bibel"
console.log(Array.from(name))

//map()loop
const s=[45,23,21]
let s1=s.map((value,index,array)=>{
    console.log(value,index,array)
    return value +2
})
console.log(s1)

//filter method()
let arr2=[4,23,6,5,54,55]
let a2=arr2.filter((a)=>{
    return a<10

})
console.log(a2)

//reduce method()

let m=[1,2,3,5,2,1]
let x=m.reduce((h1,h2)=>{
    return h1+h2
})
console.log(x)