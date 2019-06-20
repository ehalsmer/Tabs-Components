const leftButton = document.querySelector('.leftBtn');
const rightButton = document.querySelector('.rightBtn');

// leftButton.addEventListener('click', event => {goLeft()});

// goLeft()

rightButton.addEventListener('click', event => {
});

class Image {
    constructor(element){
    this.element = element;
    this.data = this.element.dataset.imageId
    }
    scrollRight(){
    }
}



const images = document.querySelectorAll('.images>img')
images.forEach(img => new Image(img));