# TAREA APROBADA — Pipeline CI y previews de desarrollo

> Una tarea por ejecución (ver `AGENTS.md`, sección 3).

**ID de tarea:** T-002
**Fecha de aprobación:** 2026-06-29
**Aprobada por:** Adrián, mediante la instrucción explícita «Procede» en sesión.
**Agente asignado:** Codex
**Rama:** `chore/t-002-ci-pipeline`
**Worktree:** `C:/Users/renac/OneDrive/Escritorio/equi-libra-v0/.vercel/worktrees/t002`

---

## Objetivo

Automatizar las verificaciones repetibles de cada desarrollo y dejar definido el camino
de rama a Preview Deployment, sin desplegar ni modificar servicios externos desde esta
ejecución.

## Justificación en la especificación

- V0 personal desplegada con Vercel + Firebase — `ALCANCE`, introducción, definición de
  la V0 web/PWA.
- Stack React + TypeScript + Vite + Firebase + Vercel — `ESPECIFICACION`, sección 8.
- Build y lint obligatorios — `AGENTS.md`, sección 6.

La tarea no agrega funcionalidad de producto ni altera el alcance de `00_ACTIVO/`.

## Criterios de aceptación

- [ ] Existe un workflow de GitHub Actions para `push`, pull request y ejecución manual.
- [ ] El workflow usa instalación reproducible (`npm ci`) y ejecuta lint y build.
- [ ] El workflow tiene permisos mínimos y no requiere secretos Firebase/Vercel.
- [ ] Las ejecuciones obsoletas de una misma rama se cancelan automáticamente.
- [ ] Existe una guía breve para activar y probar Preview Deployments de Vercel.
- [ ] La guía exige variables `VITE_FIREBASE_*` con alcance Preview y prohíbe versionar
      `.env*`.
- [ ] `npm run lint` y `npm run build` terminan en verde localmente.

## Archivos permitidos

- `.github/workflows/ci.yml` — nuevo.
- `docs/PIPELINE_DESARROLLO.md` — nuevo.
- `_GOBERNANZA/TAREAS/T-002_PIPELINE_CI.md` — nuevo.
- `_GOBERNANZA/INFORMES/INFORME_CIERRE_T-002.md` — nuevo.
- `_GOBERNANZA/REANUDAR_PROXIMA_SESION.md` — nuevo; agregado por aprobación explícita
  de Adrián en sesión 2026-06-29.

## Fuera de alcance de esta tarea

- Push, pull request, merge o cambios en `main`.
- Conectar efectivamente GitHub con Vercel o crear deployments.
- Leer o configurar secretos y variables de entorno.
- Modificar Firebase, sus reglas o sus datos.
- Agregar dependencias o implementar tests de producto inexistentes.
- Modificar código de la aplicación.

## Acciones prohibidas (recordatorio)

Sin merge, deploy, cambios en Firebase/reglas, secretos, borrado de archivos ni
instalación de dependencias (ver `AGENTS.md`, sección 4).

## Decisiones de producto que deben estar resueltas antes de empezar

Ninguna. Se conserva el stack y el alcance aprobados en `00_ACTIVO/`.
