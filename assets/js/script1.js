let res = document.getElementById('res');

function Calcular(){
    let conta = 5 + 3 * 4 - 8 / 2;

    console.log("| resposta: ",conta);
    res.innerHTML = conta;
    res.style.backgroundColor = "white";
    res.style.color = "black";
    res.style.border = "1px solid black";
    res.style.borderRadius = "15px";
    res.style.width = "auto";
}