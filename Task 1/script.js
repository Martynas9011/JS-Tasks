/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function convertPounds(weight) {
    return weight * 2.2046
}

function convertGrams(weight) {
    return weight * 0.0010000
}

function convertOz(weight) {
    return weight * 35.274
}

function convert() {
    const weight = document.getElementById("search").value;
    const weightPounds = convertPounds(weight)
    const weightGrams = convertGrams(weight)
    const weightOz = convertOz(weight)
    document.getElementById("output").setAttribute("align", "center");
    document.getElementById("output").innerHTML = `
    <div>
    <div><strong>Pounds:</strong> ${weightPounds}</div>
    <div><strong>Grams:</strong> ${weightGrams}</div>
    <div><strong>Oz:</strong> ${weightOz}</div>
    
</div>`
}
