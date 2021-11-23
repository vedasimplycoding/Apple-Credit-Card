document.addEventListener("contextmenu", function(event){
event.preventDefault();
alert('Right Click is Disabled');    
}, false);
/* To Disable Inspect Element */
$(document).bind("contextmenu",function(e) {
 e.preventDefault();
});

$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});
VanillaTilt.init(document.querySelector('.front'), {
  reverse: true,
  glare: true,
  max: 15,
  speed: 3000 });
