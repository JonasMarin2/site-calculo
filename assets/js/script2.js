
let res = document.getElementById('res');

function Calcular() {
    let conta = 9 - 4 * 9 / 3 + 6 / 2;

    console.log("Resposta: ",conta);

    res.innerHTML = conta;
    res.style.backgroundColor = "white";
    res.style.color = "black";
    res.style.border = "1px solid black";
    res.style.borderRadius = "15px";
    res.style.width = "auto";
}
