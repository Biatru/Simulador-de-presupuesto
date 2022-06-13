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



/*Validaciones de los inputs. En correo se usó expresiones regulares*/ 

function validar(){
   var nombre, correo,telefono,expresion;
   nombre = document.getElementById('nombre').value;
   telefono = document.getElementById('telefono').value;
   correo = document.getElementById('email').value;
    
   expresion = /\w+@\w+\.+[a-z]/; /*el correo debe empezar con texto o numero seguido de @ luego un punto y luego texto )*/

if(nombre ==="" || telefono ==="" || correo ===""){
   swal.fire ({
      imageUrl:"./imagenes/perro lengua.jpg",
      imageHeight:300,
      imageAlt: 'perro saca la lengua',
      text: 'Todos los campos son obligatorios',
      icon:'error',
      iconColor:'#95690B ',
      background:'#F7CD71',
      confirmButtonColor: '#AF9151',
     });
   return false;
}
else if(nombre.length>30){
   swal.fire ({
      imageUrl:"./imagenes/perro lengua.jpg",
      imageHeight:300,
      imageAlt: 'perro saca la lengua',
      text: 'El nombre es muy largo',
      icon:'error',
      iconColor:'#95690B ',
      background:'#F7CD71',
      confirmButtonColor: '#AF9151',
     });
   return false;
}
else if(correo.length>40){
   swal.fire ({
      imageUrl:"./imagenes/perro lengua.jpg",
      imageHeight:300,
      imageAlt: 'perro saca la lengua',
      text: 'El correo es muy largo',
      icon:'error',
      iconColor:'#95690B ',
      background:'#F7CD71',
      confirmButtonColor: '#AF9151',
     });
   return false;
}
else if(!expresion.test(correo)){
   swal.fire ({
      imageUrl:"./imagenes/perro lengua.jpg",
      imageHeight:300,
      imageAlt: 'perro saca la lengua',
      text: 'El correo no es valido',
      icon:'error',
      iconColor:'#95690B ',
      background:'#F7CD71',
      confirmButtonColor: '#AF9151',
     });
   return false;
}
else if(telefono.length>10){
   swal.fire ({
      imageUrl:"./imagenes/perro lengua.jpg",
      imageHeight:300,
      imageAlt: 'perro saca la lengua',
      text: 'El teléfono ingresado es muy largo',
      icon:'error',
      iconColor:'#95690B ',
      background:'#F7CD71',
      confirmButtonColor: '#AF9151',
     });
   return false;
}
else if(isNaN(telefono)){
    swal.fire ({
      imageUrl:"./imagenes/perro lengua.jpg",
      imageHeight:300,
      imageAlt: 'perro saca la lengua',
      text: 'El teléfono ingresado no es un numero',
      icon:'error',
      iconColor:'#95690B ',
      background:'#F7CD71',
      confirmButtonColor: '#AF9151',
     });
   return false;
}
}
