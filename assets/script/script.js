/* loading header*/
let carousel = document.querySelector(".carousel");
carousel.style.opacity = 0;
document.querySelector(".loading").style.visibility = "visible";
window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector(".loading").style.visibility = "hidden";
        carousel.style.opacity = 1;
        carousel.style.transition = "2s";
    }, 2000)

})

/* header scroll */
let caption = document.querySelectorAll(".carousel-caption");
window.addEventListener("scroll", function () {
    caption.forEach((caption) => {
        if (window.scrollY > 60) {
            caption.style.transform = "translateY(220px)";
            caption.style.opacity = 0;
            caption.style.transition = "all 0.7s";
        } else {
            caption.style.transform = "translateY(0px)";
            caption.style.opacity = 1;
            caption.style.transition = "all 0.7s";
        }
    })

})


/* scroll to top */
document.querySelector(".top-icon").style.opacity = 0;
window.addEventListener("scroll", function () {
    let newProductPos = this.document.querySelector(".newProduct").offsetTop;
    if (window.scrollY > newProductPos) {
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

