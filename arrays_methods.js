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