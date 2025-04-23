import {greeting} from "./greeting.js";
import "./style.css";


const images = document.querySelectorAll('.image');
let previousIndex = 0;

const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', ()=>{
    images[previousIndex].className = 'image';
    if(previousIndex + 1 >= images.length){
        previousIndex = -1;
    }
    images[previousIndex + 1].className = 'image active';
    previousIndex++;
})