// DOM
// const listItems = document.querySelectorAll('.item');
// console.log(listItems[1].innerText);

// listItems.forEach(element => {
//     element.style.color = 'red'
// });

let evenNumbers = []
for (let index = 1; index < 10; index++) {
    if (index % 2 != 0) {
        evenNumbers.push(index)
    }
}

console.log(evenNumbers);

for (let index = 10; index > 0; index = index-1) {
    console.log(index);    
}