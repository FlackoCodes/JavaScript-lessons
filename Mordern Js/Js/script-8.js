// DOM
const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText);

listItems.forEach(element => {
    element.style.color = 'red'
});