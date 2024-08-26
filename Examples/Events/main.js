// Get the paragraph element
var paragraph = document.getElementById('hoverParagraph');

// Add event listener for mouseover
paragraph.addEventListener('mouseover', function() {
    // Change the color on hover
    this.style.color = 'red'; // 'this' refers to the element that triggered the event
});

// Add event listener for mouseout (optional to revert back)
paragraph.addEventListener('mouseout', function() {
    // Change the color back to black on mouseout
    this.style.color = 'black';
});