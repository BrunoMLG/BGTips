//modalIMG
    // modal
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    var img = document.getElementById("passo1");
    var img1 = document.getElementById("passo2");
    var img2 = document.getElementById("passo3");
    // 1passo
    
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    
    // 2passo

    img1.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    // 3passo
    img2.onclick = function(){
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
