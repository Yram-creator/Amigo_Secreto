// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Crear una lista
let amigo = [];



// Ingresar nombres

function agregarAmigo(){
    let ingresarAmigos = document.getElementById("amigo");
    let nombreAmigo = ingresarAmigos.value;

// Validar ingreso de nombresque no este vacio

    if (!nombreAmigo){
        alert ("nombre no valido");
        return;
    }

   amigo.push(nombreAmigo);
   console.log(amigo);
   ingresarAmigos.value = "";
   ingresarAmigos.focus();
   mostrarNombres();
   
}

//Mostrar los nombres ingresados
function mostrarNombres(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

   for(let i = 0; i < amigo.length; i++){
    let item = document.createElement("li");
    item.textContent = amigo[i];
    listaAmigos.appendChild(item);
   }
}

// sortear nombres  y obtener resultado

function sortearAmigo() {
    if(amigo.length === 0 ){
        alert ("no hay amigos para sortear");
        return;
    }

    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    console.log (amigoSorteado);
    let resultado = document.getElementById("resultado");
    //console.log (resultado);
    resultado.innerHTML = (`El amigo sorteado es: ${amigoSorteado} `);

    //let limpiarLista =document.getElementById ("listaAmigos");
   // limpiarLista.innerHTML ="";
}

// Reiniciar Juego

function reiniciarJuego() {

    document.querySelector(listaAmigos).value ="";
}
