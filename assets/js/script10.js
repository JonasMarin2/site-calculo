function Calcular() {
    let res = document.getElementById('res')

    let smartphone = Number(document.getElementById('smartphone').value)
    let tablet = Number(document.getElementById('tablet').value)
    let smartwatch = Number(document.getElementById('smartwatch').value)
    
    const precoSmartphone = 899;
    const precoTablet = 499;
    const precoSmartwatch = 299;

    let totalSmartphone = smartphone * precoSmartphone
    let totalTablet = tablet * precoTablet
    let totalSmartwatch = smartwatch * precoSmartwatch
    
    console.log("O valor total só dos Smartphones é: ", totalSmartphone)
    console.log("O valor total só dos Tablets é: ", totalTablet)
    console.log("O valor total só dos Smartwatches é: ", totalSmartwatch)

    let total = totalSmartphone + totalTablet + totalSmartwatch

    console.log("O valor total é: ", total)

    res.innerHTML = "O valor final é: R$: " + total.toFixed(2)
}