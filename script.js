document.addEventListener("contextmenu", function(event){
event.preventDefault();
alert('Right Click is Disabled');    
}, false);
VanillaTilt.init(document.querySelector('.front'), {
  reverse: true,
  glare: true,
  max: 15,
  speed: 3000 });
