const button1 = document.getElementById("ex1_button");

button1.addEventListener("click", function () {
  document.getElementById("ex1_content").innerHTML = "1,2,3,4,5,6,7,8,9";
});

const input1 = document.getElementById("ex2_text");

input1.addEventListener("input", function () {
  const outputInfo = document.getElementById("ex2_content");
  if (input1.textContent !== 9) {
    outputInfo.innerHTML = "Only 9 digits allowed";
  } else if (input1.textContent != /[0-9]*/) {
    outputInfo.innerHTML = "Only digits allowed";
  }
});
