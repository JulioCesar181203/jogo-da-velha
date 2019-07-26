let quadrados = document.querySelectorAll("div");
i = 0;

function jogar(){
    if(this.innerHTML = " "){
        if(i%2==0){
            this.innerHTML = "X"
            i++;
        }else{
            this.innerHTML = "O"
            i++;
        }
    }
}

for(quadrado of quadrados){
    quadrado.onclick = jogar;
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

