var menu = document.getElementById("menu")
var close = document.getElementById("close")

var listOptions = document.getElementById("listOptions")

function OpenMenu() {
    menu.style.display = 'none'
    close.style.display = 'block'
    listOptions.style.display = 'block'
}

function CloseMenu(){
    menu.style.display = 'block'
    close.style.display = 'none'
    listOptions.style.display = 'none'
}

function checkScreenSize() {
    if (window.innerWidth > 800) {
        listOptions.style.display = 'flex'

        menu.style.display = 'none'
        close.style.display = 'none'
    } else {
        listOptions.style.display = 'none'

        menu.style.display = 'block'
    }
}

window.addEventListener('resize', checkScreenSize)

checkScreenSize()
