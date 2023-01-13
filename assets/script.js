let caption = document.querySelectorAll(".caption");
window.addEventListener("scroll", function () {
    caption.forEach((caption) => {
        if (window.scrollY > 54) {
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


