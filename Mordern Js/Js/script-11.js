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


const small = document.querySelector('small')

const onHover = (e) =>{
    inputItem.style.borderColor = 'red'
}

inputItem.addEventListener('focus', onHover)



// form submission


const form = document.getElementById('item-input')

const onSubmit = (e) =>{
    e.preventDefault()
    const item = document.getElementById('item-input').value
    const formSelect = document.getElementById('form-select')

    if (item == '' || formSelect == '0') {
        alert('please fill all fields')
    }
}

form.addEventListener('submit', onSubmit)

// window.onload => allows to load script when the file is placed at the top