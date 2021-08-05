/*Enunciado:
Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la china
b- Nombre y vacuna del hombre más joven
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna mas inoculada*/


function mostrar() 
{
	let nombre;
	let edad;
	let sexo;
	let vacuna;
	let dosis;
	let promedio;
	let porcentajeMenosres;
	let porcentajeUnaDocis;
	let contHombreJov = 0;
	let contVacuAmer = 0;
	let contVacuChina = 0;
	let contVacuRusa = 0;
	let contUnaDosis = 0;
	let contPernosas = 0;
	let contMenores = 0;
	let contVacuna = 0;
	let acumHombreJov = 0;
	let acumMenores = 0;
	let respuesta;


	do {
		nombre = prompt("Igrese nombre: ");
		while ((!(nombre) || nombre.length <= 3 || nombre.length >= 10)) {
			nombre = prompt("Error! , rango superado o no es un nombre vuelva a ingresar nombre: ");
		}
		edad = parseInt(prompt("Ingrese edad: "));
		while (isNaN(edad) || edad < 12) {
			edad = parseInt(prompt("Error!, Ingrese un edad valida: "));
		}
		sexo = prompt("Ingrese sexo: f/m").toLowerCase();
		while (!(sexo == "f" || sexo == "m")) {
			sexo = prompt("Erro! , ingrese sexo: f/m").toLowerCase();
		}
		vacuna = prompt(" ingrese vacuna: ").toLowerCase();
		while (!(vacuna == "rusa" || vacuna == "china" || vacuna == "americana")) {
			vacuna = prompt("Error! , ingrese una vacuna: ").toLowerCase();
		}
		dosis = prompt("Ingrese dosis: p/s").toLowerCase();
		while (!(dosis == "p" || dosis == "s")) {
			dosis = prompt("Erro! , ingrese dosis: p/s").toLowerCase();
		}
		if (edad >= 12 && edad <= 17 && vacuna == "americana") {
			contMenores++;
		}

		switch (vacuna) {
			case "americana":
				contPernosas++;
				contVacuAmer++
				
				break;
			case "china":
				contPernosas++;
				contVacuChina++;
				break;
			case "rusa":
				contPernosas++;
				contVacuRusa++;
				break;






		}

		respuesta = prompt("Desea ingresar otro producto: s/n");
	}while(respuesta == "s");
}

