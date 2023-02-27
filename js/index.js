$(document).ready(function () {
    $('.sixth-section__content-slide').owlCarousel({

        loop: true,
        margin: 30,
        nav: true,
        dot: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            
            800: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    })
});
$(document).ready(function () {
    $('.seventh-section__slide').owlCarousel({

        loop: true,
        margin: 30,
        nav: false,
        dot: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});


var menuNav = document.getElementsByClassName("header-menu")[0].getElementsByTagName("ul")[0].getElementsByTagName("span")
// console.log(menuNav[i])

//     menuNav[i].addEventListener("click",function (event){
//         // alert(i)
//         console.log(menuNav[i].parentElement)
//     } );
var check = true;
for (var i = 0; i < menuNav.length; i++) {

    menuNav[i].addEventListener('click', ((j) => {

        return function () {
            for (var s = 0; s < menuNav.length; s++) {
                document.getElementsByClassName("header-menu__lever2")[s].setAttribute("style", "display:none !important")

            }
            if (check == j) {
                document.getElementsByClassName("header-menu__lever2")[j].setAttribute("style", "display:none !important")
                check = true


            } else {
                document.getElementsByClassName("header-menu__lever2")[j].setAttribute("style", "display:block !important")
                menuNav[j].style.display = "block"
                check = j

            }
        }
    })(i))
}

document.getElementsByClassName("mobile-nav")[0].getElementsByTagName("span")[0].addEventListener("click",function() {
    document.getElementsByClassName("header-menu")[0].style.display = "none"
})

document.getElementsByClassName("fa-bars")[0].addEventListener("click",function() {
    document.getElementsByClassName("header-menu")[0].style.display = "block"
})


var lastSoto =0
function loadTop() {
    var top = document.getElementsByClassName('top')[0]
    var loadTop = document.getElementsByClassName('header-care')[0]
    window.addEventListener('scroll',() => {
        
        if(window.scrollY>100) {
            top.style.display = "block"
        }else {
            top.style.display = "none"
        }


        var st = window.pageYOffset
        if (st>lastSoto || st==0) {
                loadTop.classList.remove('header-care-load')
        }else if(st<lastSoto ) {
                loadTop.classList.add('header-care-load')
        }
        lastSoto = st <= 0 ? 0 :st;
    })
}

loadTop()