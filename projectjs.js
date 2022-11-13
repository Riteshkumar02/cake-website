
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


function AddReadMore() {
  //This limit you can set after how much characters you want to show Read More.
  var carLmt = 264;
  // Text to show when text is collapsed
  var readMoreTxt = " ... Read More";
  // Text to show when text is expanded
  var readLessTxt = " Read Less";


  //Traverse all selectors with this class and manupulate HTML part to show Read More
  $(".addReadMore").each(function() {
      if ($(this).find(".firstSec").length)
          return;

      var allstr = $(this).text();
      if (allstr.length > carLmt) {
          var firstSet = allstr.substring(0, carLmt);
          var secdHalf = allstr.substring(carLmt, allstr.length);
          var strtoadd = firstSet + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
          $(this).html(strtoadd);
      }

  });
  //Read More and Read Less Click Event binding
  $(document).on("click", ".readMore,.readLess", function() {
      $(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
  });
}
$(function() {
  //Calling function after Page Load
  AddReadMore();
});
