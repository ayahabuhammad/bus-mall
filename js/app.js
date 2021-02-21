'use strict';

const productImages = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg',
  'chair.jpg'
];


const leftProductImg = document.querySelector('#left_product_img');
const centerProductImg = document.querySelector('#center_product_img');
const rightProductImg = document.querySelector('#right_product_img');
const groupProductImages = document.getElementById('all_products');
let products = [];//an array to store all products object
let totalClicks = 0;

/////////////////////////////////////////////////////////////////////////////

//constructor function
function Product(name){
  this.name = name.split('.')[0];
  this.urlImage = `images/${name}`;
  this.clicksNumber = 0;
  this.viewsNumber = 0;
  products.push(this);//this its refer to the object that im created
}

//////////////////////////////////////////////////////////////////////////////

let leftImageRandom ;
let centerImageRandom ;
let rightImageRandom ;

function pickRandomImages(){
  leftImageRandom = products[randomNumber(0 , products.length-1 )];
  centerImageRandom = products[randomNumber(0 , products.length-1 )];
  rightImageRandom = products[randomNumber(0 , products.length-1 )];


  leftProductImg.setAttribute('src' , leftImageRandom.urlImage);
  leftProductImg.setAttribute('alt' , leftImageRandom.name);
  centerProductImg.setAttribute('src' , centerImageRandom.urlImage);
  centerProductImg.setAttribute('src' , centerImageRandom.urlImage);
  rightProductImg.setAttribute('src' , rightImageRandom.urlImage);
  rightProductImg.setAttribute('alt' ,rightImageRandom.name);


  while(leftImageRandom===centerImageRandom || rightImageRandom === centerImageRandom || leftImageRandom === rightImageRandom){
    leftImageRandom = products[randomNumber(0 , products.length-1 )];
    centerImageRandom = products[randomNumber(0 , products.length-1 )];
    rightImageRandom = products[randomNumber(0 , products.length-1 )];

    leftProductImg.setAttribute('src' , leftImageRandom.urlImage);
    leftProductImg.setAttribute('alt' , leftImageRandom.name);
    centerProductImg.setAttribute('src' , centerImageRandom.urlImage);
    centerProductImg.setAttribute('src' , centerImageRandom.urlImage);
    rightProductImg.setAttribute('src' , rightImageRandom.urlImage);
    rightProductImg.setAttribute('alt' ,rightImageRandom.name);

  }
}

/////////////////////////////////////////////////////////////////////////

for(let i = 0; i< productImages.length ; i++){
// console.log(productImages[i]);
  new Product(productImages[i]);
}
pickRandomImages();



//////////////////////////////////////////////////////////////////////////

groupProductImages.addEventListener('click' , clickImage);

function clickImage(event){

  if(totalClicks < 25 ){

    if( event.target.id === 'left_product_img'){
      leftImageRandom.clicksNumber++;
    } if (event.target.id === 'center_product_img' ){
      centerImageRandom.clicksNumber++;
    } if (event.target.id === 'right_product_img'){
      rightImageRandom.clicksNumber++;
    }
    totalClicks++;
    leftImageRandom.viewsNumber++;
    rightImageRandom.viewsNumber++;
    centerImageRandom.viewsNumber++;

    pickRandomImages();
  } if (totalClicks === 25){
    groupProductImages.removeEventListener('click' , clickImage);
    render();
    //console.log('finished');
  }
}


/////////////////////////////////////////////////////////////////////////

function render() {
  const ulE1 = document.getElementById('theEnd');
  for (let i =0; i<products.length ; i++) {
    const liE1 = document.createElement('li');
    liE1.textContent = `${products[i].name} had ${products[i].clicksNumber} votes and was shown ${products[i].viewsNumber} times`;
    ulE1.appendChild(liE1);
  }
}

///////////////////////////////////////////////////////////////////////

// //helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
