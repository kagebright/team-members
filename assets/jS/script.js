const teamMembers = [
    {
        src:'assets/images/profile.png',
        name: 'Monkey D. Luffy',
        alias: 'Joyboy',
        email: 'pirateking@onepiece.com',
        status: 'active',
        tags: ['dev', 'QA']
    }
];

let tableRowCount = document.getElememntsByClassName (
    'table-row-count'
);
tableRowCount[0].innerHTML = `(${teamMembers.length}) Members`;
let tableBody = document.getElementById(
    'team-member-rows'
);
const itemsOnPage = 5;
const numberOfPages = Math.ceil(
    teamMembers.length / itemsOnPage
);

const start = (new URLSearchParams(window.location.search))
    .get('page') || 1; 

const mappedRecords = teamMembers
    .filter((_, i) => (
        ((start - 1) * itemsOnPage) < i + 1 ) &&
        (i+1 <= start * itemsOnPage)
    );
    .map {
    (teamMember) => {
        return <tr>
            <td class="team-member-profile">
                <img src="${teamMember.src}" alt="${teamMember.name">
                    <span
                </img>
            </td>
        </tr>
    }
    }