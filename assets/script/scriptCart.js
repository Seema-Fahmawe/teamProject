

document.querySelector(".top-icon").style.opacity = 0;
window.addEventListener("scroll", function () {
    let cartPos = this.document.querySelector(".cart").offsetTop;
    if (window.scrollY > cartPos) {
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


/*navbar */
let prevScrollpos = window.pageYOffset;
let navLink = document.querySelector(".nav-link::after");
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        if (scrollY > 70) {
            document.querySelector(".navbar-brand").style.marginTop = "-12px";
            document.querySelector(".navbar-brand").style.marginBottom = "-12px";
            document.getElementById("navbar").style.backgroundColor = "red";
            document.querySelector(".nav-link").scroll.color = "#252525";
            for (let i = 0; i < navLink.length; i++) {
                navLink.style.bottom = "0px ";
            }
        } else {

            document.querySelector(".navbar-brand").style.marginTop = "0";
            document.querySelector(".navbar-brand").style.marginBottom = "0";
            document.getElementById("navbar").style.backgroundColor = "transparent";
            document.querySelector(".nav-link").scroll.color = "#fff";


        }

    } else {
        document.getElementById("navbar").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
}