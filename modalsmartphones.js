//modalIMG
    var img = document.getElementById("limpmem");
    var img1 = document.getElementById("drive");
    var img2 = document.getElementById("notificacoes");
    var img3 = document.getElementById("poupar");
    var img4 = document.getElementById("mover");
    var img5 = document.getElementById("desinstalar");


    // modal
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    

    //limpmem
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //drive
    img1.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //notificacoes
    img2.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //poupar
    img3.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //mover
    img4.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    img5.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    

    
    
    //<span> que fecha o modal
    var span = document.getElementsByClassName("close")[0];

    // clicar no <span> (x), fechar modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
