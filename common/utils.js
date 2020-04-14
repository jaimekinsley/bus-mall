// STEP 2: Create a function that will select three random photos from the available product images and display them side-by-side-by-side in the browser window

// importing the products array
import productArray from './products.js';
// getting some image id's from the DOM
const image1 = document.getElementById('image-1');
const image2 = document.getElementById('image-2');
const image3 = document.getElementById('image-3');

const productName1 = document.getElementById('product-name1');
const productName2 = document.getElementById('product-name2');
const productName3 = document.getElementById('product-name3');

const button = document.getElementById('next-button');

// get one random product
function getRandomProduct(productArray){
    console.log(productArray);
    const randomIndex = Math.floor(Math.random() * productArray.length);
    return productArray[randomIndex];
}

// get three random products
function getThreeProducts(){
    let productOne = getRandomProduct(productArray);
    let productTwo = getRandomProduct(productArray);
    let productThree = getRandomProduct(productArray);

// make sure all three are different
    while (productOne.id === productTwo.id || productTwo.id === productThree.id || productThree.id === productOne.id){
        productOne = getRandomProduct(productArray);
        productTwo = getRandomProduct(productArray);
        productThree = getRandomProduct(productArray);
    }

// display the images on the HTML
    image1.src = `../assets/${productOne.image}`;
    image2.src = `../assets/${productTwo.image}`;
    image3.src = `../assets/${productThree.image}`;

    productName1.textContent = productOne.name;
    productName2.textContent = productTwo.name;
    productName3.textContent = productThree.name;

}    

button.addEventListener('submit', getThreeProducts);
getThreeProducts();