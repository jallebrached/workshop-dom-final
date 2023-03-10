
// like btn =============
let jaime =document.getElementsByClassName("like");
for (let i = 0; i < jaime.length; i++) {
    jaime[i].addEventListener("click", function() {
    if (jaime[i].style.color == "black" ) {
        jaime[i].style.color = "red" ;
    }else {jaime[i].style.color ="black" }
    })
}


// btn (+) =========

let plus =document.getElementsByClassName("plus-btn");
let qte =document.getElementsByClassName("Quant");


for (let i = 0; i < plus.length; i++) {
   plus[i].addEventListener("click", function () {
   qte[i].value ++ ;
   total1();
   Total() ;

   })  
}

// btn (-) =========

let min = document.getElementsByClassName("minus-btn");
for (let i = 0; i < min.length; i++) {
    min[i].addEventListener("click", function (){
     if (qte[i].value > 1) {
        qte[i].value-- ; 
        total1();
        Total() ;
       
     }  
    })
    
    
}


// =====delete btn ====

let delet =document.getElementsByClassName("delete");
for (let i = 0; i < delet.length; i++) {
   delet[i].addEventListener("click" , function (){
delet[i].parentElement.remove();
total1();
Total() ;

   })
    
}



// ======== price unitaire ====


let p1 =document.getElementsByClassName("price");
let pri =document.getElementsByClassName("prix");
function total1() {
    for (let i = 0; i < p1.length; i++) {
        p1[i].innerText =qte[i].value * pri[i].value ;
    }
    
}


//===========price totale  ===


let itemes =document.getElementsByClassName("Item");
let finalp =document.getElementById("finalPrice");
function Total() {
    let s = 0 ;
    for (let i = 0; i < itemes.length; i++) {
      s = s +parseFloat(p1[i].innerText)  ;
        
    }
    return(finalp.value = s);

}

  
  
