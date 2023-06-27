const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


// Js navbar
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

// Load more cho #ưu đãi, #kinh nghiệm
var btnIncentives = $('.btn-incentives')
var btnExperience = $('.btn-experience')
var incentives = $$('.incentives-block .incentives')
var experience = $$('.experience-block .experience')

var incentivesIndex = 4
var experienceIndex = 4

btnIncentives.onclick = function() {
    this.innerHTML = '<div class="loader"></div>'
    setTimeout(() => {
        for (var i = incentivesIndex; i < incentivesIndex + 4; i++) {
            if (incentives[i]) {
                incentives[i].style.display = 'block'
                btnIncentives.innerHTML = 'Xem thêm'
            }
        }
        incentivesIndex += 4
        if (incentivesIndex >= incentives.length) {
            btnIncentives.style.display = 'none'
        }
    }, 1000)
} 

btnExperience.onclick = function() {
    this.innerHTML = '<div class="loader"></div>'
    setTimeout(() => {
        for (var i = experienceIndex; i < experienceIndex + 4; i++) {
            if (experience[i]) {
                experience[i].style.display = 'block'
                btnExperience.innerHTML = 'Xem thêm'
            }
        }
        experienceIndex += 4
        if (experienceIndex >= experience.length) {
            btnExperience.style.display = 'none'
        }
    }, 1000)
} 


// Accordion cho faq
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


// Đổi background đại diện khi responsive 
var homeBg = $('.section-home img') // Home background

function loadMore(mediaRes) {
    if (mediaRes.matches) { // So khớp
      homeBg.src = './assets/images/bgresponsive.png'
    } else {
      homeBg.src = './assets/images/HomeBackground.jpg'
    }
}
  

var mediaRes = window.matchMedia("(max-width: 576px)")
loadMore(mediaRes)
mediaRes.addListener(loadMore)



// Ẩn hiện nội dung cho cái modal
var contentIncentives = $$('.page-incentives')
var contentExperience = $$('.page-experience')
var btnModalClose = $('.btn-close-modal')

incentives.forEach((item, index) => {
    item.onclick = function() {
        contentIncentives[index].classList.add('open')
        btnModalClose.onclick = function() {
            contentIncentives[index].classList.remove('open')
        }
    }
})

experience.forEach((item, index) => {
    item.onclick = function() {
        contentExperience[index].classList.add('open')
        btnModalClose.onclick = function() {
            contentExperience[index].classList.remove('open')
        }
    }
})
