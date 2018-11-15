$(document).ready(function () {
   var isMobile = false;
   if ($('body').width() <= 480) {
      isMobile = true;
   }
   if (isMobile) {}
   if (!isMobile) {}
})
var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

window.onscroll = function () {
   var scrolled = window.pageYOffset || document.documentElement.scrollTop;
   if (scrolled >= height) {
      var cart_blocks = document.getElementById('carte_blocks');
      var starters = document.getElementById('test').offsetHeight;
      cart_blocks.style.height = "" + starters + "px";
   }
}

function hideMenu() {
   var x = document.getElementById('myTopnav');
   var icon = document.getElementById("icon");
   x.classList.toggle("responsive");
   if (x.classList.contains("responsive")) {
      icon.style.borderRadius = "10px 10px 0 0";
   } else {
      icon.style.borderRadius = "10px";
   }
}