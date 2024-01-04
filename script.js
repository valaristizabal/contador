const diasJuntas = document.getElementById("dias");

let fecha1 = new Date(2023, 3, 10);
let fecha2 = new Date();

let fechaConocernos = Date.UTC(fecha1.getFullYear(), fecha1.getMonth(), fecha1.getDate());
let fechaActual = Date.UTC(fecha2.getFullYear(), fecha2.getMonth(), fecha2.getDate());

let diferencia = (fecha2 - fecha1) / (1000 * 60 * 60 * 24); // Calcula la diferencia en días
diferencia = Math.floor(diferencia); // Redondea hacia abajo la diferencia
console.log(diferencia); 
diasJuntas.innerText = diferencia + " !";
