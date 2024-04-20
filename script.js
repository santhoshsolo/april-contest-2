const middleDiv = document.getElementById('middle');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const clearButton = document.getElementById('clear');
const errorMessage = document.getElementById('error-message');

let count = 0;

// Function to update middle div content
function updateCount() {
    middleDiv.innerHTML = count;
    if (count === 0) {
        clearButton.style.display = 'none';
    } else {
        clearButton.style.display = 'block';
    }
}

// Event listener for increment button
incrementButton.addEventListener('click', function() {
    count++;
    updateCount();
});

// Event listener for decrement button
decrementButton.addEventListener('click', function() {
    if (count > 0) {
        count--;
        updateCount();
    } else {
        // Show error message
        errorMessage.style.display = 'block';
        setTimeout(function() {
            errorMessage.style.display = 'none';
        }, 2000); // Hide error message after 2 seconds
    }
});

// Event listener for clear button
clearButton.addEventListener('click', function() {
    count = 0;
    updateCount();
});