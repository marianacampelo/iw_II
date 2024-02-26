//console.log("Olá JS")


let c1 = "Vermelho"
let c2 = "Verde"
let c3 = "Branco"
let c4 = "Amarelo"
let c5 = "Laranja"

//array-vetor(uma linha) duas linhas matriz
const dados = [c1,c2,c3,c4,c5]

let cor = "Verde"


for(let i=0;i<dados.length;i++){
    
    if(cor == dados[i]){
        console.log("Encontrado! " + i)
        break
    }  else{
        console.log("Não encontrado")
    }



}




