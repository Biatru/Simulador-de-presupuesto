/*PETICION POST CON LA API DE FETCH USANDO LA PAG. DE formsubmit que manda un mail cada vez que un usuario se registra con todos los datos*/
const nombre = document.getElementById("nombre")
const telefono = document.getElementById("telefono")
const email = document.getElementById("email")
const boton2 = document.getElementById("boton2")

boton2.onclick = ()=> {
    let cliente = {
      id: Math.random(1,100),
      nombre: nombre.value,
      telefono: telefono.value,
      email: email.value,
   } 
fetch ('https://formsubmit.co/ajax/beabusaniche@gmail.com', {
   method: 'POST', /*Por defecto es GET*/
   body: JSON.stringify(cliente), /*convierte el objeto para poder ser enviado*/
   headers: {
     'Content-type': 'application/json', /*cabezeras de informacion de lo que estamos enviando*/
   },
 })
   .then((response) => response.json())
   .then((json) => console.log(json))
  
}
