const operand1 = document.getElementById('txtoperand1');
const operand2 = document.getElementById('txtoperand2');
const resultField = document.getElementById('txtResult');



document.getElementById('btnAdd').addEventListener('click', function() {
    const result = Number(operand1.value) + Number(operand2.value);
    resultField.value = result;
  });
  document.getElementById('btnSubtract').addEventListener('click', function() {
    const result = Number(operand1.value) - Number(operand2.value);
    resultField.value = result;
  });
document.getElementById('btnDivide').addEventListener('click',function(){
  const result=Number(operand1.value)/ Number(operand2.value);
  resultField.value=result;
});
document.getElementById('btnMultiply').addEventListener('click',function(){
  const result=Number(operand2.value) * Number(operand1.value);
  resultField.value=result;
});
