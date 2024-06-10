
let res = document.getElementById('res')

function Calcular() {
    let conta = (5.5 + 3.3 / 2.0 * 4.8 + 6.1).toFixed(3)

    console.log("Resposta: ",conta)
    
    res.innerHTML = conta
    res.innerHTML = conta;
    res.innerHTML = conta;
    res.style.backgroundColor = "white";
    res.style.color = "black";
    res.style.border = "1px solid black";
    res.style.borderRadius = "15px";
    res.style.width = "auto";
}
