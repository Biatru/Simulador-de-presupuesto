/*Trabaje haciendo un simulador que calcula y hace un presupuesto de lo que 
cuesta dejar un perro en una guarderia canina, ya que en el modulo de desarrolo web
 hice como proyecto final una pagina web de ese rubro "Hotel Caninos Consentidos".
La idea es que si el cliente quiere un presupuesto primero tiene que crear el usuario y contraseña (el cual se guarda en el local Storage), luego nos tiene que dar sus datos personales y
asi obtenemos de a poco una base de datos de clientes, dichos datos se envian a un mail (peticion fetch). 
Y por ultimo elije las opciones y apretando el boton obtiene el presupuesto (modificación del dom) */


/*Para cargar los usuarios y sus claves en el local Storage.*/
const usuario = document.getElementById("usuario")
const clave = document.getElementById("clave")
const boton1 = document.getElementById("boton1")

const local = window.localStorage

const agregarDatos = (local, cliente)=>{
   local.setItem(cliente.id, JSON.stringify(cliente))/*setItem recibe dos parametros para guardar algo en el local storage: key del cliente y el cliente. Con JSON.stingify tranforma ese objeto en string para poder leerlo y guardarlo */ 
   window.location.href = '/'
  }
/* para recoger los clientes que guardamos y mostrarlos en el local Storage.*/ 

const cargarCliente = (local)=>{
let claves = Object.keys(local)
for(clave of claves){ /*Para acceder a cada key q esta en el local Storage*/
  let cliente = JSON.parse(local.getItem (clave))
/*asi tengo dentro de cada variable cliente un objeto al cual puedo acceder a sus propiedades*/ 
}
}

boton1.onclick = ()=> {
   let cliente = {
      id: Math.random(1,100),
      usuario: usuario.value,
      clave: clave.value,
     
   }

agregarDatos(local, cliente) 

}
/*Trabajando con array */

let arrayImagenes=["perro0.jpg","perro1.jpg","perro2.jpg"]

var imagenActual = 0;

var temporizador;
temporizador = setInterval(cambiarImagen,3000)

document.getElementById("anterior").addEventListener("click",cambiarImagen);
document.getElementById("siguiente").addEventListener("click",cambiarImagen);
document.getElementById('imagen').addEventListener('mousover',pararTemporizador);
document.getElementById('imagen').addEventListener('mousover',iniciarTemporizador);


function cambiarImagen(){
   var boton = this.id;
   if(boton!=undefined){
      clearInterval(temporizador);
      temporizador= setInterval(cambiarImagen,3000)
}if(boton === "anterior"){
 imagenActual --;
 if (imagenActual < 0){
   imagenActual = arrayImagenes.length -1;
 }
}else{
   imagenActual ++;
   if(imagenActual === arrayImagenes.length){
      imagenActual=0;
   }
}
      
  var imagenMostrar = arrayImagenes[imagenActual];
  document.getElementById('imagen').src = 'imagenes/'+ imagenMostrar;
}
function pararTemporizador(){
   clearInterval(temporizador);
}
function iniciarTemporizador(){
   temporizador= setInterval(cambiarImagen,3000)
}