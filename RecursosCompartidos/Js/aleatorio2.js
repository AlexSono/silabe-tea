var diccionario = ['afila','agua','albondigas','alex','amarillo','andar','apagar','arena','avion','azul','bajar','bañar','barco','batido','beber','bici','blanco','bocadillo','boli','bufanda','bus','caballo','cafeteria','calle','camion','camiseta','casa','chocolate','coche','colegio','colornaranja','comer','croquetas','cubo','dormir','elly','encender','escuchar','espiner','filete','fresa','fuente','furgoneta','galleta','gallina','gato','globo','goma','gorro','gris','jugar','kinder','lapiz','lavar','leche','lista.txt','lula','macarrones','mama','manzana','mar','marron','melocoton','melon','merendar','mirar','morado','moto','naranja','negro','nina','ola','oveja','pala','pan','pantalon','papa','parque','patatas','patinete','pato','pavo','peppapig','pera','perro','pescado','piña','pingüino','platano','pocoyo','pollo','puerta','quiero','rastrillo','roca','rojo','rosa','salchichas','saltar','sopa','subir','tablet','taxi','trabajar','tren','verde','yogur','zumo']


//var contaPalabras=0;
//var numPalabras = document.getElementById("numPalabras");


//contaPalabras ++;
//numPalabras.innerHTML = contaPalabras;

var palabra = diccionario[Math.floor(Math.random()*diccionario.length)];

var x=""; 
// variables para cada item
var palabraSelec=palabra[0];
var palabraSilabas=palabra[1];
var palabraGrupo = palabra[2];
var palabraImagen= palabra[3];
var palabraSon= palabra[4];

// descompor palabra en silabas
var silabas = palabraSilabas.split("-");
var numSilabas= silabas.length;

//aleatorizar as silabas Algoritmo de Fisher-Yates.

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(silabas);

// asignar a imaxe ó div modelo
var imaxen= document.getElementById("modelo");
imaxen.setAttribute("src","../../RecursosCompartidos/Pictos/"+palabra[3]);

//silabas

//Crea divs e engadelles a silaba e ids e propiedades

for (var i = 0;i<silabas.length;i++){
var engadeSilabas= document.getElementById("imagenes");
var a = document.createElement("div");
a.id="silaba"+i;
a.draggable="true"
engadeSilabas.appendChild(a);

var s1= document.getElementById("silaba"+i);

var j = document.createElement("p");
j.id="parrafo"+i;

s1.appendChild(j);

j.innerHTML="<h1>"+silabas[i]+"</h1>";

var engadeContenedor= document.getElementById("contenedor");
var c = document.createElement("div");
c.id="contenedor"+i;
c.draggable="false";
engadeContenedor.appendChild(c);

//var parra01= document.getElementById("parrafo1");



}
var x=""; 
puzzle();

//control puzzle

function puzzle() {

 

    // cremos los eventos para iniciar a arrastrar las imagenes

    const imgOrigin=document.querySelectorAll("#imagenes div");

    imgOrigin.forEach(el => {

        el.addEventListener("dragstart", dragStart, false);

    });

 
//alert(imgOrigin);

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
        
//comprobar que hai en contenedor+i. Si estan todas as silabas acabouse        
     x=""
        for (e=0;e<silabas.length;e++){
		var p= document.getElementById("contenedor"+e);
		var k = p.children[0].innerText;
		x+=k;
        
   
  }
 

    }



    /**

     * Funcion que verifica si se ha completado el puzzle

     */

    function completado() {
	    
	  //window.alert(x+"--"+palabraSelec);
	  if (x===palabraSelec){
		//window.alert("REMATADO");
		var audio1 = new Audio("../../RecursosCompartidos/Sons/"+palabraSon);
		audio1.play();
	  //window.alert(typeof(x));
	  //window.alert(typeof(palabraSelec));
	  function esperar (){           
            var audio2 = new Audio("../../RecursosCompartidos/Sons/bienHecho.mp3");
		audio2.play();
		}
		setTimeout (esperar, 2000);
		
		function esperarVideo (){
		var targetURL2="../../recursosCompartidos/resolto.html" //URL A LA QUE DIRIGIR.
		window.location=targetURL2
		}
		setTimeout (esperarVideo, 4500);
	
	  
		}
        const resultado=document.getElementById("resultado");

        resultado.classList.add("hide");


        const imgs=document.querySelectorAll("#contenedor div");

        if (imgs.length!=silabas.length) {

            return false;

        }



       // if ([...imgs].every((el, index) => el.id=="i"+index)) {
        //if (string(x)==string(palabraSelec)) {
		
		//window.alert("COMPROBANDO.COMPROBANDO");
		//clearTimeout(timeId);
         //   resultado.classList.remove("hide");
            
		//var audio1 = new Audio(palabraSon);
		//audio1.play();
		
		//function esperar (){           
         //   var audio2 = new Audio('bienHecho.mp3');
		//audio2.play();
		//}
		//setTimeout (esperar, 2000);
		
		//function esperarVideo (){
		//var targetURL2="../../recursosCompartidos/resolto.html" //URL A LA QUE DIRIGIR.
		//window.location=targetURL2
		//}
		//setTimeout (esperarVideo, 4500);
        //}

    }
    


}







//var indice = Math.floor(Math.random()* diccionario.length);
//var palabra = diccionario[indice];
//CREAR MATRIZ CAS PLABRAS SELECCIONADAS

//window.open(palabra+"/"+ palabra +".html", '_self');

