/*Exercici:
L’exercici consisteix en mostrar per consola quantes vegades apareix cada lletra del teu nom i cognoms amb diferents variants (fases).
*/


/*FASE 2
●	Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
●	Si trobes un número, mostra per pantalla: ‘Els noms de persones no contenen el número: __’.
*/

//Duda xra Ismael -> Podría saber si nommin[i] es número de forma más eficiente? 
// He probado con isNaN(nommin[i]) , typeof nommin[i] === 'number', isInteguer(), pero supongo que aunque sea número si está dentro del string esas funciones no me servirian...

function vocalConsonant(){
var nom ='Alej3ndro'
var nommin = nom.toLowerCase()
console.log('Partim del nom Alej3ndro')
for (let i=0;i < nommin.length; i++){

if ((nommin[i] == 'a') || (nommin[i] == 'e')  || (nommin[i] == 'i') || (nommin[i] == 'o') || (nommin[i] == 'u')){
    console.log(`He trobat la VOCAl: ${nom[i]}`)
} else if ((nommin[i] == '0') || (nommin[i] == '1') || (nommin[i] == '2') || (nommin[i] == '3') || (nommin[i] == '4') || (nommin[i] == '5') || (nommin[i] == '6')  ||(nommin[i] == '7') || (nommin[i] == '8') || (nommin[i] == '9')){
    console.log(`Els noms de persones no contenen el número: ${nom[i]}`)
    } else {
    console.log(`He trobat la CONSONANT: ${nom[i]}`)
}}
} 
