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

//validate form

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

let submit = document.getElementById("input-submit")
submit.addEventListener('click',validate)

function validate(){
  let result = document.getElementById("result")
  let email=document.getElementById("input-email").value

  result.value=""

  if(validateEmail(email)){
    result.innerHTML=`${email} is valid`
    result.style.color="green"

  }else if(validateEmail(email)==" "){
    result.innerHTML=`Please insert the correct email!`
    result.style.color="red"

  }else{
    result.innerHTML=`${email} is not valid`
    result.style.color="red"
   
  }
}


/* function to add cart
------------------------------------------------*/

let carts = document.querySelectorAll(".add-cart")
let products =[{
  name:'Grey Tshirst',
  tag: 'greytshirt',
  price: 15,
  inCart: 0
},
{
  name:'Grey Hoodie',
  tag: 'greytshirt',
  price: 15,
  inCart: 0
},
{
  name:'Black Tshirt',
  tag: 'greytshirt',
  price: 15,
  inCart: 0
},
{
  name:'Black Hoddie',
  tag: 'greytshirt',
  price: 15,
  inCart: 0
}
]
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click',()=>{
      cartsNumbers()
     })  
}

function onloadCartNumbers(){
  let productsNumbers = localStorage.getItem('cartNumbers');
  if(productsNumbers){
    document.querySelector('.cart span').textContent = productsNumbers

  }


}

function cartsNumbers(){
  let productsNumbers = localStorage.getItem('cartNumbers');

  productsNumbers = parseInt(productsNumbers)

  if(productsNumbers){
    localStorage.setItem('cartNumbers',productsNumbers + 1);
    document.querySelector('.cart span').textContent = productsNumbers + 1;


  }else{

    localStorage.setItem('cartNumbers',1);
    document.querySelector('.cart span').textContent = 1;


  }
 }
onloadCartNumbers()
