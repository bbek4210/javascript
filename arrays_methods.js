//tostring()
let n=[1,2,3,4]
let r=(n.toString())
console.log(typeof r)

//join()

let q=[2,7,4]
console.log(q.join("-"))

//pop()
let e=[4,9,6,8]
console.log(e.pop()) // pop the 8
console.log(e)//returns new array after poping 8


//push()
let y=[6,9,3,3,5]
let i=y.push(22) //add 22 to the end
console.log(y)

//shift()
let u=[4,6,32,33]
console.log(u.shift())//removes first element
console.log(u)


//unshift()
let o=[7,9,54]
let v=(o.unshift(99))//add   elements to the fisrt
console.log(o)

//delete()
let d=[4,5,6,7,]
delete d[0]
console.log(d)

//concat
let f1=[1,2,3]
let f2=[4,5,6]
console.log(f1.concat(f2))

//sort()
let t=[7,9,8,,11,89,1001]
console.log(t.sort())


//reverse()
let b=[4,5,6]
console.log(b.reverse())


//splice()
let num=[1,2,3,4,5]
num.splice(2,1,23,24)
console.log(num)


//slice()
 const num1=[1,2,3,4,]
 num1.slice(1,3)
 console.log(num1)  //result will be [2,3]