# ESPECIFICACION_FUNCIONAL_V0_PERSONAL_EQUILIBRA.md

**Versión:** v1.1  
**Fecha:** 2026-06-13  
**Estado:** aprobado — listo para construcción  
**Propósito:** puente entre alcance y primer componente funcional

---

## 1. Vistas necesarias (4)

### Vista 1 — Hoy (pantalla principal)
Aparece al abrir la app.

Secciones en orden:
- Campo de captura rápida (texto libre, siempre visible arriba).
- Inbox: capturas sin aclarar, ordenadas por fecha de entrada.
- Próximos pasos: ítems con estado "próximo" o "activo" que tienen próximo paso definido.
- Revisión pendiente: ítems con fecha de revisión vencida o en las próximas 48 horas.
- Últimos registros: los 3 últimos de salud y los 3 últimos de finanzas (compactos, solo fecha + resumen).

### Vista 2 — Clarificar (bandeja de conversión)
Aparece al tocar una captura del inbox.

Muestra:
- Texto original de la captura (siempre visible, no editable desde aquí).
- Formulario mínimo de clarificación:
  - Título (pre-llenado con el texto original, editable).
  - Tipo (selector: tarea, proyecto, hábito, proceso, decisión, idea, lectura, conversación, tema en observación).
  - Plano (selector: los 13 planos, ver sección 3).
  - Estado (selector simplificado: activo, próximo, esperando, pausa — inbox y revisar se manejan solos).
  - Próximo paso (campo texto, obligatorio si estado es activo o próximo).
  - Fecha de revisión (opcional, date picker).
- Botones: Guardar como ítem / Archivar / Registrar como salud / Registrar como finanza.

### Vista 3 — Planos (organización)
Lista todos los planos con sus ítems activos y pausados.

Muestra por plano:
- Cantidad de ítems activos.
- Los próximos pasos pendientes.
- Un botón para ver todos los ítems del plano.

Al abrir un plano:
- Ítems agrupados por estado: activo → próximo → esperando → pausa.
- Cada ítem muestra: título, estado, próximo paso, fecha de revisión.
- Tocar un ítem abre su ficha completa para editar.

### Vista 4 — Registros (salud y finanzas)
Lista cronológica de registros de salud y finanzas.

Filtros: Todos / Salud / Finanzas.

Cada registro muestra: fecha, tipo, texto original, resumen estructurado.
Tocar abre para ver detalle o editar.

---

## 2. Acciones principales por vista

| Vista | Acción principal |
|-------|-----------------|
| Hoy | Capturar texto libre → va al inbox |
| Hoy | Tocar ítem del inbox → abre Clarificar |
| Hoy | Tocar próximo paso → marcar como hecho o posponer |
| Clarificar | Guardar como ítem personal |
| Clarificar | Registrar como salud (manual en primera implementación; parser después) |
| Clarificar | Registrar como finanza (manual en primera implementación; parser después) |
| Clarificar | Archivar sin acción |
| Planos | Ver ítems por plano |
| Planos | Editar ficha de ítem |
| Planos | Cambiar estado de ítem |
| Registros | Ver historial |
| Registros | Editar registro |

---

## 3. Planos iniciales (13, editables)

1. Profesional
2. Vincular
3. Existencial
4. Personal / hábitos
5. Intelectual personal
6. Mascotas
7. Alimentación
8. Skincare
9. Entrenamientos
10. Lecturas
11. Salud general
12. Finanzas
13. EQUI-LIBRA / proyectos IA

---

## 4. Campos mínimos por tipo de ítem personal

Todos los ítems comparten esta ficha:

| Campo | Tipo | Obligatorio |
|-------|------|-------------|
| Título | texto | sí |
| Plano | selector | sí |
| Tipo | selector | sí |
| Estado | selector | sí |
| Próximo paso | texto | si estado es activo o próximo |
| Resultado deseado | texto | no |
| Fecha de revisión | fecha | no |
| Cadencia | selector | no |
| Notas | texto largo | no |
| Origen | texto | no (se pre-llena con "captura") |
| Condición de reactivación | texto | no (solo visible si estado es pausa) |
| Texto original | texto | sí (se guarda siempre, no editable) |

**Tipos:** tarea, proyecto, hábito, proceso, decisión, idea, lectura, conversación, tema en observación.

**Estados:** inbox, activo, próximo, esperando, pausa, revisar, archivo.

**Cadencia:** única, diaria, semanal, mensual, eventual, sin cadencia.

---

## 5. Campos mínimos de salud básica

Un registro de salud puede tener uno o más de estos campos. Ninguno es obligatorio excepto la fecha.

| Campo | Tipo |
|-------|------|
| Fecha | fecha (default hoy) |
| Texto original | texto (obligatorio, se guarda siempre) |
| Comida | texto libre |
| Sueño | duración estimada + calidad subjetiva (bien / regular / mal) |
| Ánimo | escala simple (1-5) + nota opcional |
| Movimiento | tipo + duración estimada en minutos |
| Agua | valoración simple (poca / normal / mucha) o litros estimados |
| Notas | texto libre |

El parser de salud (adaptado de salud-tracker) pre-llena los campos y el usuario confirma antes de guardar. **En la primera implementación, salud puede cargarse manualmente desde la captura. El parser se integra después de que el flujo captura → clarificación → guardado ya funcione.**

Lo que **no** entra: nutrición detallada, macros, micronutrientes, calorías, suplementos, laboratorio, grasa corporal.

---

## 6. Campos mínimos de finanzas básicas

| Campo | Tipo |
|-------|------|
| Fecha | fecha (default hoy) |
| Texto original | texto (obligatorio, se guarda siempre) |
| Tipo | gasto / ingreso / transferencia |
| Monto | número |
| Moneda | ARS (default) / USD |
| Categoría | selector básico (ver abajo) |
| Comercio / contraparte | texto libre opcional |
| Nota | texto libre opcional |

**Categorías básicas (10):** Comida y bebida / Transporte / Servicios / Salud / Ropa / Entretenimiento / Trabajo / Transferencia personal / Ingreso / Otro.

El parser financiero (adaptado de GastoVoz) pre-llena los campos y el usuario confirma antes de guardar. Soporta múltiples movimientos en una misma captura. **En la primera implementación, finanzas puede cargarse manualmente. El parser se integra después de que el flujo base funcione.**

Lo que **no** entra: 18 categorías completas de GastoVoz, subcategorías, completitud dual avanzada, dashboard financiero, balance mensual, ahorro/inversión como módulo.

---

## 7. Flujo completo: captura → clarificación → organización → revisión

```
CAPTURA
↓
El usuario escribe texto libre en el campo de captura (Vista Hoy).
El texto entra al inbox con estado "inbox" y se guarda el texto original.
↓
CLARIFICACIÓN (manual, no automática en V0)
↓
El usuario toca una captura del inbox.
Decide qué es:
  → Ítem personal: completa ficha mínima. Guarda. Sale del inbox.
  → Registro de salud: parser pre-llena campos. Usuario confirma. Sale del inbox.
  → Registro de finanzas: parser pre-llena campos. Usuario confirma. Sale del inbox.
  → Archivar: guarda con estado "archivo". Sale del inbox.
↓
ORGANIZACIÓN
↓
Los ítems clarificados viven en sus planos con estado visible.
Los ítems con próximo paso aparecen en Vista Hoy.
Los ítems con revisión vencida aparecen en Vista Hoy.
↓
REVISIÓN
↓
El usuario abre Vista Hoy cada mañana.
Ve qué tiene próximo paso para hoy.
Ve qué tiene revisión vencida.
Puede cambiar estado, actualizar próximo paso, archivar o posponer revisión.
```

---

## 8. Qué se reutiliza de salud-tracker

**Se toma como referencia técnica prioritaria (no se copia directamente):**
- Arquitectura: React + TypeScript + Vite + Firebase Auth + Firestore + Vercel.
- Proxy serverless `/api/claude.ts` para llamadas a Claude API (sin exponer key).
- Reglas de Firestore por usuario.
- Estructura de colecciones: `users/{uid}/entries` (se renombra a `users/{uid}/health_entries`).
- Lógica de certeza del parser (alta / media / baja).
- Campos de salud básica: comida, sueño, ánimo, movimiento, agua.
- Errores conocidos y sus soluciones (TS6133, TS2367, variables de entorno Vercel, localStorage → Firestore).

**No se migra:**
- Micronutrientes, macros, calorías, suplementos.
- Calculadora de grasa corporal.
- Alimentos personalizados.
- Apple Health sync.

---

## 9. Qué se reutiliza de GastoVoz

**Se adapta directamente:**
- Parser de montos argentinos (formatos "mil", "lucas", puntos y comas).
- Tipos de movimiento: gasto, ingreso, transferencia.
- Split de múltiples movimientos en una captura.
- Regla: solo preguntar si cambia el valor analítico del dato.
- Principio: capa de dominio pura TypeScript, sin acoplar al framework.

**No se migra:**
- Taxonomía completa de 18 categorías.
- Completitud dual avanzada.
- Dashboard financiero.
- localStorage como persistencia (se usa Firestore desde el inicio).

---

## 10. Qué se construye desde cero

- Sistema de planos de vida.
- Ficha de ítem personal (captura, tipo, estado, próximo paso, revisión).
- Vista Hoy (pantalla principal con inbox + próximos pasos + revisión pendiente).
- Vista Planos (organización por zona de vida).
- Flujo de clarificación (conversión de captura en ítem o registro).
- Colecciones Firestore nuevas: `users/{uid}/items`, `users/{uid}/captures`, `users/{uid}/finance_entries`.

---

## 11. Decisiones que este documento cierra

1. Cuatro vistas, no más: Hoy, Clarificar, Planos, Registros.
2. Captura siempre es texto libre. No voz en V0 inicial (puede agregarse después).
3. Clarificación siempre manual. Parser solo para salud y finanzas, no para sistema personal.
4. Confirmación antes de guardar cualquier registro de salud o finanzas.
5. Texto original siempre se conserva.
6. Firestore desde el inicio, no localStorage.
7. Uso personal inicial de Adrián, pero con estructura Firestore por usuario desde el inicio.
8. Planos editables pero los 13 iniciales son el default.

---

## 12. Próximo paso una vez aprobado este documento

Crear el repo `renacentistaxxi/equi-libra-v0` en GitHub y construir el primer componente funcional: la bandeja de captura (campo de texto → guardar en Firestore → aparecer en inbox de Vista Hoy).

Eso es un bloque de lunes de 2-3 horas.
