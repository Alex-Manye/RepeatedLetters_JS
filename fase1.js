/*Exercici:
L’exercici consisteix en mostrar per consola quantes vegades apareix cada lletra del teu nom i cognoms amb diferents variants (fases).
*/

/*FASE 1
●	Crea un array amb el teu nom on cada posició correspongui a una lletra.
●	Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres.
*/

var nom ='Alex'

function arrayLLetra(){
    for (let i=0;i < nom.length; i++){
    console.log(nom[i])
    } 
}
