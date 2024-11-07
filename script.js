const apiToken = "bUPsQIskjeJxJEUkCJcXpBwEBhmRTFHa";
const baseUrl = "https://www.ncei.noaa.gov/cdo-web/api/v2/";
const fetchBtn = document.getElementById('fetch-btn');

async function fetchData() {
  const endpoint = document.getElementById("endpointInput").value.trim();
  
  if (endpoint === "") {
    alert("Please enter an endpoint.");
    return;
  }
  
  const url = `${baseUrl}${endpoint}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        token: apiToken
      }
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    
    const data = await response.json();
    displayData(data.results || data);
  } catch (error) {
    console.error('Error fetching data', error);
    alert(error.message);
  }
}

function displayData(data) {
  const tableHead = document.querySelector("#dataTable thead");
  const tableBody = document.querySelector("#dataTable tbody");
  
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";
  
  if (data.length === 0) {
    alert("No data available for this endpoint.");
    return;
  }

  const headers = Object.keys(data[0]);
  const headerRow = document.createElement("tr");
  headers.forEach(header => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  tableHead.appendChild(headerRow);

  data.forEach(item => {
    const row = document.createElement("tr");
    headers.forEach(header => {
      const cell = document.createElement("td");
      cell.textContent = item[header] !== undefined ? item[header] : "N/A";
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("endpointInput").value = "stations";
});

fetchBtn.addEventListener('click', fetchData);