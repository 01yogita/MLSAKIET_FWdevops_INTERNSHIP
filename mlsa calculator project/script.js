const displayBox = document.getElementById("display");
function appendToDisplay(num) {
  displayBox.value += num;
}

function clearDisplay() {
  displayBox.value = "";
}

function calculate() {
  try {
    const ans = eval(displayBox.value);
    if (isNaN(ans)) {
      displayBox.value = "Error";
    } else {
      displayBox.value = ans;
    }
  } catch (error) {
    displayBox.value = "Error";
  }
}
