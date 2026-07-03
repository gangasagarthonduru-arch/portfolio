const words = [
    "Software Developer",
    "Python Developer",
    "Flask Developer",
    "Frontend Developer"
    
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

    let currentWord = words[wordIndex];

    if(!isDeleting){

        typing.textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }

    else{

        typing.textContent =
        currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex === words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,
    isDeleting ? 60 : 120);

}

typeEffect();
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.body.scrollTop > 400 ||
       document.documentElement.scrollTop > 400){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

}

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}





const menuBtn = document.querySelector(".menu-btn");
const navLinksMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinksMenu.classList.toggle("active");
});
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }else{
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

});