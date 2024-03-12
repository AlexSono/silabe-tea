	

window.onload = init();

//http://cosicasdeinformatica.blogspot.com/2011/08/cuenta-atras-en-una-pagina-web.html?m=1
//contador
var timeId;
var targetURL="../../RecursosCompartidos/nonResolto.html" //URL A LA QUE DIRIGIR. Redirige a sí misma
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
		actualBarra+=14
		
		//var textoSegundos = document.getElementById("Segundos");
		//textoSegundos.innerHTML =actualBarra;
		draw(actualBarra);
		
	} else {
		window.location=targetURL
		return
	}
	timeId = setTimeout("barraParaRedireccionar()",1000)
}
barraParaRedireccionar()

//fin da conta atras



function init() {
	

    // funcion que devuelve n numeros aleatorios sin repetirse

    const random = (n) => {

        let elem=Array.from({length: n}, (v, i) => i);

        return Array.from({length: n}).reduce((acum) => {

            let pos=Math.floor(Math.random()*elem.length);

            acum.push(elem[pos]);

            elem.splice(pos,1);

            return acum;

        }, []);

    };

 

    // ponemos las imagenes aleatoriamente

    random(4).forEach(el => {

        document.getElementById("imagenes").innerHTML+="<img id='i"+el+"' draggable='true' src='"+el+".jpg'>";

    });

 

    puzzle();

}

 

function puzzle() {

 

    // cremos los eventos para iniciar a arrastrar las imagenes

    const imgOrigin=document.querySelectorAll("#imagenes img");

    imgOrigin.forEach(el => {

        el.addEventListener("dragstart", dragStart, false);

    });

 

    // creamos los eventos para mover y soltar

    const imgDest=document.querySelectorAll("#contenedor div");

    imgDest.forEach(el => {

        el.addEventListener("dragenter", dragEnter, false);

        el.addEventListener("dragover", dragOver, false);

        el.addEventListener("dragleave", dragLeave, false);

        el.addEventListener("drop", drop, false);

    });

 

    function dragStart(e) {

        e.dataTransfer.effectAllowed = 'move';

 

        // guardamos el id del elemento que estamos moviendo

        e.dataTransfer.setData("text/plain", this.id);

    }

 

    function dragEnter(e) {

        e.dataTransfer.dropEffect = 'move';

        e.preventDefault();

    }

 

    function dragOver(e) {

        e.dataTransfer.dropEffect = 'move';

        this.classList.add("over");

        e.preventDefault();

    }

 

    function dragLeave(e) {

        this.classList.remove("over");

        e.preventDefault();

    }

 

    function drop(e) {

        this.classList.remove("over");

 

        // obtenemos el id de la imagen que estamos moviendo

        const imgID=e.dataTransfer.getData("text/plain");

        const img=document.getElementById(imgID);

 

        if (this.innerHTML) {

            if (img.parentElement.parentElement.id=="contenedor") {

                // movemos una imagen encima de otra imagen dentro del contenedor

 

                // cogemos los valores de la imagen que se encuentra en el destino

                const orig=this.querySelector("img");

                // cogemos el contenedor de la imagen original

                const dest=img.parentElement;

 

                // movemos la imagen que arrastramos

                moverImagen(img, this);

                // movemos la imagen que se encuentra en el contenedor donde

                // hemos arrastrado la imagen

                moverImagen(orig, dest);

            }

        } else {

            // movemos la imagen a un contenedor vacio

            moverImagen(img, this);

        }

        e.preventDefault();

 

        completado();

    }

 

    /**

     * Funcion para mover una imagen.

     *

     * @param {object} origen - imagen a mover

     * @param {object} destino - contenedor donde poner la imagen

     */

    function moverImagen(origen, destino) {

        const fragment = document.createDocumentFragment();

        fragment.appendChild(origen);

        destino.appendChild(fragment);

    }

 

    /**

     * Funcion que verifica si se ha completado el puzzle

     */

    function completado() {

        const resultado=document.getElementById("resultado");

        resultado.classList.add("hide");


        const imgs=document.querySelectorAll("#contenedor img");

        if (imgs.length!=4) {

            return false;

        }

 

        if ([...imgs].every((el, index) => el.id=="i"+index)) {
		  
		clearTimeout(timeId);
            resultado.classList.remove("hide");
            
		var audio1 = new Audio('modeloSon.mp3');
		audio1.play();
		
		function esperar (){           
            var audio2 = new Audio('bienHecho.mp3');
		audio2.play();
		}
		setTimeout (esperar, 2000);
		
		function esperarVideo (){
		var targetURL2="../../RecursosCompartidos/resolto.html" //URL A LA QUE DIRIGIR.
		window.location=targetURL2
		}
		setTimeout (esperarVideo, 4500);
        }

    }
    


}

