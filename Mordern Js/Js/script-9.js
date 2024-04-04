// traversing the dom
const parent = document.querySelector('.parent');

const children = document.querySelector('.children');
console.log(children.parentNode);

// sibling elements

/*
 nextSibling returns the next node (an element node, a text node or a comment node). 
Whitespace between elements are also text nodes.

*/

const sibling1 = document.querySelector('.children');
console.log(sibling1.nextSibling);

const sibling2 = document.querySelector('.children')
console.log(sibling2.nextElementSibling);

const sibling3 = document.querySelector('.children')
console.log(sibling3.previousSibling.textContent);