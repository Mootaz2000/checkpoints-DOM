var btnP = document.getElementsByClassName('btnP')
var btnM = document.getElementsByClassName('btnM')
let quantity = document.getElementsByClassName('quantity') ;
let priceUnitaire = document.getElementsByClassName('PriceUnit')
 

console.log(btnP)
console.log(btnM)

for( let plus of btnP){
    
      plus.addEventListener('click',function(){
       plus.previousElementSibling.innerText++
       totalprice()
    })
   
}








for(let oscar of btnM){

 oscar.addEventListener('click',function(){
 
 oscar.nextElementSibling.innerText--
 totalprice()
 })
 
}



//for (var i=0 ; i<=btnP.length ; i++){

 //   let incrementBtn = btnP[i]

  //  incrementBtn.addEventlistener('click',function(){
    
   // incrementBtn.previousElementsibling.innerText++

  //  })
  // }

 
  function totalprice(){
    
    let sum = 0;

    for( let i=0 ; i< priceUnitaire.length; i++){

        sum+=quantity[i].innerText*priceUnitaire[i].innerText
       document.getElementById('totprice').innerText= sum      
    }
  }