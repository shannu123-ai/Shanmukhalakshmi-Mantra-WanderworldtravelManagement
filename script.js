function validateForm(){

let name=document.getElementById("name").value;

let email=document.getElementById("email").value;


if(name=="" || email==""){

alert("Please fill all details");

return false;

}


alert("Booking Successful!");

return true;

}