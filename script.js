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


//    document.getElementById("project-card").style.display="block";
//    document.getElementById("project-name").value="";