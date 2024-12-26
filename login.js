
let input = document.querySelector(".input")  
let button = document.querySelector(".botao")
let form =  document.querySelector(".cabecalio")




const inputValidado = ({ target })=>{
    if (target.value.length > 2){
        button.removeAttribute("disabled")
    }else{
        button.setAttribute("disabled" , '')
    }
}


const enviar = (event) => {
    event.preventDefault()

    localStorage.setItem("player", input.value)
    window.location = "pagina.html"
}

input.addEventListener("input", inputValidado);
form.addEventListener("submit", enviar);
