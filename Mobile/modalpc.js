//modalIMG
    var img = document.getElementById("relogio");
    var img1 = document.getElementById("internetico");
    var img2 = document.getElementById("acertarHora");
    var img3 = document.getElementById("definicoeshora");
    var img4 = document.getElementById("drivers");
    var img5 = document.getElementById("cabo");
    var img6 = document.getElementById("tv");
    var img7 = document.getElementById("grafica");
    var img8 = document.getElementById("virus");
    var img9 = document.getElementById("desinstalar");
    var img10 = document.getElementById("limdisco");
    var img11 = document.getElementById("defrag");
    var img12 = document.getElementById("formatar");
    var img13 = document.getElementById("limpeza");

    // modal
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    

    //relogio
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //internetico
    img1.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //acertarHora
    img2.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //definicoeshora
    img3.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //drivers
    img4.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //cabo
    img5.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //TV
    img6.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //grafica
    img7.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //virus
    img8.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //desinstalar
    img9.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //limdisco
    img10.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //defrag
    img11.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //foramtar
    img12.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    //limpeza
    img13.onclick = function(){
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
