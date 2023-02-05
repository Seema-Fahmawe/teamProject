
/* scroll to top */
document.querySelector(".top-icon").style.opacity = 0;
window.addEventListener("scroll", function () {
    let newDiagonalHoverPos = this.document.querySelector(".SupremaHover").offsetTop;
    if (window.scrollY > newDiagonalHoverPos) {
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

