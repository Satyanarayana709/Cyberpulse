const container = document.getElementById("news-container");

fetch('https://newsapi.org/v2/everything?q=cybersecurity&apiKey=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
        container.innerHTML = ""; // clear loading message
        data.articles.slice(0, 10).forEach(article => {
            const div = document.createElement("div");
            div.className = "news-card";
            div.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description || "No description available."}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            container.appendChild(div);
        });
    })
    .catch(err => {
        container.innerHTML = "Failed to load news. Check your API key or internet.";
    });
