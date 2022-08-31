// ESTE ALGORITMO CONSISTE EN  LA ENTRADA A UN CAJERO AUTOMATICO, ESTE CAJERO AUTOMATICO TIENE CAPACIDAD MAXIMA PARA SACAR DINERO DE 10.000$ PESOS AL DIA, Y ESTE CAJERO ESTA ABIERTO DE 6hs A 12hs Y DE 16hs A 20hs. PASARAN AL CAJERO UNA SERIE DE PERSONAS Y DEBERAN PONER EL MONTO QUE DESEAN SACAR DEL CAJERO. DEBIDO AL PROTOCOLO POR LA PANDEMIA EN UN DIA HAY UN CUPO MAXIMO DE CLIENTES DE 10.


let hora

function banco(hora, monto) {
    hora = Number(prompt("Ingrese la hora de entrada del cliente"))
    if ((hora >= 6 && hora <= 12) || (hora >= 16 && hora <= 20)) {
        alert("El cajero esta abierto, puede pasar")
        console.log("El cajero esta abierto, puede pasar")
        monto = Number(prompt("Ingrese el monto que desea retirar el cliente"))
        if (monto <= 10000) {
            alert(`Puede retirar la cantidad de $${monto} de su cajero.`)
            console.log(`Puede retirar la cantidad de $${monto} de su cajero.`)
        } else {
            alert("Lo siento, El monto maximo disponible por dia es de 10000$")
            console.log("Lo siento, El monto maximo disponible por dia es de 10000$")
        }
    } else {
        alert("Lo siento, el cajero esta cerrado")
        console.log("Lo siento, el cajero esta cerrado")
    }
}

for (let persona = 1; persona <= 10; persona++) {
    console.log(`Cliente N°${persona}`)
    alert(`* Ingresa el cliente N°${persona} *`)
    banco()
}