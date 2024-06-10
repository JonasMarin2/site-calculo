
let res = document.getElementById('res');

function Calcular() {
    let conta = (7.9 * 3.2 + 5.2 / 3.1 + 7.9).toFixed(3)

    console.log("Resposta: ",conta);

    res.innerHTML = conta;

}
