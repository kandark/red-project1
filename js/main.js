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
// window.onscroll = function () { myFunction() };

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("fixed-header");


//   } else {
//     header.classList.remove("fixed-header");


//   }
// }
//validate form
let inputEmail = document.getElementById('input-email')
inputEmail.addEventListener('input', (e) => {

  if (inputEmail.validity.typeMismatch) {
    inputEmail.setCustomValidity("I am expecting an e-mail address")
  } else {
    inputEmail.setCustomValidity("Please enter an e-mail valid");
  }


})
var clicks = 0;
function onClick() {
  clicks += 1;

  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById("clicks").style.background = "red"
  document.getElementById("clicks").style.width = "40px"
  document.getElementById("clicks").style.height = "40px"
  document.getElementById("clicks").style.borderRadius = "50px"

};