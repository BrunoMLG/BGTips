//nightmode conforme hora
if (new Date().getHours() > 18 || new Date().getHours() < 10 ) {
  darkmode()
}
  
    //darkmode
function darkmode() {
    var element = document.body;
    var sugD = document.getElementById('sug');
    var emailD = document.getElementById('email');
    var nomeD = document.getElementById('nome');
    var submitD = document.getElementById('submit');
    var i;
    
    var dropdowC = document.getElementsByClassName("dropdown-content");
    element.classList.toggle("dark-mode");
    for (i = 0; i < dropdowC.length; i++) {
        dropdowC[i].classList.toggle("dark-mode2");}
    
    sugD.classList.toggle("dark-mode1");
    nomeD.classList.toggle("dark-mode1");
    emailD.classList.toggle("dark-mode1");
    submitD.classList.toggle("dark-mode1");
}


//dropdowns
function dropdowns(id) {
  document.getElementById(id).classList.toggle("show");
}

// fechar dropdown menu se o user clicar fora
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content.");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




//formulao
function alerta(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var sugestao = document.getElementById('sug').value;
    alert("Enviou um email no nome de "+nome+" com o email: "+email+  "\nCom a sugestão: "+sugestao);
    
    document.getElementById('nome').value="";
    document.getElementById('email').value="";
    document.getElementById('sug').value="";
}


