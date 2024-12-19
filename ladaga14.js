// Task 1: Accessing Elements by ID
const element = document.getElementById('myElementId');
console.log('Task 1 - Element text:', element.textContent);

// Task 2: Accessing Elements by Tag Name
const spans = document.getElementsByTagName('span');
console.log('Task 2 - Span elements:', spans);

// Task 3: Navigating to Child Nodes
const parentDiv = document.getElementById('parent');
console.log('Task 3 - Parent div children:', parentDiv.children);

// Task 4: Navigating to Parent Node
const childElement = document.getElementById('childElement');
const parentElement = childElement.parentNode;
console.log('Task 4 - Parent element:', parentElement);

// Task 5: Accessing Children by Tag Name
const parentList = document.getElementById('parentList');
const listItems = parentList.getElementsByTagName('li');
console.log('Task 5 - List items:', listItems);

// Task 6: Accessing Child Elements
const parent6 = document.getElementById('parent6');
const firstChild = parent6.firstElementChild;
const secondChild = firstChild.nextElementSibling;
const lastChild = parent6.lastElementChild;

console.log('Task 6 - First child text:', firstChild.textContent);
console.log('Task 6 - Second child text:', secondChild.textContent);
console.log('Task 6 - Last child text:', lastChild.textContent);