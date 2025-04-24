import "./style.css";


const images = document.querySelectorAll('.image');
const dots = document.querySelectorAll('.circle');
let currentIndex = 0;

const moveForward = () => {
    //Current image becomes hidden
    images[currentIndex].className = 'image';
    //Check if index reaches the end
    if(currentIndex + 1 >= images.length){
        currentIndex = -1;
    }
    //Shows next image
    images[currentIndex + 1].className = "image active";
    currentIndex++;
}

const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', moveForward);

const previousButton = document.querySelector('#previous');
previousButton.addEventListener('click', ()=>{
    images[currentIndex].className = 'image';
    if(currentIndex - 1 < 0){
        currentIndex = images.length;
    }
    images[currentIndex - 1].className = "image active";
    currentIndex--;
});

//Fix bug
dots.forEach((dot)=>{
    dot.addEventListener('click', () => {
        const index = Number(dot.className.slice(-1));
        images[currentIndex].className = 'image';
        currentIndex = index;
        images[currentIndex].className = "image active";
    })
})

// setInterval(moveForward, 5000);

