document.addEventListener("DOMContentLoaded", function() {
    fetch('/get_fixtures/')  // Ensure the leading slash is correct for absolute path
        .then(response => response.json())
        .then(data => {
            renderFixtures(data.fixtures);
        })
        .catch(error => console.error('Error fetching fixtures:', error));
});


function renderFixtures(fixtures) {
    const fixturesContainer = document.getElementById("fixtures-container");

    // Using template literals to create the HTML
    let htmlContent = '';
    fixtures.forEach(fixture => {
        htmlContent += `
            <div class="fixture">
                <div class="teams">
                    <span>${fixture.team1}</span>
                    <img src="${fixture.team1Image}" alt="${fixture.team1}" class="team-image">
                    <pre><span> vs </span></pre>
                    <img src="${fixture.team2Image}" alt="${fixture.team2}" class="team-image">
                    <span>${fixture.team2}</span>
                </div>
                <div class="date-time">${fixture.dateTime}</div>
                <div class="channel">
                    ${fixture.channels.map(channel => `
                        ${channel.name}<br>
                        <img src="${channel.icon}" alt="${channel.name}">
                    `).join('')}
                </div>
            </div>
        `;
    });

    // Set the HTML content
    fixturesContainer.innerHTML = htmlContent;
}
