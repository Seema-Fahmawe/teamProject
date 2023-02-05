
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


let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        if (scrollY > 70) {
            document.querySelector(".navbar-brand").style.marginTop = "-12px";
            document.querySelector(".navbar-brand").style.marginBottom = "-12px";
           
        } else {

            document.querySelector(".navbar-brand").style.marginTop = "0";
            document.querySelector(".navbar-brand").style.marginBottom = "0";
        }

    } else {
        document.getElementById("navbar").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
}

