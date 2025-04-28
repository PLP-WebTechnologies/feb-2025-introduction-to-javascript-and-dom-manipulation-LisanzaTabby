// Change the text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const description = document.getElementById('description');

changeTextBtn.addEventListener('click', function() {
    description.textContent = "The text has been changed dynamically- Hello 👋, I am Tabitha a PLP cohort Feb2025!";
    description.style.color = "red";
});

// Modify CSS styles via JavaScript
const changeStyleBtn = document.getElementById('change-style-btn');
const mainTitle = document.getElementById('main-title');

changeStyleBtn.addEventListener('click', function() {
    mainTitle.style.color = "aqua";
    mainTitle.style.fontSize = "3rem";
    mainTitle.style.textDecoration = "underline";
    mainTitle.style.textTransform = "uppercase";
});

// Add or remove an element when a button is clicked
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
const elementContainer = document.getElementById('element-container');

addElementBtn.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "I'm a new paragraph added dynamically!";
    newParagraph.id = "new-paragraph";
    elementContainer.appendChild(newParagraph);
});

removeElementBtn.addEventListener('click', function() {
    const paragraph = document.getElementById('new-paragraph');
    if (paragraph) {
        paragraph.remove();
    }
});
