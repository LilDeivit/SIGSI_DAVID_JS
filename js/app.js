/*
- Sistema de gestión de entradas - Innova ESPE 2026
- RF01 y RF02 (Menú Principal con Arrow Functions)
 */

// ===== RF01. Configuración inicial =====
const PRECIO_ENTRADA = 20;
const CUPOS_INICIALES = 50;
const DESCUENTO_ESTUDIANTE = 0.30;
const DESCUENTO_DOCENTE = 0.15;
const DESCUENTO_GENERAL = 0;
const MAX_ENTRADAS_POR_COMPRA = 5;

// Variables de estado
let cuposDisponibles = CUPOS_INICIALES;
let entradasVendidas = 0;
let ingresosAcumulados = 0;
let comprasRealizadas = 0;

// ===== RF02. Menú principal =====
const iniciarSistema = () => {
  let opcion;

  do {
    opcion = prompt(
      "SISTEMA INNOVA ESPE 2026\n\n" +
      "1. Comprar entradas\n" +
      "2. Consultar cupos disponibles\n" +
      "3. Consultar ingresos acumulados\n" +
      "4. Salir\n\n" +
      "Seleccione una opción:"
    );

    if (opcion === null) {
      opcion = "4";
    }
    opcion = opcion.trim();

    switch (opcion) {
      case "1":
        alert("Opción 1: Comprar entradas (Pendiente RF03)");
        break;
      case "2":
        alert("Opción 2: Consultar cupos (Pendiente RF04)");
        break;
      case "3":
        alert("Opción 3: Consultar ingresos (Pendiente RF05)");
        break;
      case "4":
        alert("Saliendo del sistema...");
        break;
      default:
        alert("Opción no válida. Elija un número del 1 al 4.");
        console.log("Opción de menú inexistente: " + opcion);
    }
  } while (opcion !== "4");

  console.log("Sistema finalizado.");
};