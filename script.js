const btnsNav = document.querySelectorAll('.button-nav')
const kitImg = document.querySelector('.kit-img')
let n = 0

console.log(kitImg.children)

btnsNav.forEach(btn => {
    for(let i = 0; i < btnsNav.length; i++) {
        btn.addEventListener('click', navigation)
    }
})

kitImg.children[0].style.display = 'block'

function navigation(e) {
    kitImg.children[n].style.display = 'none'
    let btn = e.currentTarget
    if(btn.innerHTML === 'next') {
        n++
        if(n >= kitImg.children.length) {
            n = 0
        }
    }
    else {
        n--
        if(n < 0) {
            n = kitImg.children.length - 1
        }
    }
    kitImg.children[n].style.display = 'block'

}