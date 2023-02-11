

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