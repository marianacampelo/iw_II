function dados(){

      const ds = [
           {id:1,login:"Mariana",senha:"12345",email:"mari@gmail.com"},
           {id:2,login:"luara",senha:"11111",email:"luara@gmail.com"},
           {id:3,login:"joao",senha:"22222",email:"joao@gmail.com"}
        ]

        const dados = JSON.stringify(ds)

        localStorage.setItem("nome", dados)//insere no armazenamneto do navegador


    return dados
}

function removerbd(){
    localStorage.removeItem("nome")
}

//const num = dados()

//console.log(num)

//maquina local
//function storage(){
    //let nome2 = "mari"

    //localStorage.setItem9("nome", )
//} 

//storage()