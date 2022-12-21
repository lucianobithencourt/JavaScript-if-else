// Calculo de IMC.

/**var peso = parseFloat(prompt("Informe seu peso"));

var altura = parseFloat(prompt("Informe sua altura"));


imc = peso / (altura**2);

console.log(imc.toFixed(2));

document.write(`Seu imc esta ${imc.toFixed(2)}`);

// Controle if-else

if ( imc < 19) {
    console.log("Abaixo do Peso");

} else if (imc >= 19 && imc < 25) {
    console.log(" Peso Normal");

} else if (imc >= 25 && imc < 30)  {
    console.log(" Sobrepeso");

} else if (imc >= 30 && imc < 40)  {
    console.log(" Obesidade - I");
} else {
    console.log(" Obesidade - II")
}*/

// ------------------------------

// CALCULAR MEDIA DE NOTAS

var nta1 = parseFloat(prompt("Informe sua 1ª NotaBimestral", "Ex:0.0"));

var nta2 = parseFloat(prompt("Informe sua 2ª NotaBimestral", "Ex:0.0"));

var nta3 = parseFloat(prompt("Informe sua 3ª NotaBimestral", "Ex:0.0"));

var nta4 = parseFloat(prompt("Informe sua 4ª NotaBimestral", "Ex:0.0"));

var faltas = Number(prompt("Informe qtd de faltas","Ex: 0"))

const p0 = parseFloat(0.5);
const p1 = parseFloat(0.7);
const p2 = parseFloat(1.0);
const p3 = parseFloat(1.5);


var mediaBi = (((nta1 * p0) + (nta2 * p1) + (nta3 * p2) + (nta4 * p3))) / 4;

// CONDIÇÃO IF-ELSE
if (mediaBi >= 7 && faltas < 10) {

    alert(`Aprovado com media ${mediaBi.toFixed(2)} e ${faltas} faltas`);
    
    // console.log(`Aprovado com media ${mediaBi.toFixed(2)} e ${faltas} faltas`);

} else if (mediaBi >= 6 && mediaBi < 6.9 && faltas < 10) {

    alert(`Recuperação com media ${mediaBi.toFixed(2)} e ${faltas} faltas`)
    
    // console.log(`Recuperação com media ${mediaBi.toFixed(2)} e ${faltas} faltas`);
    
} else {

    alert(`Reprovado com media ${mediaBi.toFixed(2)} e ${faltas} faltas`)

    // console.log(`Reprovado com media ${mediaBi.toFixed(2)} e ${faltas} faltas`);
}


// CONDIÇÃO TERNARIA
// var media = (mediaBi>=7)?"aprovado :)":"reprovado :(";

// console.log(` Você foi ${media}`);
// console.log(`Com media ${mediaBi.toFixed(2)}`);




// ------------------------------