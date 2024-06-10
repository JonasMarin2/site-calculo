
let res = document.getElementById('res')

function Calcular() {
    let nota1 = 7.5
    let nota2 = 6.3
    let nota3 = 8.1

    let conta = (nota1 + nota2 + nota3) / 3

    console.log("Resposta: ",conta.toFixed(2))

    res.innerHTML = conta.toFixed(2)
}
