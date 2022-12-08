/* OBTENEMOS EL VALOR DEL INPUT NICK */
const nickInput = document.getElementById('nick');
console.log(nickInput.value);

/* OBTENEMOS EL VALOR DEL SELECT. */
const tamnioJuego = document.getElementById('tamanio');
console.log(`El valor del campo select es: ${tamnioJuego.value}, que corresponde a: ${tamnioJuego.options[tamnioJuego.selectedIndex].text}.`);

/* FUNCIONES DE VALIDACIÓN. */
function test(){
    console.log("Evento de raton.");
}