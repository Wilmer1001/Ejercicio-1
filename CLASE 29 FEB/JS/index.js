const aula=["Brayan","bryan2","Wilmer","Beymar","Tonny","Michell","Jesus","Jhon Cachi","Eugenio","Josias","Jorge","Joel","jazmin","Freddy","Jhon Cori"];
function nombreescogido(){
    var azar = Math.floor(Math.random()*aula.length);
    var nombreAleatorio=aula[azar];
    //console.log(nombreAleatorio);
    document.getElementById("nombre").value=nombreAleatorio;
}

function llama(){
 //   let conten= document.querySelector('.lista');
 //   conten.innerHTML='<ul></ul>' + aula.join('<li></li>')+'<li></li>';

    document.getElementById("lista").innerHTML=lista.toString();
}
// console.log(nombreescogido());