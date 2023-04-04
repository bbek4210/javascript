var store=[];
do{
    var n =prompt("enter any number and say no to stop ")

if(n=="no"){
    console.log(store);
break;
}
else{
    store.push(+n)
}
}while(n!=0)
console.log(store);

