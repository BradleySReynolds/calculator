const allBtns = document.querySelectorAll(".btn");
const currentValueContainer = document.querySelector(".current-value");
const currentOperationContainer = document.querySelector(".current-calc");

const clearBtn = document.querySelector(".clear-btn");
const deleteBtn = document.querySelector(".delete-btn");

const numericRegex = /[0-9|.]/;

let currentValueArr = [];
let fullOperationArr = [];

const evaluate = (arr) => {
  try {
    // Check for divide by 0
    if (eval(arr.join("")) === Infinity) {
      currentValueContainer.textContent = `Can't divide by 0`;
    } else {
      return eval(arr.join(""));
    }
  } catch (err) {
    currentValueContainer.textContent = `ERROR`;
  }
};

allBtns.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    if (numericRegex.test(e.target.value)) {
      // Add number to current value
      currentValueArr.push(e.target.value);
      currentValueContainer.textContent = currentValueArr.join("");
    } else if (e.target.value === "=") {
      // Push current value to operation
      fullOperationArr.push(currentValueArr.join(""));
      currentOperationContainer.textContent = fullOperationArr.join(" ");

      // Determines whether value has a decimal place or not
      let eval =
        evaluate(fullOperationArr) % 1 === 0
          ? evaluate(fullOperationArr)
          : evaluate(fullOperationArr).toFixed(3);

      //   Set DOM Values
      currentValueContainer.textContent = eval;
      fullOperationArr = [eval];
      currentValueArr = [];
    } else if (fullOperationArr.length >= 2) {
      // This block evalutes operation early if multiple operations are selected before equal sign is selected
      fullOperationArr = [
        evaluate(fullOperationArr.concat(currentValueArr)) % 1 === 0
          ? evaluate(fullOperationArr.concat(currentValueArr))
          : evaluate(fullOperationArr.concat(currentValueArr)).toFixed(3),
        e.target.value,
      ];

      //   Set DOM values
      currentOperationContainer.textContent = fullOperationArr.join(" ");
      currentValueContainer.textContent = "";
      currentValueArr = [];
    } else {
      // Add operation to fullOperationArr
      fullOperationArr.push(currentValueArr.join(""), e.target.value);
      currentOperationContainer.textContent = fullOperationArr.join(" ");

      //   Set DOM values
      currentValueContainer.textContent = "";
      currentValueArr = [];
    }
  });
});

clearBtn.addEventListener("click", () => {
  // Sets all values to default and updates the DOM
  currentValueArr = [];
  fullOperationArr = [];
  currentValueContainer.textContent = "";
  currentOperationContainer.textContent = "";
});

deleteBtn.addEventListener("click", () => {
  // Removes the last charcter of the currentValueArray
  currentValueArr.pop();
  currentValueContainer.textContent = currentValueArr.join("");
});
