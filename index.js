var menu = document.getElementById("menu")
var close = document.getElementById("close")

var listOptions = document.getElementById("listOptions")

const disappear = document.getElementById('disappear')
const toAppear = document.getElementById('to-appear')

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

document.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
         disappear.style.display = 'none'
         toAppear.style.display = 'flex'
    } else {
         disappear.style.display = 'flex'
         toAppear.style.display = 'none'
    }
})
