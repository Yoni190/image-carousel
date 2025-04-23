import {greeting} from "./greeting.js";
import "./style.css";


const images = document.querySelectorAll('.image');
let currentIndex = 0;

const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', ()=>{
    images[currentIndex].className = 'image';
    if(currentIndex + 1 >= images.length){
        currentIndex = -1;
    }
    images[currentIndex + 1].className = 'image active';
    currentIndex++;
});

const previousButton = document.querySelector('#previous');
previousButton.addEventListener('click', ()=>{
    images[currentIndex].className = 'image';
    if(currentIndex - 1 < 0){
        currentIndex = images.length;
    }
    images[currentIndex - 1].className = 'image active';
    currentIndex--;
})