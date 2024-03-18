	

//window.onload = init();


//Crear un array de palabras



var diccionario = [['afila','A-FI-LA'],['agua','A-GU-A'],['albondigas','AL-BON-DI-GAS'],['alex','A-LEX'],['amarillo','A-MA-RI-LLO'],['andar','AN-DAR'],['apagar','A-PA-GAR'],['arena','A-RE-NA'],['avion','A-VIÓN'],['azul','A-ZUL'],['bajar','BA-JAR'],['bañar','BA-ÑAR'],['barco','BAR-CO'],['batido','BA-TI-DO'],['beber','BE-BER'],['bici','BI-CI'],['blanco','BLAN-CO'],['bocadillo','BO-CA-DI-LLO'],['boli','BO-LI'],['bufanda','BU-FAN-DA'],['bus','B-U-S'],['caballo','CA-BA-LLO'],['cafeteria','CA-FE-TE-RÍ-A'],['calle','CA-LLE'],['camion','CA-MIÓN'],['camiseta','CA-MI-SE-TA'],['casa','CA-SA'],['chocolate','CHO-CO-LA-TE'],['coche','CO-CHE'],['colegio','CO-LE-GIO'],['colornaranja','NA-RAN-JA'],['comer','CO-MER'],['croquetas','CRO-QUE-TAS'],['cubo','CU-BO'],['dormir','DOR-MIR'],['elly','E-LLY'],['encender','EN-CEN-DER'],['escuchar','ES-CU-CHAR'],['espiner','ES-PI-NER'],['filete','FI-LE-TE'],['fresa','FRE-SA'],['fuente','FUEN-TE'],['furgoneta','FUR-GO-NE-TA'],['galleta','GA-LLE-TA'],['gallina','GA-LLI-NA'],['gato','GA-TO'],['globo','GLO-BO'],['goma','GO-MA'],['gorro','GO-RRO'],['gris','G-R-I-S'],['jugar','JU-GAR'],['kinder','KIN-DER'],['lapiz','LÁ-PIZ'],['lavar','LA-VAR'],['leche','LE-CHE'],['lula','LU-LA'],['macarrones','MA-CA-RRO-NES'],['mama','MA-MÁ'],['manzana','MAN-ZA-NA'],['mar','M-A-R'],['marron','MA-RRÓN'],['melocoton','ME-LO-CO-TÓN'],['melon','ME-LÓN'],['merendar','ME-REN-DAR'],['mirar','MI-RAR'],['morado','MO-RA-DO'],['moto','MO-TO'],['naranja','NA-RAN-JA'],['negro','NE-GRO'],['nina','NI-NA'],['ola','O-L-A'],['oveja','O-VE-JA'],['pala','PA-LA'],['pan','P-A-N'],['pantalon','PAN-TA-LÓN'],['papa','PA-PÁ'],['parque','PAR-QUE'],['patatas','PA-TA-TAS'],['patinete','PA-TI-NE-TE'],['pato','PA-TO'],['pavo','PA-VO'],['peppapig','PE-PPA-PIG'],['pera','PE-RA'],['perro','PE-RRO'],['pescado','PES-CA-DO'],['piña','PI-ÑA'],['pingüino','PIN-GÜI-NO'],['platano','PLÁ-TA-NO'],['pocoyo','PO-CO-YÓ'],['pollo','PO-LLO'],['puerta','PUER-TA'],['quiero','QUIE-RO'],['rastrillo','RAS-TRI-LLO'],['roca','RO-CA'],['rojo','RO-JO'],['rosa','RO-SA'],['salchichas','SAL-CHI-CHAS'],['saltar','SAL-TAR'],['sopa','SO-PA'],['subir','SU-BIR'],['tablet','TA-BLET'],['taxi','TA-XI'],['trabajar','TRA-BA-JAR'],['tren','T-R-E-N'],['verde','VER-DE'],['yogur','YO-GUR'],['zumo','ZU-MO']];
var palabra = diccionario[Math.floor(Math.random()*diccionario.length)];

var x=""; 
// variables para cada item
var palabraSelec=palabra[0];
var palabraSilabas=palabra[1];
var palabraGrupo = palabra[2];
var palabraImagen= palabra[0]+".png";
var palabraSon= palabra[0]+".mp3";
var palabraUnion="";
// descompor palabra en silabas
var silabas = palabraSilabas.split("-");
var numSilabas= silabas.length;

//reconstruir palabra seleccionada=silabas...palabraUnion

for (var h = 0;h<silabas.length;h++){
	palabraUnion +=silabas[h];
}

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
imaxen.setAttribute("src","../RecursosCompartidos/Pictos/"+palabraImagen);

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

 	//precargamos un audio, pode que varios e os deixamos en pause para executar cando sexa preciso.Segundo 'https://medium.com/@pablo_perez/reproducir-audio-con-js-en-safari-a5a87c771c7a'
	    	var audio1 = new Audio("../RecursosCompartidos/audio/"+palabraSon);
	    	audio1.play();
 		audio1.pause();

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
	    
	 // window.alert(x+"--"+palabraUnion+"---"+palabraSon);
	 
	  if (x===palabraUnion){
		//window.alert("REMATADO");
		//var audio1 = new Audio("../RecursosCompartidos/audio/"+palabraSon);
		audio1.currentTime = 0;
		audio1.play();
	  //window.alert(typeof(x));
	  //window.alert(typeof(palabraSelec));
	  function esperar (){           
            var audio2 = new Audio("../RecursosCompartidos/audio/bienHecho.mp3");
		audio2.play();
		}
		setTimeout (esperar, 2000);
		
		function esperarVideo (){
		var targetURL2="../RecursosCompartidos/resolto.html" //URL A LA QUE DIRIGIR.
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









