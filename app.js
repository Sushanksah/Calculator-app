const input = document.querySelector('#inputBox');
const buttons = document.querySelectorAll('button');

let string = "";  // Initialize as an empty string

const arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                // Evaluate the expression and update the input box
                string = eval(string);
                input.value = string;
            } catch (error) {
                // Handle any errors that occur during evaluation
                input.value = 'Error';
                string = '';
            }
        } else if (buttonText === 'AC') {
            string = ""; // Clear the string
            input.value = string;
        } else if (buttonText === 'DEL') {
            string = string.slice(0, -1); // Remove the last character
            input.value = string;
        } else {
            string += buttonText; // Append the clicked button's text
            input.value = string;
        }
    });
});
