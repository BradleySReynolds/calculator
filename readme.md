# Basic Calculator

## Introduction

### Information

This project was made in collaboration and for the Odin Project in 2023. All code is hand written by me and nothing is copy & pasted. I admit that I am often in need of inspiration when it comes to design, so I took some design inspiration from this project --> [calculator by michalosman](https://michalosman.github.io/calculator/).

This live viewing of this project can be seen here --> [My Calculator](https://bradleysreynolds.github.io/calculator/)

## About the Code

### HTML

The HTML code was important in this project. Not because it is and always will be what displays this code to the web, but because I used the 'value' attribute to distiguish all the buttons even though I was able to give them all the same class of '.btn'. This will be important when I get to the JavaScript section, but for now HTML allowed me to give each button its own value while pointing to the same type of element ---by class name --- in the code.

### CSS

To make the display of my calculator I used both flexbox and grid. I primarily used flex on the main container which held: the display, the clear and delete buttons as their own container and all the other buttons as their own container (16 buttons in this container). Within the display I had two different text values, one for the current operation and one for the current value, I displayed these in the top right and bottom right respectively using:

`display: flex`

`flex-direction: column`

`align-items: flex-end`

`justify-content: space-around`

I think this shows a decent understanding of flexbox, considering most of the time you are just doing align-items and justify-content center; as for the clear and delete buttons. Lastly, for the final 16 buttons I used grid to give 4 nice columns of 4.

### JavaScript

The first and most important aspect of this code is determining what button is being clicked. How does one distiguish between the button 1 being clicked as opposed to the '=' button being clicked. The answer, event delegation, essentially instead of writing an event listener on each button (which makes me cringe just to think about), instead we apply some sort of loop over all the buttons. This is why, as I mentioned earlier, all 16 buttons have the same class of '.btn'. Using a simple .querySelectorAll('.btn') gives me an array of all the buttons, then putting the forEach method on that array, finally adding an eventListener that grabs e.target.value, as I mentioned before is unique for each button, and pushing it to the DOM.

`const btns = document.querySelectorAll('.btn')`

`btns.forEach((ele) => ele.addEventListener('click', (e) => {})`

When a button is clicked there are 4 main 'situations' we are looking for: is the value a number, is the value an equal sign, is the value a operator or is there an operation that needs to be calculated.

1. For the first situation I set up a regular expression that checks if the selected value is between 0-9 or is a ".", if so the value is sent to the currentValue variable and rendered to the DOM.

2. For the second situation if the value of the button was the '=' sign, then whatever elements were in the currentOperationArr are joined using .join("") and calculated using the eval() method. Then this value is rendered to the Dom. As a note, there is an independent function called evaluate that I created and within it, it both checks for any errors such as someone attempting to calculate 8 \* _ or 8.8.8 _ 2, as well as if someone tries to divide by 0.

3. The third situation involves if an operator is selected. In this case, the operator will be added as a string element to the fullOperationArr.

4. Lastly, the calculator shouldn't ever display something such as 3 _ 3 _ 3 _ 3. How it should work is that when 3 _ 3 is selected and the user presses another operator, first the 3 \* 3 is calculated and added to the fullOperationArr, then the selected operator is added as well and this continues so that their is never multiple operation displayed in the top part of the display.

The last two buttons are the clear button which simply resets and renders the original values and the delete button which simply pops the last value off the currentValueArr.

## Conclusion

This project uses only HTML, CSS and JavaScript. I used event delegation to make the code much cleaner than adding many eventlisteners to each and every button. Feel free to check out any of my other code and leave a critique, also check out my website --> [bradleysreynolds.com](https://www.bradleysreynolds.com).
