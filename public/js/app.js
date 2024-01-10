let headerResponsiveClose = document.querySelector("#header-responsive-close")
let headerHamburgerMenu = document.querySelector("#header-hamburger-menu")
let headerResponsiveMenu = document.querySelector("#header-responsive-menu")
let headerResponsiveClose1 = document.querySelector("#header-responsive-close-1")
let headerHamburgerMenu1 = document.querySelector("#header-hamburger-menu-1")
let headerResponsiveMenu1 = document.querySelector("#header-responsive-menu-1")

headerHamburgerMenu.addEventListener('click' , function(){
headerResponsiveMenu.classList.remove("-left-full")
headerResponsiveMenu.classList.add("left-0")
})
headerResponsiveClose.addEventListener('click', function(){
headerResponsiveMenu.classList.add("-left-full")
headerResponsiveMenu.classList.remove("left-0")
})


