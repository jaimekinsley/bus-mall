// Creat a function that will select three random photos from the available product images and display them side-by-side-by-side in the browser window

// importing the products array
import { productArray } from './products.js';

// finding the products by ID
export function findById(productArray, id){
    for (let i = 0; i < productArray.length; i++){
        const item = productArray[i];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}