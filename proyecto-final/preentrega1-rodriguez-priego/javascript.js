
// Simulador de prestamo
let montoTotal

// Intereses del prestamo
// 1 Mes (5% de interes)
// 2 a 5 Meses (15% de interes)
// 6 a 12 Meses (25% de interes)
// 13 a 24 Meses (30% de interes)
// 25 a 32 Meses (50% de interes)

const monto = parseInt(prompt("¿Cuanto dinero desea prestar?"))
const meses = parseInt(prompt("¿A cuantos meses quiere pagar el prestamo?"))

if (monto >=0){
    if (meses == 1){
        montoTotal = (monto * 0.05) + monto;
        window.alert("El total de tu prestamo a " + meses + " Mes seria " + montoTotal)
    } else if (meses <=5){
        montoTotal = (monto * 0.15) + monto;
        window.alert("El total de tu prestamo a (" + meses + " meses) seria " + montoTotal + "pesos")
        window.alert("Tus pagos seria de " + (montoTotal/meses) + " pesos a (" + meses + " meses)")


    } else if (meses <=12){
        montoTotal = (monto * 0.25) + monto;
        window.alert("El total de tu prestamo a (" + meses + " meses) seria " + montoTotal + "pesos")
        window.alert("Tus pagos seria de " + (montoTotal/meses) + " pesos a (" + meses + " meses)")


    } else if (meses <=24){
        montoTotal = (monto * 0.30) + monto;
        window.alert("El total de tu prestamo a (" + meses + " meses) seria " + montoTotal + "pesos")
        window.alert("Tus pagos seria de " + (montoTotal/meses) + " pesos a (" + meses + " meses)")


    } else if (meses <=32){
        montoTotal = (monto * 0.50) + monto;
        window.alert("El total de tu prestamo a (" + meses + " meses) seria " + montoTotal + "pesos")
        window.alert("Tus pagos seria de " + (montoTotal/meses) + " pesos a (" + meses + " meses)")


    } else {
        window.alert("Ingresa un valor de meses valido (El maximo es 36 Meses)")
    }
}else{
    window.alert("Ingresa un monto valido")
}
