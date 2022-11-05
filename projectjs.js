
var object = ["Butterscotch Cake", "Vanilla Cake", "Black Forest Cake", "Chocolate Cake"]
var list;

function generator() {
 document.getElementById("name").innerHTML = object[Math.floor(Math.random() * object.length)];
}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  window.alert("Please enter a valid e-mail address");  
  return false;  
  }  
}  

