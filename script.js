const btnsNav = document.querySelectorAll('.button-nav')
const kitImg = document.querySelector('.kit-img')
let n = 0

btnsNav.forEach(btn => {
    for(let i = 0; i < btnsNav.length; i++) {
        btn.addEventListener('click', navigation)
    }
})

btnsNav[0].disabled = true


function navigation(e) {
    let btn = e.currentTarget
    
    if(btn.innerHTML === 'next') {
        n -= 400
        kitImg.style.left = n + 'px'
    } else {
        n += 400
        kitImg.style.left = n + 'px'
    }

    if(n === -800 || n === 0) {
        btn.disabled = true
    } else {
        btnsNav.forEach(btn => {
            for(let i = 0; i < btnsNav.length; i++) {
                btn.disabled = false
            }
        })}

}