function banco(){
    const ds = [
        {id:1,login:"Mariana",senha:"12345",email:"mari@gmail.com"},
        {id:2,login:"luara",senha:"11111",email:"luara@gmail.com"},
        {id:3,login:"joao",senha:"22222",email:"joao@gmail.com"}
    ]

    const dados = JSON.stringify(ds)

    localStorage.setItem("dados", dados)

    return dados
}

function CadCliente(){
    let id = document.getElementById("id").value
    let lg = document.getElementById("login").value
    let sn = document.getElementById("senha").value
    let em = document.getElementById("email").value

    let meuId = parseInt(id)

    const ds = {id:meuId,login:lg,senha:sn,email:em}

    alert(ds)


}

