//alert//confirm//prompt

alert("enter the value oa a!")
let a= prompt("enter a here" ,"23")
a=Number.parseInt(a)
alert("you entered a of type" +(typeof a))
let write=confirm("do you want to write in page")
if(write){
    document.write(a)
}else{
    document.write("please allow")
}