
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

const createListItem = (item) => {
    const ul = document.querySelector('ul')

    const li = document.createElement('li')
    const liText = document.createTextNode(item)
    li.appendChild(liText)


    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red'

    const icon = document.createElement('i')
    icon.className = 'fa-solid fa-xmark'

    button.appendChild(icon)
    li.appendChild(button)
    ul.appendChild(li)
    console.log(li);


}

createListItem('Berris')
createListItem('Grapes')
