# TAREA APROBADA — Clarificar (corte vertical) + Próximos pasos mínimo

> Una tarea por ejecución (ver `AGENTS.md`, sección 3).
> Sin tarea aprobada con esta plantilla, un agente de background no debe empezar.

**ID de tarea:** T-001
**Fecha de aprobación:** 2026-06-28
**Aprobada por:** Adrián (revisada con Codex)
**Agente asignado:** Claude Code (ejecuta). Codex audita el resultado.
**Rama:** `feature/t-001-clarificar`
**Worktree:** propio de la ejecución (no compartir checkout)

---

## Objetivo

Cerrar el lazo **capturar → clarificar → ver**: tocar una captura del Inbox abre una
vista Clarificar que la convierte en un ítem personal; los ítems en estado `activo` o
`próximo` aparecen en una sección "Próximos pasos" en Hoy.

## Justificación en la especificación

- Vista Clarificar — `ESPECIFICACION_FUNCIONAL`, sección 1, **Vista 2**.
- Sección "Próximos pasos" en Hoy — `ESPECIFICACION_FUNCIONAL`, sección 1, **Vista 1**.
- Campos del ítem — `ESPECIFICACION_FUNCIONAL`, sección 4.
- Colección `users/{uid}/items` — `ESPECIFICACION_FUNCIONAL`, sección 10.

## Criterios de aceptación

- [ ] Tocar una captura del Inbox abre la vista Clarificar.
- [ ] La vista Clarificar muestra el texto original (no editable desde ahí) y el formulario:
      Título (pre-llenado, editable), Tipo (9 tipos), Plano (13 planos),
      Estado (**solo `activo`/`próximo`** en este corte), Próximo paso, Fecha de revisión (opcional).
- [ ] `Próximo paso` es **obligatorio** (ambos estados de este corte lo requieren); el guardado se bloquea si falta.
- [ ] "Guardar como ítem" crea un documento en `users/{uid}/items` con los campos del
      formulario + `textoOriginal`, `origen: "captura"`, `capturaId`.
- [ ] La conversión es **atómica** (un solo `writeBatch`): crea el ítem y marca la captura
      como clarificada + la vincula (`itemId`) en la misma operación. Sin estados parciales.
- [ ] La captura **conserva su texto original**, **sale del Inbox** y queda **vinculada** al ítem.
- [ ] Los ítems en estado `activo` o `próximo` aparecen en "Próximos pasos" en Hoy
      (título + próximo paso, como mínimo).
- [ ] Se quitan los mensajes diagnósticos visibles ("Persistido en servidor.",
      "Lectura confirmada desde servidor.", "Consultando servidor...") **conservando**
      el manejo de carga y de errores.
- [ ] `build` y `lint` en verde.

## Archivos permitidos

- `src/pages/Home.tsx` — Inbox clickeable, sección "Próximos pasos", quitar diagnósticos.
- `src/pages/Clarificar.tsx` — **nuevo**, vista/formulario de conversión.
- `src/domain.ts` — **nuevo**, constantes (planos, tipos, estados) y tipos.
- `src/App.tsx` — solo quitar el `console.log` de montaje, si conviene.

## Fuera de alcance de esta tarea

- Botones "Archivar", "Registrar como salud", "Registrar como finanza" de la Vista 2
  (son funcionalidades separadas, tareas futuras).
- Estados `esperando` y `pausa`: **se incorporan junto con una vista que permita
  recuperarlos** (tarea futura), para no crear ítems invisibles.
- Vista Planos, Vista Registros, edición de ítems, revisiones/posponer.
- Salud, finanzas y parser.
- Reglas de Firestore (se asume regla por usuario existente; si falta, se detiene y avisa).

## Acciones prohibidas (recordatorio)

Sin merge, deploy, cambios en Firebase/reglas, secretos, borrado de archivos ni
instalación de dependencias (ver `AGENTS.md`, sección 4).

## Decisiones de producto que deben estar resueltas antes de empezar

Ninguna abierta bloquea esta tarea. La espec ya cerró colecciones, categorías de finanzas
y campos de salud (ver `REGISTRO_IMPLEMENTACION.md`), y nada de eso toca la conversión a ítem.

## Nota de verificación (por la regla "sin red", `AGENTS.md` sección 6)

La persistencia real en Firestore (escritura atómica, captura fuera del Inbox, ítem en
"Próximos pasos") requiere red y la valida el **integrador humano**. El agente entrega el
**protocolo de prueba** en el informe de cierre, no la declara realizada.
