const searchBtn = document.getElementById('search-button');
const searchBox = document.getElementById('search-name');
const projectBox = document.getElementById('project-add');
const list = document.getElementById('readonly-container');

searchBox.onkeypress = function () {
    projectBox.style.display = "none";
    searchBtn.children[0].setAttribute('class', 'fas fa-times');
    searchBtn.setAttribute('id', 'exit-button');
    search();
}

searchBtn.onclick = function () {
    if (searchBtn.getAttribute('id') === 'exit-button') {
        searchBtn.children[0].setAttribute('class', 'fas fa-search');
        searchBtn.setAttribute('id', 'search-button');
        exit();
    }
}

function search() {
    searchBox.addEventListener('keyup', function (e) {
        const term = e.target.value.toLowerCase();
        const cards = list.getElementsByTagName('li');
        Array.from(cards).forEach(function (card) {
            const searchValue = card.firstElementChild.textContent;
            if (searchValue.toLowerCase().indexOf(term) !== -1) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

function exit() {
    projectBox.style.display = "block";
    const cards = list.getElementsByTagName('li');
    Array.from(cards).forEach(function (card) {
        card.style.display = "block";
    });
    searchBox.value = "";
}

function addProject() {
    const projectName = document.getElementById('project-name').value;
    const projectDesc = document.getElementById('project-desc').value;

    if (projectName == "") {
        alert("Project Name is mandatory");
    } else if (projectDesc == "") {
        alert("Repository Link is mandatory");
    } else {
        const gitLink = 'window.open' + '(' + "'" + projectDesc + "'" + ',' + "'" + '_blank' + "'" + ')';

        const viewCard = document.createElement('li');
        const nameCard = document.createElement('p');
        const gitCard = document.createElement('button');
        const iconCard = document.createElement('i');
        const idCard = document.createElement('p');
        const deleteCard = document.createElement('button');
        const delIconCard = document.createElement('i');

        viewCard.appendChild(nameCard);
        viewCard.appendChild(gitCard);
        gitCard.appendChild(iconCard);
        viewCard.appendChild(idCard);
        viewCard.appendChild(deleteCard);
        deleteCard.appendChild(delIconCard);

        viewCard.setAttribute('class', 'readonly-data');
        nameCard.setAttribute('class', 'readonly-name');
        gitCard.setAttribute('class', 'readonly-git');
        iconCard.setAttribute('class', 'fab fa-github');
        idCard.setAttribute('class', 'readonly-id');
        deleteCard.setAttribute('class', 'delete');
        delIconCard.setAttribute('class', 'far fa-trash-alt');
        gitCard.setAttribute('onclick', gitLink);
        gitCard.setAttribute('target', '_blank');

        var rand = parseInt(100000 * Math.random());

        nameCard.innerHTML = projectName;
        idCard.innerHTML = "#" + rand;

        const readonlyContainer = document.getElementById('readonly-container');
        readonlyContainer.appendChild(viewCard);
        document.getElementById('project-name').value = "";
        document.getElementById('project-desc').value = "";
    }

}

var container = document.querySelector('#readonly-container');

container.addEventListener('click', function (con) {
    if (con.target.className === 'far fa-trash-alt') {
        const x = con.target.parentElement.parentElement;
        container.removeChild(x);
    }
});