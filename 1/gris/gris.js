document.addEventListener('DOMContentLoaded', () => {
	
	//http://cosicasdeinformatica.blogspot.com/2011/08/cuenta-atras-en-una-pagina-web.html?m=1
//contador
var timeId;
var targetURL="./../../recursosCompartidos/nonResolto.html" //URL A LA QUE DIRIGIR. Redirige a sí misma
var inicioBarra=1 //SEGUNDOS A CONTAR
//var segundoActual = document.redirect.contador.value=cuentaAtras+1
var actualBarra = inicioBarra+1;
var xBarra;
var canvas = document.getElementById("barra");
var ctx=canvas.getContext("2d");
	ctx.translate(300, 145);
	ctx.rotate(Math.PI);
	ctx.fillStyle="rgb(255,0,0)"
	ctx.fillRect(10,10,280,120);
//ctx.fillRect(10, 10, xBarra, 120);

function draw(xBarra) {
 
  if (canvas.getContext) {
   
	//const ctx = canvas.getContext("2d");

	

    ctx.fillStyle="rgb(0,0,255)";

    ctx.fillRect(10, 10, xBarra, 120);
   
        
  }
}

function barraParaRedireccionar(){
	if (actualBarra<=280){
		actualBarra+=28;
		
		//var textoSegundos = document.getElementById("Segundos");
		//textoSegundos.innerHTML =actualBarra;
		draw(actualBarra);
		
	} else {
		window.location=targetURL
		return
	}
	timeId = setTimeout(barraParaRedireccionar,1000);
}


//fin da conta atras	

    const grid = document.getElementById('grid')
    const resultDisplay = document.getElementById('result')
    const play = document.getElementById('play')

    let cardsChosen = []
    let cardsChosenId = []
    const cardsWon = []

    //card options
    const cardArray = [{
            name: 'bus',
            img: './../../RecursosCompartidos/imaxes/bus.jpg'
        },
      
        {
            name: 'tren',
            img: './../../RecursosCompartidos/imaxes/tren.jpg'
        },
        {
            name: 'pan',
            img: './../../RecursosCompartidos/imaxes/pan.jpg'
        },
      
        {
            name: 'gris',
            img: './../../RecursosCompartidos/imaxes/gris.jpg'
        },
        {
            name: 'mar',
            img: './../../RecursosCompartidos/imaxes/mar.jpg'
        }
       
    ]

    cardArray.sort(() => 0.5 - Math.random())

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            //card.setAttribute('src', cardArray [i][1])
            card.setAttribute('data-id', i)
            
            let cardId = card.getAttribute('data-id')
        	card.setAttribute('src', cardArray[cardId].img)
            card.addEventListener('click', flipCard)
            
            card.classList.add('element')
            grid.appendChild(card)
        }
    }


        
    //check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        //const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === "gris") {
            play.innerHTML = 'MUY BIEN ALEX'
            
            clearTimeout(timeId);
            
            
		
			var audio0 = new Audio('modeloSon.mp3');
		audio0.play();
		
		function esperarAudio (){
            var audio1 = new Audio('bienHecho.mp3');
		audio1.play();
		}
		setTimeout (esperarAudio,2000);
		
		function esperarVideo (){
		var targetURL2="./../../recursosCompartidos/resolto.html" //URL A LA QUE DIRIGIR.
		window.location=targetURL2
		}
		setTimeout (esperarVideo, 4000);
		
            play.classList.remove('error')
                //alert('You found a match')
            //cards[optionOneId].setAttribute('src', 'images/void.png')
            
            cards[optionOneId].classList.remove('bordered')
            
            cards[optionOneId].removeEventListener('click', flipCard)
            
           // cardsWon.push(cardsChosen)
        } 
        else {
		  function esperarFin (){
		var targetURL3="./../../recursosCompartidos/nonResoltoM.html" //URL A LA QUE DIRIGIR.
		window.location=targetURL3
		
		}
		setTimeout (esperarFin, 500);
		  }
        cardsChosen = []
        cardsChosenId = []
       // resultDisplay.textContent = cardsWon.length
      
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        //this.setAttribute('src', cardArray[cardId].img)
        this.setAttribute('src',"./../../recursosCompartidos/Pictos/pregunta.png") 
        
        if (cardsChosen.length === 1) {
            setTimeout(checkForMatch, 200)
        }
        this.classList.add('bordered')

    }
	barraParaRedireccionar();
    createBoard()
   
})
