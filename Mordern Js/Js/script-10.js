// event listeners 
const header = document.querySelector('h1')


// callack functions, mainly functions passed as arguments into another function.

// adding event listeners

const clearBtn = document.querySelector('#clear')

const addEvent = () => {
    console.log('clear button is clicked');
}

clearBtn.addEventListener('click', addEvent);

// the callback function is not called with parenthesis to prevent the function from firing automatically

// event object (e)

const addBtn = document.querySelector('.btn')

addBtn.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(e.target);
    console.log(e.type); // type of event triggered
    e.target.style.color = 'red';

})

const onDrag = (e) => {
    header.textContent = `X ${e.clientX} Y ${e.clientY}`
}

header.addEventListener('drag', onDrag)

// keyboard events and keyboard properties

const inputField = document.querySelector('#item-input');



const onKeyPress = (e) =>{
    console.log('you have pressed the input field');
} 

const onKeyPress2 = (e) =>{
    if (e.key == 'Enter') {
        alert('you pressed enter')
    }
}

inputField.addEventListener('keypress', onKeyPress)
inputField.addEventListener('keypress', onKeyPress2)

