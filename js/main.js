/*Trabaje haciendo un simulador que calcula y hace un presupuesto de lo que 
cuesta dejar un perro en una guarderia canina, ya que en el modulo de desarrolo web
 hice como proyecto final una pagina web de ese rubro "Hotel Caninos Consentidos".
La idea es que si el cliente quiere un presupuesto primero nos tiene que dar sus datos y
asi obtenemos de a poco una base de datos de clientes. 
Seleccionando cada una de las opciones y apretando el boton en el consola sale el presupuesto */

/*Incorporando eventos: Con el siguiente evento la idea es tomar todos los elementos con clase "formulario_input" y los agrego a la variable inputs, recorro dicha variable, 
escucha y si alguno de sus elementos tiene un caracter le incorpora la clase fijar, asi no se baja el titulo pj "Nombre" y tapa lo que se escribe*/

let inputs = document.getElementsByClassName("formulario_input");
for ( let i = 0; i <inputs.length; i++ ){
   inputs[i].addEventListener("keyup",function(){
      if(this.value.length>=1){
         this.nextElementSibling.classList.add("fijar");
      }else{
         this.nextElementSibling.classList.remove("fijar");
      }
   })
}
const nombre = document.getElementById("nombre")
const telefono = document.getElementById("telefono")
const email = document.getElementById("email")
const boton = document.getElementById("boton1")

const resultado = document.getElementById("resultado")

const local = window.localStorage


boton.onclick = ()=> {
   let cliente = {
      id: Math.random(1,100),
      nombre: nombre.value,
      telefono: telefono.value,
      email: email.value,
   }
  agregarDatos(local, cliente) /*esta creada en el archivo funciones.js*/
 
}
cargarCliente  (local, resultado) /*esta creada en el archivo funciones.js*/




const SimpleSinPensionDia = 3000;  //canil para un perro sin alimento incluido por dia
const SimpleConPensionDia = 4000; //canil para un perro con alimento incluido por dia
const DobleSinPensionDia = 1500; //canil para dos perro con alimento incluido por dia
const DobleConPensionDia = 2000; //canil para dos perro con alimento incluido por dia
const SimpleSinPensionSemana = 18900;  //canil para un perro sin alimento incluido por semana
const SimpleConPensionSemana = 25200; //canil para un perro con alimento incluido por semana
const DobleSinPensionSemana = 9450; //canil para dos perro con alimento incluido por semana
const DobleConPensionSemana = 12600; //canil para dos perro con alimento incluido por semana

const generarPresupuesto = document.getElementById("boton2")

/*Aplicamos SweetAlert2 para obtener el presupuesto*/ 
generarPresupuesto.onclick = (estadia, habitacion) =>{
   estadia = document.getElementById ("estadia").value;
   habitacion = document.getElementById ("habitacion").value;
   let mjs = "";
   let precio = 0;
   
   if ((estadia === "por dia") && (habitacion === "Individual Sin Comida")){
      mjs ="El precio de su presupuesto es:  $";
      precio = SimpleSinPensionDia;
      swal.fire ({
       imageUrl:'./imagenes/perro.jpg',
       imageHeight:300,
       imageAlt: 'perro',
       title: 'Estimado huesped',
       text: mjs + precio,
       icon:'info'
      });
   }
   else if ((estadia === "por dia") && (habitacion === "Individual Con Comida")){
      mjs = "El precio de su presupuesto es:  $";
      precio = SimpleConPensionDia;
      swal.fire ({
         imageUrl:"./imagenes/perro.jpg",
         imageHeight:300,
         imageAlt: 'perro',
         title: 'Estimado huesped',
         text: mjs + precio,
         icon:'info'
        });
   }
   else if ((estadia === "por dia") && (habitacion === "Doble Sin Comida")){
      mjs = "El precio de su presupuesto es:  $";
      precio = DobleSinPensionDia;
      swal.fire ({
         imageUrl:"./imagenes/perro.jpg",
         imageHeight:300,
         imageAlt: 'perro',
         title: 'Estimado huesped',
         text: mjs + precio,
         icon:'info'
        });
   }
   else if ((estadia === "por dia") && (habitacion === "Doble Con Comida")){
      mjs = "El precio de su presupuesto es:  $";
      precio = DobleConPensionDia;
      swal.fire ({
         imageUrl:"./imagenes/perro.jpg",
         imageHeight:300,
         imageAlt: 'perro',
         title: 'Estimado huesped',
         text: mjs + precio,
         icon:'info'
        });
   }
   else if ((estadia === "por semana") && (habitacion === "Individual Sin Comida")){
      mjs = "El precio de su presupuesto es:  $";
      precio = SimpleSinPensionSemana;
      swal.fire ({
         imageUrl:"./imagenes/perro.jpg",
         imageHeight:300,
         imageAlt: 'perro',
         title: 'Estimado huesped',
         text: mjs + precio,
         icon:'info'
        });
   }
   else if ((estadia === "por semana") && (habitacion === "Individual Con Comida")){
      mjs = "El precio de su presupuesto es:  $";
      precio = SimpleConPensionSemana;
      swal.fire ({
         imageUrl:"./imagenes/perro.jpg",
         imageHeight:300,
         imageAlt: 'perro',
         title: 'Estimado huesped',
         text: mjs + precio,
         icon:'info'
        });
   }
   else if ((estadia === "por semana") && (habitacion === "Doble Sin Comida")){
      mjs = "El precio de su presupuesto es:  $";
      precio = DobleSinPensionSemana;
      swal.fire ({
         imageUrl:"./imagenes/perro.jpg",
         imageHeight:300,
         imageAlt: 'perro',
         title: 'Estimado huesped',
         text: mjs + precio,
         icon:'info'
        });
   }
   else if ((estadia === "por semana") && (habitacion === "Doble Con Comida")){
      mjs = "El precio de su presupuesto es:  $";
      precio = DobleConPensionSemana;
      swal.fire ({
         imageUrl:"./imagenes/perro.jpg",
         imageHeight:300,
         imageAlt: 'perro',
         title: 'Estimado huesped',
         text: mjs + precio,
         icon:'info'
        });
   }
   else if ((estadia === "Elija una opción") || (habitacion === "Elija una opción")){
      mjs = "Debe elegir una opcion";
      swal.fire ({
         imageUrl:"./imagenes/perro error.jpg",
         imageHeight:300,
         imageAlt: 'perro en computadora',
         text: mjs,
         icon:'error'
        });
   }
}

const formulario = document.getElementById("formulario2");
 formulario.addEventListener ("submit", function(event) {
    event.preventDefault();/*Cancela el comportamiento por defecto del navegador*/
    
 }
 )
 