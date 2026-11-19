# Sistema de Gestión de Entradas - Innova ESPE 2026

## Descripcion
Sistema web interactivo desarrollado en JavaScript nativo y HTML5 para la gestion, control de cupos, calculo de descuentos y registro de ingresos de entradas para el evento Innova ESPE 2026. El proyecto implementa una arquitectura modular basada en funciones flecha y validaciones estrictas de entradas, operando bajo un flujo de trabajo profesional con ramas en Git.

## Requerimientos Funcionales Implementados
- **RF01. Configuracion Inicial:** Definicion de constantes globales de precios, cupos iniciales (50), porcentajes de descuento y limites de compra, junto con las variables de estado del sistema.
- **RF02. Menu Principal:** Interfaz interactiva basada en bucles y estructuras de control (`do...while` y `switch`) utilizando funciones flecha.
- **RF03. Compra de Entradas:** Logica de adquisicion que valida datos del comprador, tipos de participantes (Estudiante, Docente, Publico General), calculo de subtipos, descuentos y control de stock disponible.
- **RF04. Consulta de Cupos:** Modulo para visualizar en tiempo real los cupos vendidos, cupos restantes, porcentaje de ocupacion y estado actual del evento.
- **RF05. Consulta de Ingresos:** Reporte financiero detallado de la recaudacion acumulada, numero de transacciones exitosas y ticket promedio por compra.
- **RF06. Cierre del Sistema:** Resumen ejecutivo final al salir de la aplicacion que consolida las estadisticas totales de la jornada.

## Tecnologias Utilizadas
- HTML5
- JavaScript (ES6+ / Arrow Functions)
- Git y GitHub (Flujo de trabajo con ramas por requerimiento `feature/rfXX` y fusiones en `main`)

## Estructura del Proyecto
```text
SIGSI_DAVID_JS/
│
├── index.html       # Interfaz principal de usuario
├── js/
│   └── app.js       # Logica completa del sistema y funciones flecha
└── README.md        # Documentacion tecnica del proyecto