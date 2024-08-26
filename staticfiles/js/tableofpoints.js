const groupsData = [
    {
        groupName: 'GROUP A',
        teams: [
            { name: 'Spain', p: 6, w: 5, d: 0, l: 1, gf_ga: '19:3', pts: 15 },
            { name: 'USA', p: 6, w: 5, d: 0, l: 1, gf_ga: '19:3', pts: 15 }
        ]
    },
    {
        groupName: 'GROUP B',
        teams: [
            { name: 'France', p: 6, w: 4, d: 1, l: 1, gf_ga: '15:8', pts: 13 },
            { name: 'Germany', p: 6, w: 3, d: 2, l: 1, gf_ga: '12:9', pts: 11 }
        ]
    },
    {
        groupName: 'GROUP C',
        teams: [
            { name: 'Brazil', p: 6, w: 6, d: 0, l: 0, gf_ga: '18:4', pts: 18 },
            { name: 'Argentina', p: 6, w: 4, d: 1, l: 1, gf_ga: '14:7', pts: 13 }
        ]
    }
];

// Select the container
const groupsContainer = document.querySelector('.groups-container');

// Clear the container
groupsContainer.innerHTML = '';

// Iterate over each group
groupsData.forEach(group => {
    let groupHtml = `
        <div class="group">
            <div class="group-header">${group.groupName}</div>
            <table>
                <tr class="first-row">
                    <th>Team</th>
                    <th>P</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GF:GA</th>
                    <th>Pts</th>
                </tr>
    `;

    // Iterate over each team in the group
    group.teams.forEach(team => {
        groupHtml += `
            <tr class="second-row">
                <td>${team.name}</td>
                <td>${team.p}</td>
                <td>${team.w}</td>
                <td>${team.d}</td>
                <td>${team.l}</td>
                <td>${team.gf_ga}</td>
                <td>${team.pts}</td>
            </tr>
        `;
    });

    // Close the table and group div
    groupHtml += `
            </table>
        </div>
    `;

    // Add the group to the container
    groupsContainer.innerHTML += groupHtml;
});