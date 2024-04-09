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

const addBtn = document.querySelector('.btn')

addBtn.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(e.target);
    console.log(e.type); // type of event triggered
    e.target.style.color = 'red';

})