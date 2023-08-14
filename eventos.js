document.addEventListener("DOMContentLoaded", () =>{
    var div = document.getElementById("eldiv"); 
    div.addEventListener("click",() => {
         alert("Hola soy el div");
    });

    var boton =document.getElementById("boton");
    boton.addEventListener("click",(event) => {
        event.stopPropagation();
    });
});
