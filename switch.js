let a = 2;
switch (a) {
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break;
  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);

//ternary operator

console.log("you can", a > 18 ? "not drive" : "drive");
