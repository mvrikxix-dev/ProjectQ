function addProject(){
    var projectName = document.getElementById("project-name").value;
    var projectDesc = document.getElementById("project-desc").value;
    
    const projectList = document.getElementById('project-list');
    const projectCard = document.createElement('form');
    const nameCard = document.createElement('input');
    const descCard = document.createElement('input');
    const idCard = document.createElement('input');
    
    projectCard.setAttribute('class', 'project-card');
    nameCard.setAttribute('id', 'card-name');
    nameCard.setAttribute('readonly');
    descCard.setAttribute('id', 'card-desc');
    idCard.setAttribute('id', 'card-id');
    
    projectCard.appendChild(nameCard);
    projectCard.appendChild(descCard);
    projectCard.appendChild(idCard);
        
//    document.getElementById("card-name").value = projectName;
    
    projectList.appendChild(projectCard);
}

function addBranch(){
    var branchName = document.getElementById('add-name').value;
    
    const branchButton = document.createElement('button');
    const branchSpan = document.createElement('span');
    const cancelButton = document.createElement('i');
    
    branchButton.setAttribute('class', 'branch-select');
    branchSpan.setAttribute('class', 'cancel');
    cancelButton.setAttribute('class', 'fas fa-times');
    
    branchButton.textContent = branchName;
    
    branchButton.appendChild(branchSpan);
    branchSpan.appendChild(cancelButton);
    
    document.getElementById('add-name').value= "";
    
    const branchList = document.getElementById('branch-list');
    branchList.appendChild(branchButton);
}

var list =  document.querySelector('#branch-list');

list.addEventListener('click', function(e){
    if(e.target.className == 'fas fa-times'){
        const li = e.target.parentElement.parentElement;
        list.removeChild(li);
    }else if(e.target.className == 'cancel'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

