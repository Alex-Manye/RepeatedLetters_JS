/*Exercici:
L’exercici consisteix en mostrar per consola quantes vegades apareix cada lletra del teu nom i cognoms amb diferents variants (fases).
*/

/*FASE 3
●	Emmagatzemar en un Map tant les lletres de la llista (o array) com el nombre de vegades que apareixen
*/ 

var nom ='Pedrete'
var nommin = nom.toLowerCase()
let nameLetters = nommin.split("");
console.log('Partim del nom Pedrete')
var listedCounts = {};

nameLetters.map(letter =>{
    if (!listedCounts[letter]){
        listedCounts[letter]=1 
        } else {
        listedCounts[letter]=listedCounts[letter]+1;
        }
        return listedCounts 
    } 
)

console.log(listedCounts)
