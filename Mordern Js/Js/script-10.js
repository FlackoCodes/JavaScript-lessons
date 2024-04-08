// event listeners 

// callack functions, mainly functions passed as arguments into another function.

// adding event listeners

const clearBtn = document.querySelector('#clear')

const addEvent = () => {
    console.log('clear button is clicked');
}

clearBtn.addEventListener('click', addEvent);

// the callback function is not called with parenthesis to prevent the function from firing automatically

// event object (e)

const obj = {
    name:'Flacko',
    age:26
}

const {age, name} = obj
console.log(name);