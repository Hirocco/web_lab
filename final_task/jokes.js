const API_BASE = 'http://localhost:3000/jokebook';

async function loadCategories() {
    const response = await fetch(`${API_BASE}/categories`);
    const categories = await response.json();

    const categoryContainer = document.getElementById('categories');
    categories.forEach(category => {
    const button = document.createElement('button');
    button.textContent = category;
    button.onclick = () => fetchJoke(category);
    categoryContainer.appendChild(button);
    });
}

async function fetchJoke(category) {
    const response = await fetch(`${API_BASE}/joke/${category}`);
    const data = await response.json();

    const jokeDisplay = document.getElementById('displayField');
    if (data.error) {
    jokeDisplay.textContent = data.error;
    } else {
    jokeDisplay.textContent = `${data.joke} - ${data.response}`;
    }
}

window.onload = loadCategories;