var diccionario = ['afila','agua','albondigas','alex','amarillo','andar','apagar','arena','avion','azul','bajar','bañar','barco','batido','beber','bici','blanco','bocadillo','boli','bufanda','bus','caballo','cafeteria','calle','camion','camiseta','casa','chocolate','coche','colegio','colornaranja','comer','croquetas','cubo','dormir','elly','encender','escuchar','espiner','filete','fresa','fuente','furgoneta','galleta','gallina','gato','globo','goma','gorro','gris','jugar','kinder','lapiz','lavar','leche','lista.txt','lula','macarrones','mama','manzana','mar','marron','melocoton','melon','merendar','mirar','morado','moto','naranja','negro','nina','ola','oveja','pala','pan','pantalon','papa','parque','patatas','patinete','pato','pavo','peppapig','pera','perro','pescado','piña','pingüino','platano','pocoyo','pollo','puerta','quiero','rastrillo','roca','rojo','rosa','salchichas','saltar','sopa','subir','tablet','taxi','trabajar','tren','verde','yogur','zumo']



function silabea(){

var indice = Math.floor(Math.random()* diccionario.length);
var palabra = diccionario[indice];

window.open(palabra+"/"+ palabra +".html", '_self');
}
