let z=10;
let pute=0;
console.log(z);


let submitButton = document.querySelector(".submitButton");
let spermatoto = document.querySelector(".spermatoto");
console.log(compteur);


// let tab = ["balbablabl" , "balbalabala" " balbalabala"]
// let reponse1 = document.querySelector("R1 p")

// reponse1.innerHTML = tab[0]


window.setInterval(
  // On déclare une fonction
  ()=>{
    if (z>0)
    {
      z=z-1;
      compteur.innerHTML= z;
    }if{
      submitButton.innerHTML= "BITE";
      pute -= 1 ;
      spermatoto.style.transform = `translateY(${pute}px)`;
    }
    console.log(z);
    // Ce qui sera fait tous les x temps
  },
  100
);
