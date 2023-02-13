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

