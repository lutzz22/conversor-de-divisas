let valor = document.querySelector('#valor')
// let valore = valor.value
let resultado = 0
let dolar = 121.47
let euro = 130.10
let libra = 152.15
let dolares = document.getElementById('uno')
let euros = document.getElementById('dos')
let libras = document.getElementById('tres')
let cambio = 0

function convertir() {
    if(dolares.checked){
        resultado = parseInt(valor.value)/dolar;
        cambio = resultado.toFixed(2)
        alert(`$${valor.value} Pesos Argentinos son US$${cambio} Dolares`)
        dolares.checked= false
    } else if(euros.checked){
        resultado = parseInt(valor.value)/euro;
        cambio=resultado.toFixed(2)
        alert(`$${valor.value} Pesos Argentinos son €${cambio} Euros`)
        euros.checked= false
    }else if(libras.checked){
        resultado = parseInt(valor.value)/libra;
        cambio=resultado.toFixed(2)
        alert(`$${valor.value} Pesos Argentinos son £${cambio} Libras`)
        libras.checked= false
    }else{
        alert('Tienes que completar todos los campos para poder seguir')
    }
    
    valor.value=''
}
