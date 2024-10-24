const example = document.getElementById("example");
const cw1 = document.getElementById("cw1");
const cw2 = document.getElementById("cw2");
const cw3 = document.getElementById("cw3");
const answer = document.getElementById("answer");

example.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((array) => {
      console.log(array);
      answer.innerHTML = JSON.stringify(array);
    });
});

cw1.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((array) => {
      answer.innerHTML = "";
      for (let i = 0; i < array.length; i++) {
        answer.innerHTML += `
            UserID: ${array[i].userId}<br>
            ID: ${array[i].id}<br>
            Title: ${array[i].title}<br>
            Body:  ${array[i].body}<br>
            `;
      }
    });
  answer.innerHTML = "Loading...";
});

cw2.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
      console.log(answer);
      answer.innerHTML = `
          UserID: ${data.userId}<br>
          ID: ${data.id}<br>
          Title: ${data.title}<br>
          Body:  ${data.body}<br>
        `;
    });
  alert("loading");
});

cw3.addEventListener("click", function () {
  answer.innerHTML = "Processing...";

  // Wysłanie POST
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: "foo", // Przykładowe dane nowego posta
      body: "bar",
      userId: 1,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      answer.innerHTML = `Dodano nowy post o ID = ${data.id}`;
    })
    .catch((error) => {
      answer.innerHTML = "Wystąpił błąd podczas dodawania posta.";
      console.error("Błąd:", error);
    });
});
