// input events

const inputItem = document.querySelector('#item-input');
const priorityItem = document.querySelector('#form-select');
const checkbox = document.querySelector('#checkbox');
const heading = document.querySelector('h1');


const onInput = (e) =>{
    heading.textContent = e.target.value;
}

const onSelect = (e) =>{
    heading.textContent = e.target.value
}

inputItem.addEventListener('input', onInput)
priorityItem.addEventListener('change', onInput)

