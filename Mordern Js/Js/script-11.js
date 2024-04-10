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

const onChecked = (e) =>{
    const isChecked = e.target.checked
    if (isChecked) {
        heading.textContent = `checkbox has been checked: ${isChecked}`
    } else {
        heading.textContent = `checkbox has not been checked`
    }
}

inputItem.addEventListener('input', onInput)
priorityItem.addEventListener('change', onSelect)
checkbox.addEventListener('input', onChecked)


arr = [1,2,3]
mappedarr = arr.map((x)=> x*2)
console.log(mappedarr);