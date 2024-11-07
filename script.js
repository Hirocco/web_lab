const searchBtn = document.getElementById('search-btn');

function searchCountry() {
    const capital = document.getElementById("capitalInput").value.trim();
    
    if (capital === "") {
      alert("Please enter a capital name.");
      return;
    }
    
    const url = `https://restcountries.com/v3.1/capital/${capital}`;
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("No country found with this capital.");
        }
        return response.json();
      })
      .then(data => {
        displayCountryData(data);
      })
      .catch(error => {
        alert(error.message);
        clearTable();
      });
  }
  
  function displayCountryData(countries) {
    const tableBody = document.querySelector("#countryTable tbody");
    clearTable();
    
    countries.forEach(country => {
      const row = document.createElement("tr");
      
      row.innerHTML = `
        <td>${country.name.common}</td>
        <td>${country.capital ? country.capital[0] : "N/A"}</td>
        <td>${country.population.toLocaleString()}</td>
        <td>${country.region}</td>
        <td>${country.subregion || "N/A"}</td>
      `;
      
      tableBody.appendChild(row);
    });
  }

  function clearTable() {
    const tableBody = document.querySelector("#countryTable tbody");
    tableBody.innerHTML = "";
  }
  
  searchBtn.addEventListener('click', searchCountry);