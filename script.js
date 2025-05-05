const container = document.getElementById("news-container");

fetch('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=cybersecurity&apiKey=6705430b396b4b1f856762007cc2a89b')
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
        container.innerHTML = "Major Cybersecurity Developments
Five Tattva Acquires Stake in Zeroday Ops to Boost Cybersecurity
Date: May 5, 2025
In a strategic move to expand its cybersecurity capabilities, Five Tattva Cyberhub Security LLP has acquired a major stake in Zeroday Ops Private Limited, a renowned cybersecurity firm known for its advanced threat detection and prevention capabilities.

Indian Cybersecurity Agencies Successfully Block Multiple Pakistan-Sponsored Hacking Attempts
Date: May 2, 2025
Indian cybersecurity agencies have successfully thwarted multiple hacking attempts sponsored by Pakistan, highlighting the nation's robust cyber defense mechanisms.

India Reports Over Four-Fold Increase in Cyber Fraud Cases in FY2024
Date: March 11, 2025
Official data reveals that high-value cyber fraud cases in India surged over four times in FY2024, resulting in losses amounting to $20 million. The rise is attributed to increased digital transactions and lack of cyber literacy.

🚨 Recent Cybercrime Incidents
Delhi Police Arrest Four Men for Rs 44.50 Lakh 'Digital Arrest' Fraud
Date: March 9, 2025
The scam involved fraudsters posing as law enforcement officials, coercing victims into transferring money under the pretense of legal procedures.

47-Year-Old Loses Rs 1.6 Crore to Crypto Fraud in Hyderabad
Date: April 30, 2025
A Hyderabad resident was duped into investing in a fraudulent cryptocurrency scheme, leading to significant financial loss.

Chandigarh Man Duped of ₹1.3 Crore by Fraudsters Posin.";
    });
