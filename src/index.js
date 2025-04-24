import "./style.css";




const images = document.querySelectorAll('.image');
const imageCount = images.length;
const circlesContainer = document.querySelector('#circles');

let currentIndex = 0;

for(let i = 0; i < imageCount; i++){
    const dot = document.createElement('p');
    if(i === 0){
        dot.innerHTML = '●';
    }
    else {
        dot.innerHTML = '○';
    }
    dot.className = `circle-${i}`;
    circlesContainer.appendChild(dot);
}

const dots = document.querySelectorAll('[class^="circle-"]');

const changePreviousDot = (index) => {
    const previousDot = document.querySelector(`.circle-${index}`);
    previousDot.innerHTML = '○';
}

const changeNewDot = (index) => {
    const dot = document.querySelector(`.circle-${index}`)
    dot.innerHTML = '●';
}


const moveForward = () => {
    //Current image becomes hidden
    images[currentIndex].className = 'image';

    changePreviousDot(currentIndex);
    //Check if index reaches the end
    if(currentIndex + 1 >= images.length){
        currentIndex = -1;
    }
    //Shows next image
    images[currentIndex + 1].className = "image active";
    
    console.log(currentIndex)

    currentIndex++;
    changeNewDot(currentIndex);
}

const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', moveForward);

const previousButton = document.querySelector('#previous');
previousButton.addEventListener('click', ()=>{
    images[currentIndex].className = 'image';
    changePreviousDot(currentIndex);
    if(currentIndex - 1 < 0){
        currentIndex = images.length;
    }
    images[currentIndex - 1].className = "image active";
    currentIndex--;
    changeNewDot(currentIndex);
});

//Fix bug
dots.forEach((dot)=>{
    dot.addEventListener('click', () => {
        const index = Number(dot.className.slice(7));
        changePreviousDot(currentIndex);
        images[currentIndex].className = 'image';
        currentIndex = index;
        images[currentIndex].className = "image active";
        changeNewDot(currentIndex);
    })
})

setInterval(moveForward, 5000);

