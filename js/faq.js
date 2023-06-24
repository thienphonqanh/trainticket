const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var navbarBtnOpen = $('.navbar-toggler')
var navbarCollapse = $('.navbar-collapse')
var navbarBtnClose = $('.btn-close')


navbarBtnOpen.onclick = function() {
    navbarCollapse.style.animation = 'opacity .5s'
    navbarCollapse.style.display = 'block'
    this.style.display = 'none'
    navbarBtnClose.classList.remove('d-none')
}

navbarBtnClose.onclick = function() {
    navbarCollapse.style.display = 'none'
    navbarBtnOpen.style.display = 'block'
    this.classList.add('d-none')
}


var faqs = $$('.content-right .faq')

faqs.forEach(faq => {
    faq.onclick = function() {
        var open = $('.faq.active')
        faq.classList.toggle('active')
        if (open) {
            open.classList.remove('active')
        }
       
    }
})
