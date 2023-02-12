/* scroll to top */
document.querySelector(".top-icon").style.opacity = 0;
window.addEventListener("scroll", function () {
  let loginPos = this.document.querySelector(".login").offsetTop;
  if (window.scrollY > loginPos) {
    document.querySelector(".top-icon").style.opacity = 1;
    document.querySelector(".top-icon").style.transition = "0.7s";
  } else {
    document.querySelector(".top-icon").style.opacity = 0;
    document.querySelector(".top-icon").style.transition = "0.7s";
  }
});

let topbtn = document.querySelector(".top");
topbtn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behaviour: "smooth",
  });
});
/* end nav */
/* start login*/

var exampleInputEmail1 = document.getElementById("exampleInputEmail1");
var exampleInputPassword1 = document.getElementById("exampleInputPassword1");
var exampleInputEmail2 = document.getElementById("exampleInputEmail2");
var exampleInputEmail2 = document.getElementById("exampleInputEmail2");

function adduser(e) {
e.preventDefault();
window.console.log(exampleInputEmail1.value ,exampleInputPassword1.value );
}

