
/* scroll to top */
document.querySelector(".top-icon").style.opacity = 0;
window.addEventListener("scroll", function () {
    let shopPos = this.document.querySelector(".header").offsetTop;
    if (window.scrollY > shopPos) {
        document.querySelector(".top-icon").style.opacity = 1;
        document.querySelector(".top-icon").style.transition = "0.7s";
    } else {
        document.querySelector(".top-icon").style.opacity = 0;
        document.querySelector(".top-icon").style.transition = "0.7s";
    }
})

let topbtn = document.querySelector(".top");
topbtn.addEventListener("click", function () {
    window.scroll({
        top: 0,
        behaviour: "smooth",
    })
})
let prevScrollpos = window.pageYOffset;
let navLink = document.querySelector(".nav-link::after");
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        if (scrollY > 70) {
            document.querySelector(".navbar-brand").style.marginTop = "-12px";
            document.querySelector(".navbar-brand").style.marginBottom = "-12px";
            for (let i = 0; i < navLink.length; i++) {
                navLink.style.bottom = "0px ";
            }
        } else {

            document.querySelector(".navbar-brand").style.marginTop = "0";
            document.querySelector(".navbar-brand").style.marginBottom = "0";
        }

    } else {
        document.getElementById("navbar").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
}

/* add-cart sections on js  */
 
let carts= document.querySelectorAll(".add-cart");
let products=[
    {name:"Audio Pro Black XL",tag:"1",price:245, inCart:0},
    {name:"Audio Pro Pearl White XL2",tag:"2",price:180, inCart:0},
    {name:"Black Skater Sneaker",tag:"3",price:85, inCart:0},
    {name:"Cameo White 35A",tag:"4",price:315, inCart:0},

    {name:"Cameo White 40X",tag:"5",price:120, inCart:0},
    {name:"Cameo White FX1",tag:"6",price:180, inCart:0},
    {name:"Casual Parka",tag:"7",price:253, inCart:0},
    {name:"Casual V-neck Shirt",tag:"8",price:12, inCart:0},
    {name:"Collar Wool Blend Sweater",tag:"9",price:150, inCart:0},

    {name:"Cream Tote Bag",tag:"10",price:35, inCart:0},
    {name:"Downloadable Product Demo",tag:"11",price:255, inCart:0},
    {name:"Elastic Panel Sneakersr",tag:"12",price:99, inCart:0}
];
for(let i=0 ;i< carts.length ;i++){
carts[i].addEventListener("click",()=>{
cartNumbers(products[i]);
totalCost(products[i]);
})
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");
    if(productNumbers ){
        document.querySelector(".counter").innerHTML=productNumbers;
    }
  
}
function cartNumbers(product){
    
    let productNumbers = localStorage.getItem("cartNumbers");
  
   productNumbers=parseInt(productNumbers);

   if(productNumbers){
  
    localStorage.setItem("cartNumbers",productNumbers+1);
    document.querySelector(".counter").innerHTML=productNumbers+1;
   }
 else{
    localStorage.setItem("cartNumbers",1);
    document.querySelector(".counter").innerHTML=1;
}

setItems(product);
}
function setItems(product){
let cartItems = localStorage.getItem("productsIncart");
cartItems=JSON.parse(cartItems);

if(cartItems != null ){
    if(cartItems[product.tag]==undefined){
        cartItems={
            ...cartItems, 
              [product.tag]:product

        }
    }
    cartItems[product.tag].inCart +=1;

}
else{
    
product.inCart=1;

cartItems = {
   [product.tag]:product
}
}
localStorage.setItem("productsIncart", JSON.stringify(cartItems));
console.log(cartItems);
}

function totalCost(product){
  let cartCost=localStorage.getItem("totalCost");
   cartCost=Number(cartCost);
   if(cartCost != null){
    localStorage.setItem("totalCost", cartCost + product.price);
   }
   else{
    localStorage.setItem("totalCost",product.price);
   }

   

}

/*delet element-*/

function delElement(item){
    let cartItems=localStorage.getItem('productsIncart');
    cartItems=JSON.parse(cartItems);
   
    let deletElement=Object.values(cartItems).find(delitem => delitem.tag == item );
   
  
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers=parseInt(productNumbers);
    let cartCost=localStorage.getItem("totalCost");
    cartCost=Number(cartCost);
  
 
    localStorage.setItem("cartNumbers",productNumbers-deletElement.inCart);

    onLoadCartNumbers();


    localStorage.setItem("totalCost",cartCost-(deletElement.price*deletElement.inCart));
 
 
   cartItems = Object.values(cartItems).filter(delitem => delitem.tag != item );
  
   
   localStorage.setItem("productsIncart", JSON.stringify(cartItems));


   displayCart();

  
}

function displayCart(){
    let cartItems=localStorage.getItem('productsIncart');
    cartItems=JSON.parse(cartItems);
 
    let addcart=document.querySelector(".cart");
    let cartCost=localStorage.getItem("totalCost");
   

    if(cartItems && addcart  ){
       addcart.innerHTML=`<div class='w-75  container '>
       <table class="table  ">
       <thead>
         <tr class=' d-flex justify-content-between '>
           <th scope="col">Title</th>
           <th scope="col">Price</th>
           <th scope="col">image</th>
           <th scope="col ">quantity</th>
         </tr>
       </thead>
       <tbody>
       </tbody>
     </table> <div>`;
  Object.values(cartItems).map(item => {
    addcart.innerHTML+=`
    <div class='element container w-100  d-flex justify-content-evenly pt-1 px-5' >
    
    <span class='title w-25 align-items-center d-flex'>${item.name}</span>
    <span class='price w-25 align-items-center d-flex' > ${item.price}$</span>
   
 <div class=' w-25'>
    <img src='assets/image/products/shopImages/${item.tag}.jpg' class='w-50'/>
</div>
<div class='align-items-center d-flex'>
    <button class=' delet btn border border-1 bg-danger  px-4 py-3 text-white rounded-3' onclick='delElement(${item.tag})' >Delet</button>
    </div>  
 
    <span class=' align-items-center d-flex' > ${item.inCart}</span>
    </div>
    `
  })
  addcart.innerHTML+=`<div class=' total container w-75 d-flex justify-content-evenly pt-5 '> 
  <span class='fs-4 d-flex align-items-center '>Total cost =  ${cartCost}.00$ </span>
  <a href="" class=' btn border border-1 bg-info  px-5 py-2 text-white rounded-3'>Buy Now</a>
  </div>`


    }

 if( cartItems.length==0){
  console.log("im here");
  addcart.innerHTML=` <div class="container">
  <div class="row justify-content-center ">
    <div class="col-lg-4 ">
      <div class="icon-shop position-relative "></div>
    </div>
    <div class="col-lg-6 ">
      <div class="content">
        <div class="p-befor mb-5 text-lg-start text-center">
          <p class="text-center">Your cart is currently empty.</p>
          <a  href="products.html" class="btn border border-1 bg-info  px-5 py-2 text-white rounded-3 mt-5 mx-5 fw-bolder" >RETURN TO SHOP</a>
        </div>

      </div>
    </div>
  </div>
</div>
`
 }

}




onLoadCartNumbers();
displayCart();