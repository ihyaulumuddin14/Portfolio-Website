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


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

document.querySelectorAll(".progress span").forEach(el => observer.observe(el));



//scrol-up
const container = document.querySelector(".container");
const scrollUpContent = document.querySelector('.scroll-up');
const aboutSection = document.getElementById('about');
const aboutPosition = aboutSection.getBoundingClientRect().top + window.scrollY;

let calcScrollValue = () => {
    let pos = container.scrollTop;
    let opacity = pos / aboutPosition;
    
    if (opacity > 1) {
        opacity = 1
        scrollUpContent.removeAttribute('disabled')
        scrollUpContent.style.cursor = 'pointer';
    } else {
        scrollUpContent.setAttribute('disabled', true)
        scrollUpContent.style.cursor = 'default';
    }

    scrollUpContent.addEventListener('click', () => {
        const targetSection = document.getElementById('home');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    })
    
    scrollUpContent.style.opacity = opacity;
};


container.addEventListener("scroll", calcScrollValue);
container.addEventListener("load", calcScrollValue);