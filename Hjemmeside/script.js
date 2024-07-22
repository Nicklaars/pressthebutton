document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const button = document.getElementById('incrementButton');
    
    // Retrieve the counter value from localStorage or default to 0
    let count = parseInt(localStorage.getItem('count'), 10);
    if (isNaN(count)) count = 0; // If no valid number, default to 0

    // Update the counter display
    counterElement.textContent = count;

    // Add click event listener to the button
    button.addEventListener('click', () => {
        count += 1;
        counterElement.textContent = count;
        localStorage.setItem('count', count); // Update the stored counter value
    });
});
