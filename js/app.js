/*
- Sistema de gestión de entradas - Innova ESPE 2026
- RF01, RF02, RF03, RF04, RF05 y RF06 (Sistema Completo)
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

// ===== Funciones auxiliares (Arrow Functions) =====
const normalizar = (texto) => {
  return texto
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

const obtenerTipoParticipante = (entrada) => {
  const tipo = normalizar(entrada);

  if (tipo === "estudiante" || tipo === "1") {
    return { nombre: "Estudiante", descuento: DESCUENTO_ESTUDIANTE };
  } else if (tipo === "docente" || tipo === "2") {
    return { nombre: "Docente", descuento: DESCUENTO_DOCENTE };
  } else if (
    tipo === "publico general" ||
    tipo === "general" ||
    tipo === "publico" ||
    tipo === "3"
  ) {
    return { nombre: "Público general", descuento: DESCUENTO_GENERAL };
  }
  return null;
};

const validarCantidad = (texto) => {
  const limpio = texto.trim();
  if (!/^\d+$/.test(limpio)) {
    return { valida: false, motivo: "La cantidad debe ser un número entero." };
  }
  const cantidad = Number(limpio);
  if (cantidad < 1 || cantidad > MAX_ENTRADAS_POR_COMPRA) {
    return {
      valida: false,
      motivo: "La cantidad debe estar entre 1 y " + MAX_ENTRADAS_POR_COMPRA + ".",
    };
  }
  return { valida: true, cantidad: cantidad };
};

const rechazarCompra = (motivo) => {
  alert("Compra rechazada.\n" + motivo);
  console.log("Compra rechazada: " + motivo);
};

// ===== RF03. Compra de entradas =====
const comprarEntradas = () => {
  if (cuposDisponibles === 0) {
    rechazarCompra("El evento está agotado.");
    return;
  }

  // 1. Nombre
  const nombreEntrada = prompt("Ingrese el nombre del comprador:");
  if (nombreEntrada === null) {
    rechazarCompra("Operación cancelada por el usuario.");
    return;
  }
  const nombre = nombreEntrada.trim();
  if (nombre === "") {
    rechazarCompra("El nombre no puede estar vacío.");
    return;
  }

  // 2. Tipo de participante
  const tipoEntrada = prompt(
    "Tipo de participante:\n1. Estudiante\n2. Docente\n3. Público general\n\n(Escriba el nombre o el número)"
  );
  if (tipoEntrada === null) {
    rechazarCompra("Operación cancelada por el usuario.");
    return;
  }
  const tipo = obtenerTipoParticipante(tipoEntrada);
  if (tipo === null) {
    rechazarCompra("Tipo de participante no válido.");
    return;
  }

  // 3. Cantidad
  const cantidadEntrada = prompt(
    "Cantidad de entradas (1 a " + MAX_ENTRADAS_POR_COMPRA + "):"
  );
  if (cantidadEntrada === null) {
    rechazarCompra("Operación cancelada por el usuario.");
    return;
  }
  const resultado = validarCantidad(cantidadEntrada);
  if (!resultado.valida) {
    rechazarCompra(resultado.motivo);
    return;
  }
  const cantidad = resultado.cantidad;

  // 4. Cupos suficientes
  if (cantidad > cuposDisponibles) {
    rechazarCompra(
      "No hay cupos suficientes. Cupos disponibles: " + cuposDisponibles + "."
    );
    return;
  }

  // 5. Cálculos
  const subtotal = cantidad * PRECIO_ENTRADA;
  const valorDescuento = subtotal * tipo.descuento;
  const total = subtotal - valorDescuento;
  const porcentaje = tipo.descuento * 100;

  // 6. Actualizar datos
  cuposDisponibles -= cantidad;
  entradasVendidas += cantidad;
  ingresosAcumulados += total;
  comprasRealizadas++;

  // 7. Resumen
  const resumen =
    "RESUMEN DE COMPRA\n\n" +
    "Nombre: " + nombre + "\n" +
    "Tipo de participante: " + tipo.nombre + "\n" +
    "Cantidad de entradas: " + cantidad + "\n\n" +
    "Subtotal: $" + subtotal.toFixed(2) + "\n" +
    "Descuento (" + porcentaje + " %): $" + valorDescuento.toFixed(2) + "\n" +
    "Total a pagar: $" + total.toFixed(2) + "\n\n" +
    "Compra realizada exitosamente.\n\n" +
    "Cupos restantes: " + cuposDisponibles;

  alert(resumen);
  console.log(resumen);
};

// ===== RF04. Consultar cupos disponibles =====
const consultarCupos = () => {
  let mensajeDisponibilidad = "";

  if (cuposDisponibles > 10) {
    mensajeDisponibilidad = "Cupos disponibles";
  } else if (cuposDisponibles >= 1 && cuposDisponibles <= 10) {
    mensajeDisponibilidad = "Últimos cupos disponibles";
  } else {
    mensajeDisponibilidad = "Evento agotado";
  }

  const mensaje =
    "ESTADO DE CUPOS - INNOVA ESPE 2026\n\n" +
    "Capacidad total: " + CUPOS_INICIALES + "\n" +
    "Entradas vendidas: " + entradasVendidas + "\n" +
    "Cupos disponibles: " + cuposDisponibles + "\n" +
    "Estado: " + mensajeDisponibilidad;

  alert(mensaje);
  console.log(mensaje);
};

// ===== RF05. Consultar ingresos acumulados =====
const consultarIngresos = () => {
  const promedioPorCompra =
    comprasRealizadas > 0
      ? (ingresosAcumulados / comprasRealizadas).toFixed(2)
      : "0.00";

  const mensaje =
    "REPORTE DE INGRESOS - INNOVA ESPE 2026\n\n" +
    "Compras realizadas: " + comprasRealizadas + "\n" +
    "Entradas vendidas: " + entradasVendidas + "\n" +
    "Ingresos acumulados: $" + ingresosAcumulados.toFixed(2) + "\n" +
    "Promedio por compra: $" + promedioPorCompra;

  alert(mensaje);
  console.log(mensaje);
};

// ===== RF06. Salir del sistema (Resumen final) =====
const mostrarResumenFinal = () => {
  const resumen =
    "CIERRE DEL SISTEMA - INNOVA ESPE 2026\n\n" +
    "Total compras realizadas: " + comprasRealizadas + "\n" +
    "Entradas vendidas: " + entradasVendidas + " de " + CUPOS_INICIALES + "\n" +
    "Cupos disponibles restantes: " + cuposDisponibles + "\n" +
    "Total ingresos recaudados: $" + ingresosAcumulados.toFixed(2) + "\n\n" +
    "Gracias por usar el Sistema Innova ESPE 2026.";

  alert(resumen);
  console.log(resumen);
};

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
        comprarEntradas();
        break;
      case "2":
        consultarCupos();
        break;
      case "3":
        consultarIngresos();
        break;
      case "4":
        mostrarResumenFinal();
        break;
      default:
        alert("Opción no válida. Elija un número del 1 al 4.");
        console.log("Opción de menú inexistente: " + opcion);
    }
  } while (opcion !== "4");

  console.log("Sistema finalizado.");
};