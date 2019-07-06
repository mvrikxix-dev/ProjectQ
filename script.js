function addProject(){
    const projectName = document.getElementById('project-name').value; 
    const projectDesc = document.getElementById('project-desc').value;
    
    const gitLink = 'window.open' + '(' + "'" + projectDesc + "'" + ',' + "'" + '_blank' + "'" + ')';
    console.log(gitLink);
    
    const viewCard = document.createElement('div'); 
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

    var rand = parseInt(100000*Math.random());
    
    nameCard.innerHTML = projectName;
    idCard.innerHTML = "#" + rand;
    
    const readonlyContainer = document.getElementById('readonly-container');
    readonlyContainer.appendChild(viewCard);
    
    document.getElementById('project-name').value="";
    document.getElementById('project-desc').value="";
}

function addBranch(){
    var branchName = document.getElementById('add-name').value;
    
    const branchButton = document.createElement('button');
    const branchSpan = document.createElement('span');
    const cancelButton = document.createElement('i');
    const branchText = document.createElement('span');
    
    branchButton.setAttribute('class', 'branch-select');
    branchSpan.setAttribute('class', 'cancel');
    cancelButton.setAttribute('class', 'fas fa-times');
    branchText.setAttribute('class', 'branch-text');
    
    branchText.textContent=branchName;
    
    branchButton.appendChild(branchText);
    branchButton.appendChild(branchSpan);
    branchSpan.appendChild(cancelButton);
    
    document.getElementById('add-name').value= "";
    
    const branchList = document.getElementById('branch-list');
    branchList.appendChild(branchButton);
}

var list =  document.querySelector('#branch-list');

list.addEventListener('click', function(e){
    if(e.target.className == 'fas fa-times'){
        console.log(e.target);
        const li = e.target.parentElement.parentElement;
        list.removeChild(li);
    }else if(e.target.className == 'cancel'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

var container= document.querySelector('#readonly-container');
    
container.addEventListener('click', function(con){
    if(con.target.className == 'far fa-trash-alt'){
            const x = con.target.parentElement.parentElement;
            container.removeChild(x);
        }
});

