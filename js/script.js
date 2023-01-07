const porcentajeLunes = 0.005;
const porcentajeMartes = 0.015;
const porcentajeMiercoles = 0.025;
const porcentajeJueves = 0.010;
const porcentajeViernes = 0.030;
let dia = 0;
let monto = 0;
let reintegro = 0;



function informacion() {
    alert("Bienvenido a CUENTA DNI")
    alert("Sistema de reintegros mes de Enero")
    let nombre = prompt("Ingrese nombre de usuario");
    let apellido = prompt("Ingrese su apellido");
    if (nombre != "" && apellido != "") {
        alert("Hola " + nombre + " " + apellido);

    }
    else {
        alert("Usuario no registrado");
    }
}

function cuenta(monto, porcentajeLunes) {
    return (monto * porcentajeLunes)
}

function descuento(dia) {
    dia = prompt("Ingrese un dia de la semana (sin mayusculas), pulse 0 para salir")
    while (dia != 0) {

        switch (dia) {
            case "lunes": case 1:
                monto = parseInt(prompt("Ingrese un monto para ver su reintegro"))

                reintegro = cuenta(monto, porcentajeLunes)
                alert("Los dias " + dia + " el reintegro sera de " + (porcentajeLunes * 100) + "%")
                alert("Usted ingreso $ " + monto + "\n Se le reintegraran " + " $" + reintegro + " en su cuenta DNI")
                break;

            case "martes":
                monto = parseInt(prompt("Ingrese un monto para ver su reintegro"))

                reintegro = cuenta(monto, porcentajeMartes);
                alert("Los dias " + dia + " el reintegro sera de " + (porcentajeMartes * 100) + "%")
                alert("Usted ingreso $ " + monto + "\n Se le reintegraran " + " $" + reintegro + " en su cuenta DNI")
                break;

            case "miercoles":
                monto = parseInt(prompt("Ingrese un monto para ver su reintegro"))

                reintegro = cuenta(monto, porcentajeMiercoles);
                alert("Los dias " + dia + " el reintegro sera de " + (porcentajeMiercoles * 100) + "%")
                alert("Usted ingreso $ " + monto + "\n Se le reintegraran " + " $" + reintegro + " en su cuenta DNI")
                break;

            case "jueves":
                monto = parseInt(prompt("Ingrese un monto para ver su reintegro"))

                reintegro = cuenta(monto, porcentajeJueves);
                alert("Los dias " + dia + " el reintegro sera de " + (porcentajeJueves * 100) + "%")
                alert("Usted ingreso $ " + monto + "\n Se le reintegraran " + " $" + reintegro + " en su cuenta DNI")
                break;

            case "viernes":
                monto = parseInt(prompt("Ingrese un monto para ver su reintegro"))

                reintegro = cuenta(monto, porcentajeViernes);
                alert("Los dias " + dia + " el reintegro sera de " + (porcentajeViernes * 100) + "%")
                alert("Usted ingreso $" + monto + "\n Se le reintegraran " + " $" + reintegro + " en su cuenta DNI")
                break;

            case "sabado": case "domingo":
                alert("No Aplica descuento")
                break;

            default:
                alert("Recuerde ingresar un dia de la semana - Lunes a Viernes sin mayusculas")
                break;
        }
        dia = prompt("Ingrese un dia, pulse 0 para salir");
    }
}

informacion();
descuento();