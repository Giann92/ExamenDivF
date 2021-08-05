/*Enunciado:
El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa menos encontrada
d- Edad del menor argentino contagiado
e- Cantidad de personas extranjeras contagiadas con la delta*/



function mostrar() {
    let nacionalidad;
    let edad;
    let resultado;
    let cepa;
    let edadMenor;
    let menorCepa;
    let contPositivos = 0;
    let contNegativos = 0;
    let contDelta = 0;
    let contAlfa = 0;
    let contBeta = 0;
    let contExtrajero = 0;
    let contNinguna = 0;
    let flagDelMenor = 1;
    let cantTotal = 0;
    let porcentajePositivos;
    let porcentajesNegativos;

    for (let i = 0; i < 1; i++) {
        nacionalidad = prompt("Ingrese nacionalidad ");
        while (!(nacionalidad == "argentina" || nacionalidad == "extrajero")) {
            nacionalidad = prompt("Error! , Ingrese nacionalidad: ");
        }
        edad = parseInt(prompt("Ingrese edad: "));
        while (isNaN(edad) || edad < 18 || edad > 65) {
            edad = parseInt(prompt("Error!, Ingrese un edad valida: "));
        }
        resultado = prompt("Ingrese resulatdo: p/n").toLowerCase();
        while (!(resultado == "p" || resultado == "n")) {
            resultado = prompt("Erro! , ingrese resulatdo: p/n").toLowerCase();
        }
        cepa = prompt(" ingrese cepa: ").toLowerCase();
        while (!(cepa == "delta" || cepa == "alfa" || cepa == "beta" || cepa == "ninguna")) {
            cepa = prompt("Error! , ingrese una cepa: ");
        }

        if (nacionalidad == "argentina" && resultado == "P" && flagDelMenor || edadMenor < edad) {
            edadMenor = edad;
            flagDelMenor = 0;
        }
        switch (resultado) {
            case "p":

                contPositivos++;
                switch (cepa) {
                    case "alfa":
                        contAlfa++;
                        contExtrajero + "</br>"++;
                        break;
                    case "beta":
                        contBeta++;
                        contExtrajero + "</br>"++;
                        break;
                    case "delta":
                        contDelta++;
                        contExtrajero + "</br>"++;
                        break;
                }
            case "n":
                contNegativos++;
                switch (cepa) {
                    case "ninguna":
                        contNinguna++;
                        contExtrajero + "</br>"++;
                        break;
                }

        }
        cantTotal = contPositivos + contNegativos;
    }
    porcentajePositivos = contPositivos * 100 / cantTotal;
    porcentajesNegativos = contNegativos * 100 / cantTotal;
    if (contAlfa < contDelta && contAlfa < contBeta) {
        menorCepa = " Alfa";
    } else if (contBeta <= contAlfa && contBeta < contDelta) {
        menorCepa = "beta";
    } else {
        menorCepa = "delta";
    }
document.write("El procentaje de positivo es : " + porcentajePositivos + "</br>");
document.write("El procentaje de negativo es : " + porcentajesNegativos + "</br>");
document.write("El argentino de menor edad tiene: " + edadMenor + "</br>");
document.write("La cantidad de personas extrajera son : " + contExtrajero + "</br>");
}
