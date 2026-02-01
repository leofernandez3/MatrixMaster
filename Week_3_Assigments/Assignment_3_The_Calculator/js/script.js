  const display = document.querySelector("input");
  const buttons = document.querySelectorAll("button");

  let currentInput = "";
  let previousInput = "";
  let operator = null;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if (value === "C") {
        currentInput = "";
        previousInput = "";
        operator = null;
        display.value = "0";
        return;
      }

      if (!isNaN(value) || value === ".") {
        if (value === "." && currentInput.includes(".")) return;
        currentInput += value;
        display.value = currentInput;
        return;
      }

      if (value === "=") {
        if (!operator || currentInput === "") return;
        currentInput = calculate(previousInput, currentInput, operator);
        display.value = currentInput;
        previousInput = "";
        operator = null;
        return;
      }

      if (["+", "−", "×", "÷"].includes(value)) {
        if (currentInput === "") return;

        if (previousInput !== "") {
          currentInput = calculate(previousInput, currentInput, operator);
          display.value = currentInput;
        }

        operator = value;
        previousInput = currentInput;
        currentInput = "";
      }
    });
  });

  function calculate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
      case "+":
        return (a + b).toString();
      case "−":
        return (a - b).toString();
      case "×":
        return (a * b).toString();
      case "÷":
        return b === 0 ? "Error" : (a / b).toString();
      default:
        return b.toString();
    }
  }