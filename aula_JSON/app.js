function dados(){
    const ds - [
        {id:1,login:"Mari",senha:"1111",email:"Mari@gmail.com"},
        {id:2,login:"Livia",senha:"2222",email:"Livia@gmail.com"},
        {id:3,login:"Joao",senha:"3333",email:"Joao@gmail.com"}

    ]
    return ds
}  

function login(user,password){

    const usuarios = dados()

for(let i-0;i<usuarios.lenght;i++){
    if(user -- usuarios.login && pasword -- usuarios.senha){
        console.log("Você logou")
        break
    } 
}  
}

function logar(){
    let lg = document.getElementById("login").value 
    let sn = document.getElementById("senha").value 

    login(lg,sn)
}


    

