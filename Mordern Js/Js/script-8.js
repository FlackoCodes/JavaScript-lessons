
// const listItems1 = document.getElementsByClassName('item'); // returns an HTMLCollection(arraylike), has to cohersed into an array before hihj order array methods can be used on
// console.log(listItems1);

// // use array.from to coherse it into an array

// listitmes1Array = Array.from(listItems1) // now high order array methods can be called on it
// console.log(listitmes1Array);


// // listItems1.forEach(element => {  
// //     element.style.color = 'red' // ---> retruns a typeerror
// // });


// // document.query selector returns NodeList, high order array methods can be used/called on a NodeList

// // for each method passes each elemnt of the arry as the fisrt argument to the callback function
// const listItems2 = document.querySelectorAll('.item')
// listItems2.forEach((element, index ) => {
//     if (index ==2){
//         console.log(element.innerText);
//         element.remove()
//     }
// });

// // creating elements in the dom
// const div = document.createElement('div')
// div.className = 'new-element'

// const newText = document.createTextNode('newly created element')
// div.appendChild(newText)

// document.body.appendChild(div)
// div.style.textAlign = 'center'

// creating seperate functions for each tag 


const creatButton = (classNames) =>{
    const button = document.createElement('button');
    button.className = classNames
    return button
}
creatButton('classname')

const creatIcon = (classNames) =>{
    const icon = document.createElement('i')
    icon.className = classNames
    return icon
}
const createListItem = (item) => {
    /* 
    // select the ul tag so we append the newly created li select the ul 
    or we use query selector to get the  className
    */
    const ul = document.querySelector('ul'); 

    const li = document.createElement('li')
    const liText = document.createTextNode(item)
    li.appendChild(liText)

    const button = creatButton('remove-item btn-link text-red')
    // console.log(`newly created button`);

    const icon = creatIcon('fa-solid fa-xmark')
    // console.log('newly created icon');

    button.appendChild(icon)
    li.appendChild(button)
    ul.appendChild(li)

}

createListItem('Berris')
createListItem('Grapes')
createListItem('Citrus')

// replacing elements
// const replaceFirstItem = () => {
//     const fisrtItem = document.querySelector("li:nth-child(1)")
//     fisrtItem.textContent = 'Replaced Item'
// }
// replaceFirstItem()


// clearing / removing elements

// const removeClearButton = () =>{
//     const clearBtn = document.querySelector('.btn-clear')
//     clearBtn.remove()
// }

// removeClearButton()

// using event listeners to remove the x btn

const delBtn = document.querySelectorAll('.fa-solid');

const deleteItem = (event) => {
    // Access the parent <li> element of the clicked button
    const listItem = event.target.closest('.item');
    // Remove the parent <li> element
    listItem.remove();
}


delBtn.forEach(element => {
    element.addEventListener('click', deleteItem)
});

