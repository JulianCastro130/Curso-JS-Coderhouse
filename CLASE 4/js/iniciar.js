function calculo() {
    var distanciaRecorrido;
    var velocidadCaminar = 3
    var hora = 1
    const ingresoDato = (pPregunta) => prompt(pPregunta)
    const calculadorVuelta = (pV,pT,pD) => (pD / pV) * pT
    const mostrarDatos = (pDato) => alert('Su recorrido durará un tiempo estimado de: '+pDato+'horas')
  
    var eleccionRecorrido = parseInt(ingresoDato("Elija sendero. 1: Torre, 2: Fitz"))
    if (eleccionRecorrido === 1) {
      distanciaRecorrido = 9
    } else if (eleccionRecorrido === 2){
      distanciaRecorrido = 10
    } else {alert('ERROR')}
  
  
  
    var cantidadDeHoras = calculadorVuelta(velocidadCaminar,hora,distanciaRecorrido)
  
    mostrarDatos(cantidadDeHoras)
  }

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
window.onload = init;
function init(){
  document.querySelector(".start").addEventListener("click",cronometrar);
  document.querySelector(".stop").addEventListener("click",parar);
  document.querySelector(".reiniciar").addEventListener("click",reiniciar);
  h = 0;
  m = 0;
  s = 0;
  document.getElementById("hms").innerHTML="00:00:00";
}         
function cronometrar(){
  escribir();
  id = setInterval(escribir,1000);
  document.querySelector(".start").removeEventListener("click",cronometrar);
}
function escribir(){
  var hAux, mAux, sAux;
  s++;
  if (s>59){m++;s=0;}
  if (m>59){h++;m=0;}
  if (h>24){h=0;}

  if (s<10){sAux="0"+s;}else{sAux=s;}
  if (m<10){mAux="0"+m;}else{mAux=m;}
  if (h<10){hAux="0"+h;}else{hAux=h;}

  document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}
function parar(){
  clearInterval(id);
  document.querySelector(".start").addEventListener("click",cronometrar);

}
function reiniciar(){
  clearInterval(id);
  document.getElementById("hms").innerHTML="00:00:00";
  h=0;m=0;s=0;
  document.querySelector(".start").addEventListener("click",cronometrar);
}