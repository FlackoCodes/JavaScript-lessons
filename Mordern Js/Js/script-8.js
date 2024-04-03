
const listItems1 = document.getElementsByClassName('item'); // returns an HTMLCollection(arraylike), has to cohersed into an array before hihj order array methods can be used on
console.log(listItems1);

// use array.from to coherse it into an array

listitmes1Array = Array.from(listItems1) // now high order array methods can be called on it
console.log(listitmes1Array);


// listItems1.forEach(element => {  
//     element.style.color = 'red' // ---> retruns a typeerror
// });


// document.query selector returns NodeList, high order array methods can be used/called on a NodeList

// for each method passes each elemnt of the arry as the fisrt argument to the callback function
const listItems2 = document.querySelectorAll('.item')
listItems2.forEach((element, index ) => {
    if (index ==2){
        console.log(element.innerText);
        element.remove()
    }
});

