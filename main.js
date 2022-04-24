/*Trabaje haciendo un simulador que calcula y hace un presupuesto de lo que 
cuesta dejar un perro en una guarderia canina, ya que en el modulo de desarrolo web
 hice como proyecto final una pagina web de ese rubro "Hotel Caninos Consentidos".
La idea es que si el cliente quiere un presupuesto primero nos tiene que dar sus datos y
asi obtenemos de a poco una base de datos de clientes. 
Seleccionando cada una de las opciones y apretando el boton en el consola sale el presupuesto */

function capturarDatos(){ 
   function Cliente(nombre,telefono,email){ /*Constructor de cliente*/
      this.nombre = nombre;
      this.telefono = telefono;
      this.email = email;
   }
   let nombreCapturar = document.getElementById("nombre").value;
   let telefonoCapturar = document.getElementById ("telefono").value;
   let emailCapturar = document.getElementById ("email").value;
   
  nuevoCliente = new Cliente (nombreCapturar, telefonoCapturar, emailCapturar); /*se crea un nuevo cliente con los datos ingresados*/ 
  agregarCliente();
}
let listaClientes = [];
  function agregarCliente(){ /*agrega a la lista de Clientes a nuestro nuevo cliente*/
     listaClientes.push(nuevoCliente);
     console.log(listaClientes);
}


const SimpleSinPensionDia = 3000;  //canil para un perro sin alimento incluido por dia
const SimpleConPensionDia = 4000; //canil para un perro con alimento incluido por dia
const DobleSinPensionDia = 1500; //canil para dos perro con alimento incluido por dia
const DobleConPensionDia = 2000; //canil para dos perro con alimento incluido por dia
const SimpleSinPensionSemana = 18900;  //canil para un perro sin alimento incluido por semana
const SimpleConPensionSemana = 25200; //canil para un perro con alimento incluido por semana
const DobleSinPensionSemana = 9450; //canil para dos perro con alimento incluido por semana
const DobleConPensionSemana = 12600; //canil para dos perro con alimento incluido por semana


const generarPresupuesto = (estadia, habitacion) =>{
estadia = document.getElementById ("estadia").value;
habitacion = document.getElementById ("habitacion").value;
let mjs = "";
let precio = 0;

if ((estadia === "por dia") && (habitacion === "Individual Sin Comida")){
   mjs ="El precio de su presupuesto es:  ";
   precio = SimpleSinPensionDia;
   console.log (mjs + precio);
}
else if ((estadia === "por dia") && (habitacion === "Individual Con Comida")){
   mjs = "El precio de su presupuesto es:  ";
   precio = SimpleConPensionDia;
   console.log (mjs + precio);
}
else if ((estadia === "por dia") && (habitacion === "Doble Sin Comida")){
   mjs = "El precio de su presupuesto es:  ";
   precio = DobleSinPensionDia;
   console.log (mjs + precio);
}
else if ((estadia === "por dia") && (habitacion === "Doble Con Comida")){
   mjs = "El precio de su presupuesto es:  ";
   precio = DobleConPensionDia;
   console.log (mjs + precio);
}
else if ((estadia === "por semana") && (habitacion === "Individual Sin Comida")){
   mjs = "El precio de su presupuesto es:  ";
   precio = SimpleSinPensionSemana;
   console.log (mjs + precio);
}
else if ((estadia === "por semana") && (habitacion === "Individual Con Comida")){
   mjs = "El precio de su presupuesto es:  ";
   precio = SimpleConPensionSemana;
   console.log (mjs + precio);
}
else if ((estadia === "por semana") && (habitacion === "Doble Sin Comida")){
   mjs = "El precio de su presupuesto es:  ";
   precio = DobleSinPensionSemana;
   console.log (mjs + precio);
}
else if ((estadia === "por semana") && (habitacion === "Doble Con Comida")){
   mjs = "El precio de su presupuesto es:  ";
   precio = DobleConPensionSemana;
   console.log (mjs + precio);
}
}

/*con el ciclo for se busca calcular el precio por cada dia de estadía menor a 7 (semana completa), 
todavia no lo hice en el index.html solo se ve en la consola*/

function precioSegunDias(i) {
for ( let i = 1; i <= 6; i++ ) {
   let total = 0;
   let valor = 3000;
  console.log (total = valor * i);
}
}
/*Con map logre calcular el valor de cada canil con IVA,
 todavia no lo hice en el index.html solo se ve en la consola*/
const caniles = [
   {tipo: "SimpleSinPensionDia", valor: 3000},
   {tipo: "SimpleConPensionDia", valor: 4000},
   {tipo: "DobleSinPensionDia", valor: 15000},
   {tipo: "DobleConPensionDia", valor: 2000},
   {tipo: "SimpleSinPensionSemana", valor: 18900},
   {tipo: "SimpleConnPensionSemana", valor: 25200},
   {tipo: "DobleSinPensionSemana", valor: 9450},
   {tipo: "DobleConPensionSemana", valor: 12600},
]
const precios = caniles.map ( (el) => el.valor)
console.log(precios)

const precioConIva = caniles.map ((el)=>{
   return{
      tipo: el.tipo,
      valor: el.valor + (el.valor * 0.21)
   }
})

console.log(precioConIva)