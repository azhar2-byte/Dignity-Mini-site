

document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");
  const clear = document.querySelector(".clear");
  const equals = document.getElementById("equals");
  
  let currentInput = "";

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.textContent;
      currentInput += value;
      display.value = currentInput;
    });
  });

  equals.addEventListener("click", () => {
    try {
      currentInput = eval(currentInput).toString();
      display.value = currentInput;
    } catch (e) {
      display.value = "Error";
      currentInput = "";
    }
  });

  clear.addEventListener("click", () => {
    currentInput = "";
    display.value = "";
  });
});
