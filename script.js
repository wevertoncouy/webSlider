const imgProdutos = document.querySelectorAll('.img-box img');
let i = 0;
function ButtonRight() {    
    imgProdutos[i].classList.remove('active');
   console.log( i = (++i) % imgProdutos.length)
    imgProdutos[i].classList.add('active')
}


 function ButtonLeft( ){
    imgProdutos[i].classList.remove('active');
     i = (--i + imgProdutos.length) % imgProdutos.length
   imgProdutos[i].classList.add('active');
  
}

const slideText = document.querySelectorAll('.conteudo-box div')
let n = 0;
function slideRightText() {    
    slideText[n].classList.remove('active');
   console.log( n = (++n) % slideText.length)
    slideText[n].classList.add('active')
}


 function slideLefText( ){
    slideText[n].classList.remove('active');
     n = (--n + slideText.length) % slideText.length
   slideText[n].classList.add('active');
  
}


