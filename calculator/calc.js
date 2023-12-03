function DeleteValue() {
  document.getElementById('screen').value = "  ";
}

function deleteLastCharacter() {
  var screen = document.getElementById('screen');
  var currentValue = screen.value;
  screen.value = currentValue.slice(0, -1);
}

function valueAppend(value) {
  document.getElementById('screen').value += value;
}

function calculate() {
  try {
      document.getElementById('screen').value = eval(document.getElementById('screen').value);
  } catch (error) {
      document.getElementById('screen').value = 'Error';
  }
}
