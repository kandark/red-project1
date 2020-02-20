document.addEventListener("DOMContentLoaded", function () {
  console.log('Your document is ready!');
  var elem = document.querySelector('.carousel');
  var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true
  });

  // element argument can be a selector string
  //   for an individual element
  var flkty = new Flickity('.carousel', {
    // options
  });
});
window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
}