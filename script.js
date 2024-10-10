//zad 1
const button1 = document.getElementById("ex1_button");

button1.addEventListener("click", function () {
  document.getElementById("ex1_content").innerHTML = "1,2,3,4,5,6,7,8,9";
});

//zad 2
document.getElementById("ex2_text").addEventListener("input", function () {
  const inputText = this.value;
  const outputInfo = document.getElementById("ex2_content");

  // Sprawdzanie długości
  if (inputText.length !== 9) {
    outputInfo.innerHTML = "Długość numeru musi być równa 9";
    return;
  }

  // Sprawdzanie liter
  else if (/[a-zA-Z]/.test(inputText)) {
    outputInfo.innerHTML = "Numer nie może zawierać liter";
    return;
  }

  // Sprawdzanie znaków specjalnych
  else if (/[^0-9]/.test(inputText)) {
    outputInfo.innerHTML = "Numer nie może zawierać znaków specjalnych";
    return;
  }

  // Jeśli wszystko jest w porządku
  outputInfo.innerHTML = "Numer telefonu jest poprawny";
});

//zad 3
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
