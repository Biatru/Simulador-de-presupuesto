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
generarPresupuesto.onclick = (estadia, habitacion, iva) =>{
   estadia = document.getElementById ("estadia").value;
   habitacion = document.getElementById ("habitacion").value;
  
   let mjs = "";
   let precio = 0;
  
   
   if ((estadia === "por dia") && (habitacion === "Individual Sin Comida") ){
      mjs ="El precio de su presupuesto es:  $";
      precio = SimpleSinPensionDia;
      swal.fire ({
         imageUrl:"./imagenes/perro.jpg",
         imageHeight:400,
         imageAlt: 'perro plata',
         title: 'Estimado huesped',
         text: mjs + precio,
         icon:'success',
         iconColor:'#EE2C26',
         background:'#DFD7D6',
         confirmButtonColor: '#EE2C26',
      });
   }
   else if ((estadia === "por dia") && (habitacion === "Individual Con Comida")){
      mjs = "El precio de su presupuesto es:  $";
      precio = SimpleConPensionDia;
      swal.fire ({
         imageUrl:"./imagenes/perro.jpg",
         imageHeight:400,
         imageAlt: 'perro plata',
         title: 'Estimado huesped',
         text: mjs + precio,
         icon:'success',
         iconColor:'#EE2C26',
         background:'#DFD7D6',
         confirmButtonColor: '#EE2C26',
        });
   }
   else if ((estadia === "por dia") && (habitacion === "Doble Sin Comida")){
      mjs = "El precio de su presupuesto es:  $";
      precio = DobleSinPensionDia;
      swal.fire ({
         imageUrl:"./imagenes/perro.jpg",
         imageHeight:400,
         imageAlt: 'perro plata',
         title: 'Estimado huesped',
         text: mjs + precio,
         icon:'success',
         iconColor:'#EE2C26',
         background:'#DFD7D6',
         confirmButtonColor: '#EE2C26',
        });
   }
   else if ((estadia === "por dia") && (habitacion === "Doble Con Comida")){
      mjs = "El precio de su presupuesto es:  $";
      precio = DobleConPensionDia;
      swal.fire ({
         imageUrl:"./imagenes/perro.jpg",
         imageHeight:400,
         imageAlt: 'perro plata',
         title: 'Estimado huesped',
         text: mjs + precio,
         icon:'success',
         iconColor:'#EE2C26',
         background:'#DFD7D6',
         confirmButtonColor: '#EE2C26',
        });
   }
   else if ((estadia === "por semana") && (habitacion === "Individual Sin Comida")){
      mjs = "El precio de su presupuesto es:  $";
      precio = SimpleSinPensionSemana;
      swal.fire ({
         imageUrl:"./imagenes/perro.jpg",
         imageHeight:400,
         imageAlt: 'perro plata',
         title: 'Estimado huesped',
         text: mjs + precio,
         icon:'success',
         iconColor:'#EE2C26',
         background:'#DFD7D6',
         confirmButtonColor: '#EE2C26',
        });
   }
   else if ((estadia === "por semana") && (habitacion === "Individual Con Comida")){
      mjs = "El precio de su presupuesto es:  $";
      precio = SimpleConPensionSemana;
      swal.fire ({
         imageUrl:"./imagenes/perro.jpg",
         imageHeight:300,
         imageAlt: 'perro plata',
         title: 'Estimado huesped',
         text: mjs + precio,
         icon:'success',
         iconColor:'#EE2C26',
         background:'#DFD7D6',
         confirmButtonColor: '#EE2C26',
        });
   }
   else if ((estadia === "por semana") && (habitacion === "Doble Sin Comida")){
      mjs = "El precio de su presupuesto es:  $";
      precio = DobleSinPensionSemana;
      swal.fire ({
         imageUrl:"./imagenes/perro.jpg",
         imageHeight:400,
         imageAlt: 'perro plata',
         title: 'Estimado huesped',
         text: mjs + precio,
         icon:'success',
         iconColor:'#EE2C26',
         background:'#DFD7D6',
         confirmButtonColor: '#EE2C26',
        });
   }
   else if ((estadia === "por semana") && (habitacion === "Doble Con Comida")){
      mjs = "El precio de su presupuesto es:  $";
      precio = DobleConPensionSemana;
      swal.fire ({
         imageUrl:"./imagenes/perro.jpg",
         imageHeight:400,
         imageAlt: 'perro plata',
         title: 'Estimado huesped',
         text: mjs + precio,
         icon:'success',
         iconColor:'#EE2C26',
         background:'#DFD7D6',
         confirmButtonColor: '#EE2C26',
        });
   }
   else if ((estadia === "Elija una opción") || (habitacion === "Elija una opción")){
      mjs = "POR FAVOR ELIJA UNA OPCIÓN";
      swal.fire ({
         imageUrl:"./imagenes/perro lengua.jpg",
         imageHeight:300,
         imageAlt: 'perro saca la lengua',
         text: mjs,
         icon:'error',
         iconColor:'#95690B ',
         background:'#F7CD71',
         confirmButtonColor: '#AF9151',
         });
   }
}

const formulario = document.getElementById("formulario2");
 formulario.addEventListener("submit", function(event) {
    event.preventDefault(); /*Cancela el comportamiento por defecto del navegador*/
    
 }
 )


/*Manipulacion del DOM galeria de imagenes al hacer click cambia la imagen principal*/
 let imagenPrincipal = document.getElementById("imagenPrincipal");

 let contenedorMiniaturas = document.getElementById("contenedorMiniaturas");

 for(let i = 1; i<=5; i ++){
   let nuevaImagen = document.createElement("img");
   nuevaImagen.setAttribute("src","imagenes/pic" + i + ".jpg");
   
   contenedorMiniaturas.appendChild(nuevaImagen);

   nuevaImagen.addEventListener("click", function(e){
      
      let myPic = e.target.getAttribute("src");

      cambiarImagen(myPic);
   })
 }

 function cambiarImagen(myPic){
   imagenPrincipal.setAttribute("src", myPic);
 }



