//$('body').scrollspy({ target: '#navbar-example2' })

/*var nav = document.getElementById('navbar-example2');

window.onscroll = function () {

  if(window.pageYOffset > 500){

   nav.style.position = "absolute";
   nav.style.top = 0;

   }else{
     // nav.style.position = "absolute";
     nav.style.position = 'fixed'; //fixed
     nav.style.top = 100;
   }
}*/

//SCROLLSPY
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);
});


      