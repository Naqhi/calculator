let display = document.querySelector('#result')

function getNum(n){
      display.value += n
}

function getOpt() {
    try {
      display.value = eval(display.value);
    } catch (err) {
      display.value = "error";
    }
  }
  function clearDisplay() {
    display.value = "";
  }