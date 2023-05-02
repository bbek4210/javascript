function validateform(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var phone=document.getElementById("phone").value;
    if (username=="" || password=="" || phone=="")
    {
        alert("Please fill all the fields");
        return false;
    }
    if (phone.length!=7){
        alert("Please enter a valid phone number with 7 didgt");
        return false;
    }
    if(password.length>6)
    {
        alert("Password must be lesser than 6 characters long");
        return false;
    }
    return true;
}