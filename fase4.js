/*Exercici:
L’exercici consisteix en mostrar per consola quantes vegades apareix cada lletra del teu nom i cognoms amb diferents variants (fases).
*/

/*FASE 4
●	Crea una altra llista amb el teu cognom on cada posició correspongui a una lletra.
●	Fusiona les dues llistes en una sola. A més, afegeix una posició amb un espai buit entre la primera i la segona. És a dir, partim de la llista name i surname i al acabar l’execució només tindrem una que es dirà fullName.
*/ 

function fusiodeLlistes(){
var name = 'Alex'
var surname = 'Manye'
var fullName = `${name} ${surname}`
console.log(fullName);

let fullName2 = fullName.split("");
console.log(fullName2); 

}