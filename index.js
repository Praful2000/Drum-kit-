var i = document.querySelectorAll(".drum").length;

for(x = 0 ; x<i ; x++)
{
document.querySelectorAll(".drum")[x].addEventListener("click",function(){
var buttonHtml = this.innerHTML;
switch(buttonHtml)
{
case "w" :
var audio = new Audio("sounds/tom-1.mp3");
audio.play();
break;
case "a" :
var audio = new Audio("sounds/tom-2.mp3");
audio.play();
break;
case "s" :
var audio = new Audio("sounds/tom-3.mp3");
audio.play();
break;
case "d" :
var audio = new Audio("sounds/tom-4.mp3");
audio.play();
break;
case "j" :
var audio = new Audio("sounds/snare.mp3");
audio.play();
break;
case "k" :
var audio = new Audio("sounds/crash.mp3");
audio.play();
break;
case "l" :
var audio = new Audio("sounds/kick-bass.mp3");
audio.play();
break;

}
makeanim(buttonHtml);
});}
document.addEventListener("keydown",function(event){

  var keyHtml = event.key;
  switch (keyHtml) {
    case "w" :
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "a" :
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "s" :
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "d" :
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    case "j" :
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case "k" :
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case "l" :
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;


  }
makeanim(keyHtml);
});
function makeanim(loc)
{
   var location = document.querySelector("."+loc);
   location.classList.add("pressed");
  setTimeout(function(){

       location.classList.remove("pressed");
  },200);
}
