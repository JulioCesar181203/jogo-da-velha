let quadrados = document.querySelectorAll("div");
let i = 0;
console.log(quadrados);
function jogar(){
    if(this.innerHTML == ""){
        if(i % 2 == 0){
            this.innerHTML = "X"
            i++;
            verificarJogada()
            
        }
        else{
            this.innerHTML = "O"
            i++;
            verificarJogada()
        }
    }
}

for(quadrado of quadrados){
    quadrado.onclick = jogar;
}

function verificarJogada(){
    if(quadrados[0].innerHTML !=="" && quadrados[0].innerHTML === quadrados[1].innerHTML === quadrados[2].innerHTML){
    
        alert("voce venceu")
    }
    
    else if(quadrados[3].innerHTML !=="" && quadrados[3].innerHTML === quadrados[4].innerHTML === quadrados[5].innerHTML){
        
        alert("voce venceu")
        
        
    }
    
    else if(quadrados[6].innerHTML !=="" && quadrados[6].innerHTML === quadrados[7].innerHTML === quadrados[8].innerHTML){
        
        alert("voce venceu")
    }
    
    else if(quadrados[0].innerHTML !=="" && quadrados[0].innerHTML === quadrados[4].innerHTML === quadrados[8].innerHTML){
    
    alert("voce venceu")
    }
    
    else if(quadrados[0].innerHTML !=="" && quadrados[0].innerHTML === quadrados[3].innerHTML === quadrados[6].innerHTML){
    
    alert("voce venceu")

    }
    
    else if(quadrados[1].innerHTML !=="" && quadrados[1].innerHTML === quadrados[4].innerHTML === quadrados[7].innerHTML){
    
    alert("voce venceu")

    }
    
    else if(quadrados[2].innerHTML !=="" && quadrados[2].innerHTML === quadrados[5].innerHTML === quadrados[8].innerHTML){
    
    alert("voce venceu")
    
    }

    else if(quadrados[2].innerHTML !=="" && quadrados[2].innerHTML === quadrados[4].innerHTML === quadrados[6].innerHTML){
    
    alert("voce venceu")
    
    }
    
    else{
        
        return;
    }
    
    
}






























// let figura = prompt ("Escolha sua figura jogador 1");
// let figura2 = prompt ("Escolha sua figura jogador 2");
// let quadrados = document.querySelectorAll("div");
// let jogador1 = "X" || "O";
// let jogador2 = "O" || "X";
// //console.log(figua)

// jogador1=jogador1.toLowerCase("X" || "O");
// jogador2=jogador2.toLowerCase("X" || "O");


// for (quadrado of quadrados){


// }

// if (jogador1 = "X" || jogador1 == "O"){

// }
// else if (jogador2 = "O" || jogador2 =="X") {

// }
// else{
// alert("Erro!")
// }    

