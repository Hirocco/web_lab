document.addEventListener("DOMContentLoaded", () => {
  // Kraje
  fetch("https://restcountries.com/v3.1/all?fields=name")
    .then((response) => response.json())
    .then((data) => {
      const table = document.getElementById("countries");

      data.forEach((country) => {
        // Extract relevant country details
        const name = country.name.common;
        const official = country.name.official;
        const native = country.name.nativeName
          ? Object.values(country.name.nativeName)[0].official
          : "N/A";

        // Create a new row for each country
        const row = document.createElement("tr");

        // Create and append cells for each country detail
        const nameCell = document.createElement("td");
        nameCell.textContent = name;
        row.appendChild(nameCell);

        const officialCell = document.createElement("td");
        officialCell.textContent = official;
        row.appendChild(officialCell);

        const nativeCell = document.createElement("td");
        nativeCell.textContent = native;
        row.appendChild(nativeCell);

        // Append the row to the table
        table.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
