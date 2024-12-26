const grade = document.querySelector(".grade")
const nome = document.querySelector(".nome")
const tempo = document.querySelector(".tempo")

const jogadores = [
    'bebeto' , 'cafu', 'rivaldo', 'romario', 'ronaldo', 'tafa', 'vampeta', 'zico'
]

let primeira = ''
let segunda = ''

const final = () =>{
    const cartasDesabilitadas = document.querySelectorAll('.desabled-card')
    if (cartasDesabilitadas.length === 16){
        clearInterval (this.loop)
        alert(`Parabens ${nome.innerHTML}, você conseguiu!! Seu tempo foi de ${tempo.innerHTML} segundos.`)
        
    }
}   

const checando =()=>{
    const jogador1 = primeira.getAttribute('data-jogadores')
    const jogador2 = segunda.getAttribute('data-jogadores')

    if (jogador1 === jogador2){
        primeira.firstChild.classList.add('desabled-card')
        segunda.firstChild.classList.add('desabled-card')

        primeira = ''
        segunda = ''

        final()

    } else{
        setTimeout (() => {
            primeira.classList.remove('revelacao')
            segunda.classList.remove('revelacao')

            primeira = ''
            segunda = ''
        }, 500)

        

    }

}

const criandoElemento =(tag, className)=>{
    const elemento = document.createElement(tag)
    elemento.className = className
    return elemento 
}


const revelando = ({target}) => {
    // target.parentNode.classList.add('revelacao')
    if (target.parentNode.className.includes('revelacao')){
        return 
    }

    if (primeira === ''){
        target.parentNode.classList.add('revelacao')
        primeira = target.parentNode
    }else if ( segunda === ''){
        target.parentNode.classList.add('revelacao')
        segunda = target.parentNode

        checando()
    }

}

const criandojogo  = (jogo)=> {

    const carta = criandoElemento("div" ,"carta")
    const frente  = criandoElemento("div" ,"face front")
    const verso = criandoElemento("div" ,"face back")

    frente.style.backgroundImage = `url('images/${jogo}.jpg')`

    carta.appendChild(frente)
    carta.appendChild(verso)

    carta.addEventListener('click', revelando )
    carta.setAttribute('data-jogadores', jogo  )

    return carta 

}

const rodandoJogo =()=> {


    const duplicando = [... jogadores, ...jogadores]

    const aleatorio = duplicando.sort(()=> Math.random() - 0.5)

    aleatorio.forEach((jogo) =>{
        const  card = criandojogo(jogo)
        grade.appendChild(card)
    })

}

const meuTempo = ()=> {
    this.loop = setInterval(()=> {
          const nomeTempo = Number(tempo.innerHTML)
           tempo.innerHTML = nomeTempo +1       
          
    },1000)
}
  
window.onload = ()=>{
    const nomeJogador  = localStorage.getItem("player")
    nome.innerHTML = nomeJogador
    rodandoJogo()
    meuTempo()
}
