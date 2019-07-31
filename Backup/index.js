document.getElementById('yesButton').onclick = function(){
    alert('Thank you for your feedback');
};

document.getElementById('noButton').onclick = function(){
  document.getElementById('commentBox').style.display="block";  
};

document.getElementById('submitButton').onclick = function(){
    if(document.getElementById('submitButton').textContent===""){
        alert('The comments section cannot be empty');
    }else
        alert('Thank you for taking your time to give us feedback. We hope you have a better experience next time');
};