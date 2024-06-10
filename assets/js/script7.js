
let res = document.getElementById('res')

function Calcular() {
    let traj1km = 27;
    let traj1ga = 3.5;
    let traj2km = 39;
    let traj2ga = 6.3;

    let conta = (traj1km + traj2km) / (traj1ga + traj2ga);

    console.log("Resposta: ",conta);

    res.innerHTML = conta.toFixed(3)+"km/gasolina"
}
