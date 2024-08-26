const svg = document.getElementById('bracket');

function createTeamBox(x, y, code, flagUrl) {
    const svgNS = "http://www.w3.org/2000/svg";
    const g = document.createElementNS(svgNS, "g");
    g.setAttribute("transform", `translate(${x}, ${y})`);

    // Create a rectangle background for the team box
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("width", "120");
    rect.setAttribute("height", "30");
    rect.setAttribute("fill", "rgba(0,0,0,0.6)");
    rect.setAttribute("stroke", "white");
    rect.setAttribute("stroke-width", "1");
    rect.setAttribute("rx", "4");
    g.appendChild(rect);

    // Create an image element for the flag
    const flagImage = document.createElementNS(svgNS, "image");
    flagImage.setAttribute("x", "5");  // Adjust position
    flagImage.setAttribute("y", "5");  // Adjust position
    flagImage.setAttribute("width", "20");  // Adjust size
    flagImage.setAttribute("height", "20");  // Adjust size
    flagImage.setAttributeNS("http://www.w3.org/1999/xlink", "href", flagUrl);
    g.appendChild(flagImage);

    // Create a text element for the code
    const codeText = document.createElementNS(svgNS, "text");
    codeText.setAttribute("x", "30");
    codeText.setAttribute("y", "20");
    codeText.setAttribute("font-family", "Arial, sans-serif");
    codeText.setAttribute("fill", "white");
    codeText.setAttribute("font-size", "14");
    codeText.setAttribute("font-weight", "bold");
    codeText.textContent = code;
    g.appendChild(codeText);

    return g;
}

function createPath(d) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    path.setAttribute("stroke", "white");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke-width", "2");
    return path;
}

const STATIC_URL = '/static/'; 

async function fetchTeamData() {
    try {
        const response = await fetch('/team-data/');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        // console.log(data);  // Inspect the fetched data

        // Assuming the data structure is { teams: [...] }
        return data.teams || []; // Return an empty array if `teams` is undefined
        
    } catch (error) {
        console.error('Error fetching team data:', error);
        return []; // Return an empty array on error
    }
}

function generateFlagUrls(teams) {
    return teams.map(team => ({
        ...team,
        flag_url: `${STATIC_URL}images/flags/${team.flag_url}.png`
    }));
}

async function initBracket() {
    const svg = document.getElementById('bracket');

    // Set background
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", "1000");
    rect.setAttribute("height", "600");
    rect.setAttribute("fill", "url(#bgGradient)");
    svg.appendChild(rect);

    // Fetch team data
    const data = await fetchTeamData();
    const updatedTeams = generateFlagUrls(data);

    // Left Bracket
    // Round of 16
    svg.appendChild(createTeamBox(10, 30, updatedTeams[0]?.code || "WAL", updatedTeams[0]?.flag_url || ""));
    svg.appendChild(createTeamBox(10, 65, updatedTeams[1]?.code || "DEN", updatedTeams[1]?.flag_url || ""));
    svg.appendChild(createPath("M130 45 H150 V80 H130"));
    svg.appendChild(createPath("M150 65 H170"));

    svg.appendChild(createTeamBox(10, 110, updatedTeams[2]?.code || "NED", updatedTeams[2]?.flag_url || ""));
    svg.appendChild(createTeamBox(10, 145, updatedTeams[3]?.code || "CZE", updatedTeams[3]?.flag_url || ""));
    svg.appendChild(createPath("M130 125 H150 V160 H130"));
    svg.appendChild(createPath("M150 145 H170"));

    svg.appendChild(createTeamBox(10, 190, updatedTeams[4]?.code || "BEL", updatedTeams[4]?.flag_url || ""));
    svg.appendChild(createTeamBox(10, 225, updatedTeams[5]?.code || "POR", updatedTeams[5]?.flag_url || ""));
    svg.appendChild(createPath("M130 205 H150 V240 H130"));
    svg.appendChild(createPath("M150 225 H170"));

    svg.appendChild(createTeamBox(10, 270, updatedTeams[6]?.code || "CRO", updatedTeams[6]?.flag_url || ""));
    svg.appendChild(createTeamBox(10, 305, updatedTeams[7]?.code || "ESP", updatedTeams[7]?.flag_url || ""));
    svg.appendChild(createPath("M130 285 H150 V320 H130"));
    svg.appendChild(createPath("M150 305 H170"));

    // Quarter-finals
    svg.appendChild(createTeamBox(170, 50, updatedTeams[8]?.code || "DEN", updatedTeams[8]?.flag_url || ""));
    svg.appendChild(createTeamBox(170, 130, updatedTeams[9]?.code || "CZE", updatedTeams[9]?.flag_url || ""));
    svg.appendChild(createPath("M290 65 H310 V145 H290"));
    svg.appendChild(createPath("M310 105 H330"));

    svg.appendChild(createTeamBox(170, 210, updatedTeams[10]?.code || "BEL", updatedTeams[10]?.flag_url || ""));
    svg.appendChild(createTeamBox(170, 290, updatedTeams[11]?.code || "ESP", updatedTeams[11]?.flag_url || ""));
    svg.appendChild(createPath("M290 225 H310 V305 H290"));
    svg.appendChild(createPath("M310 265 H330"));

    // Semi-finals
    svg.appendChild(createTeamBox(330, 90, updatedTeams[12]?.code || "DEN", updatedTeams[12]?.flag_url || ""));
    svg.appendChild(createTeamBox(330, 250, updatedTeams[13]?.code || "ESP", updatedTeams[13]?.flag_url || ""));
    svg.appendChild(createPath("M450 105 H550"));
    svg.appendChild(createPath("M450 265 H550"));
    svg.appendChild(createPath("M500 105 V140"));

    // Right Bracket
    // Round of 16
    svg.appendChild(createTeamBox(870, 30, updatedTeams[14]?.code || "SWE", updatedTeams[14]?.flag_url || ""));
    svg.appendChild(createTeamBox(870, 65, updatedTeams[15]?.code || "UKR", updatedTeams[15]?.flag_url || ""));
    svg.appendChild(createPath("M870 45 H850 V80 H870"));
    svg.appendChild(createPath("M850 65 H830"));

    svg.appendChild(createTeamBox(870, 110, updatedTeams[16]?.code || "ENG", updatedTeams[16]?.flag_url || ""));
    svg.appendChild(createTeamBox(870, 145, updatedTeams[17]?.code || "GER", updatedTeams[17]?.flag_url || ""));
    svg.appendChild(createPath("M870 125 H850 V160 H870"));
    svg.appendChild(createPath("M850 145 H830"));

    svg.appendChild(createTeamBox(870, 190, updatedTeams[18]?.code || "FRA", updatedTeams[18]?.flag_url || ""));
    svg.appendChild(createTeamBox(870, 225, updatedTeams[19]?.code || "SUI", updatedTeams[19]?.flag_url || ""));
    svg.appendChild(createPath("M870 205 H850 V240 H870"));
    svg.appendChild(createPath("M850 225 H830"));

    svg.appendChild(createTeamBox(870, 270, updatedTeams[20]?.code || "ITA", updatedTeams[20]?.flag_url || ""));
    svg.appendChild(createTeamBox(870, 305, updatedTeams[21]?.code || "AUT", updatedTeams[21]?.flag_url || ""));
    svg.appendChild(createPath("M870 285 H850 V320 H870"));
    svg.appendChild(createPath("M850 305 H830"));

    // Quarter-finals
    svg.appendChild(createTeamBox(710, 50, updatedTeams[22]?.code || "UKR", updatedTeams[22]?.flag_url || ""));
    svg.appendChild(createTeamBox(710, 130, updatedTeams[23]?.code || "ENG", updatedTeams[23]?.flag_url || ""));
    svg.appendChild(createPath("M710 65 H690 V145 H710"));
    svg.appendChild(createPath("M690 105 H670"));

    svg.appendChild(createTeamBox(710, 210, updatedTeams[24]?.code || "SUI", updatedTeams[24]?.flag_url || ""));
    svg.appendChild(createTeamBox(710, 290, updatedTeams[25]?.code || "ITA", updatedTeams[25]?.flag_url || ""));
    svg.appendChild(createPath("M710 225 H690 V305 H710"));
    svg.appendChild(createPath("M690 265 H670"));

    // Semi-finals
    svg.appendChild(createTeamBox(550, 90, updatedTeams[26]?.code || "ENG", updatedTeams[26]?.flag_url || ""));
    svg.appendChild(createTeamBox(550, 250, updatedTeams[27]?.code || "ITA", updatedTeams[27]?.flag_url || ""));

    // Final
    svg.appendChild(createTeamBox(440, 140, updatedTeams[28]?.code || "ENG", updatedTeams[28]?.flag_url || ""));
    svg.appendChild(createTeamBox(440, 200, updatedTeams[29]?.code || "ITA", updatedTeams[29]?.flag_url || ""));
    svg.appendChild(createPath("M690 100 V305"));
    svg.appendChild(createPath("M500 230 V265"));

    
    const trophy = createTrophyIcon(480, 172); // Adjust x, y to fit well
    svg.appendChild(trophy);
}

initBracket();

function createTrophyIcon(x, y) {
    const svgNS = "http://www.w3.org/2000/svg";
    
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("x", x);
    svg.setAttribute("y", y);
    svg.setAttribute("width", "40"); // Adjust width
    svg.setAttribute("height", "28"); // Adjust height
    svg.setAttribute("viewBox", "0 0 50 50"); // Adjust viewBox to fit the image
    
    const image = document.createElementNS(svgNS, "image");
    image.setAttributeNS("http://www.w3.org/1999/xlink", "href", "/static/images/finalcup.png"); // Path to your trophy image
    image.setAttribute("x", "0");
    image.setAttribute("y", "0");
    image.setAttribute("width", "50");
    image.setAttribute("height", "50");
    
    svg.appendChild(image);
    
    return svg;
}

