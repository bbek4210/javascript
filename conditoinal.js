//if statement
let a = prompt("whats your age");
a = Number.parseInt(a); //convert string to number
if (a > 0) {
    alert("this is an valid age");
}

//if-else statement
let b = prompt("whats your age");
b = Number.parseInt(b); //convert string to number
if (b > 0) {
    alert("this is an valid age");
}
else{
    alert('this is an invalid age');
}

//if else..if statement:
let c = prompt("whats your age");
c = Number.parseInt(c); //convert string to number
if (c < 0) {
    alert("this is an invalid age");
}
else if(c<9){


    alert('you are now kid');
}
else if(c<18 && c>=9){
    alert('you are now eligible to drive');
}
else{
    alert('you are fully eligible to drive');
}
