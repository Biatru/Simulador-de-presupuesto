

const agregarDatos = (local, cliente)=>{
    local.setItem(cliente.id, JSON.stringify(cliente))/*setItem recibe dos parametros para guardar algo en el local storage: key del cliente y el cliente. Con JSON.stingify tranforma ese objeto en string para poder leerlo y guardarlo */ 
    window.location.href = '/' /*resfresca la pagina*/
   }
/* para recoger los clientes que guardamos y mostrarlos*/ 

const cargarCliente = (local, parentNode)=>{
let claves = Object.keys(local)
for(clave of claves){ /*Para acceder a cada key q esta en el local Storage*/
   let cliente = JSON.parse(local.getItem (clave))
/*asi tengo dentro de cada variable cliente un objeto al cual puedo acceder a sus propiedades*/ 
   crearCliente(parentNode, cliente, local)
}
}
const crearCliente = (parentNode,cliente,local)=>{
    let divCliente = document.createElement('div')
    let nombreCliente = document.createElement('p')
    let telefonoCliente = document.createElement('p')
    let emailCliente = document.createElement('p')
   
    nombreCliente.innerHTML = cliente.nombre
    telefonoCliente.innerHTML = cliente.telefono
    emailCliente.innerHTML = cliente.email
   
   divCliente.classList.add('datos')
   divCliente.appendChild(nombreCliente)
   divCliente.appendChild(telefonoCliente)
   divCliente.appendChild(emailCliente)
   
   parentNode.appendChild(divCliente)
   
}
   