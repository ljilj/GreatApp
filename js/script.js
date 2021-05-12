// Toggle menu
const navToggle = document.querySelector('.js-menu-toggle');
const links = document.querySelector('.links__container');
const body = document.querySelector('body');

navToggle.addEventListener('click', function() {
    links.classList.toggle("active-menu");
    body.classList.toggle('lock-scroll');
});


// Slider
const slides = document.querySelector('.slider').children;
// console.log(slides);
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicator = document.querySelector('.indicator');
let index = 0;

prev.addEventListener('click', function() {
    prevSlide();
    updateCircleIndicator();
});

next.addEventListener('click', function() {
    nextSlide();
    updateCircleIndicator();
});

function prevSlide(){
    if(index == 0){
        slides.length = 0;
    } else {
        index--;
    }
    // console.log(index);
    changeSlide();
}

function nextSlide(){
    if(index == slides.length - 1){
        index = 3;
    } else {
        index++;
    }
    // console.log(index);
    changeSlide();
}

function changeSlide(){
    for(let i=1; i<slides.length; i++){
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}

function circleIndicator(){
    for(let i=0; i<slides.length; i++){
        const div = document.createElement("div");
        div.setAttribute("onclick", "indicateSlide(this)"); 
        div.id = i;
        if(i == 0) {
            div.className = "active";
        }
        indicator.appendChild(div);
    }
}
circleIndicator();

function indicateSlide(element){
    index=element.id;
    changeSlide();
    updateCircleIndicator();
}

function updateCircleIndicator(){
    for(let i=0; i<indicator.children.length; i++){
        indicator.children[i].classList.remove('active');
    }
    indicator.children[index].classList.add('active');
}
