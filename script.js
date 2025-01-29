const navBtn = document.querySelectorAll('nav ul label')
const homeR = document.getElementById('homeR')
const aboutR = document.getElementById('aboutR')
const workR = document.getElementById('workR')
const contactR = document.getElementById('contactR')
const radioButtons = document.querySelectorAll('nav input[type="radio"]')
const lightIcon = document.querySelector('.bx-sun')
const darkIcon = document.querySelector('.bx-moon')
const themeToggle = document.querySelector('.theme-toggle')
const themeCircle = document.querySelector('.theme-toggle .circle')
const bodyTag = document.querySelector('body')

navBtn.forEach(nav => {
    nav.addEventListener('click', () => {
        const correspondingRadio = document.getElementById(nav.htmlFor);

        radioButtons.forEach(radio => {
          radio.checked = false; 
        });
        correspondingRadio.checked = true; 

        nav.classList.add('nav-active')
        navBtn.forEach(otherNav => {
            if (otherNav != nav) otherNav.classList.remove('nav-active')
        })

        const targetSection = document.getElementById(correspondingRadio.value)
        targetSection.scrollIntoView({ behavior: 'smooth' })
    })

    
})

themeToggle.addEventListener('click', () => {
    bodyTag.classList.toggle('dark-mode')

    if (bodyTag.classList.contains('dark-mode')) {
        themeCircle.style.transform = 'translateX(150%)'
        lightIcon.style.display = 'none'
        darkIcon.style.display = 'inline'
    } else {
        themeCircle.style.transform = 'translateX(0%)'
        lightIcon.style.display = 'inline'
        darkIcon.style.display = 'none'
    }
})


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show"); // Hapus animasi saat keluar viewport
        }
    });
});

document.querySelectorAll(".progress span").forEach(el => observer.observe(el));


const indicators = document.querySelectorAll('.quote-container input')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const quotesContainer = document.querySelector('.article-container')

let currentIndicatorIndex = 0
let autoSlideInterval;

function updateCarousel() {
    quotesContainer.style.transform = `translateX(-${currentIndicatorIndex * 25}%)`

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('.active-indicator', index == currentIndicatorIndex)
    })
}

function nextSlide() {
    currentIndicatorIndex = (currentIndicatorIndex + 1) % 5
    updateCarousel()
    console.log(currentIndicatorIndex)
}

function prevSlide() {
    currentIndicatorIndex = (currentIndicatorIndex - 1 + 5) % 5
    console.log(currentIndicatorIndex)
}

function autoResetSlide() {
    clearInterval(autoSlideInterval)
    autoSlideInterval = setInterval(() => {
        nextSlide()
    }, 5000)
}

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)

autoSlideInterval = setInterval(nextSlide, 5000)