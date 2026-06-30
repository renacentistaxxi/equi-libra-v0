# INFORME DE CIERRE — T-002 — Pipeline CI y previews

**ID de tarea:** T-002
**Agente:** Codex
**Fecha:** 2026-06-29
**Rama:** `chore/t-002-ci-pipeline`

---

## Archivos modificados

- `.github/workflows/ci.yml` — nuevo workflow de GitHub Actions.
- `docs/PIPELINE_DESARROLLO.md` — guía operativa de CI y Vercel Preview.
- `_GOBERNANZA/TAREAS/T-002_PIPELINE_CI.md` — tarea aprobada.
- `_GOBERNANZA/INFORMES/INFORME_CIERRE_T-002.md` — este cierre.

La rama incorpora además como antecedente el commit T-000 ya aprobado, porque `main`
todavía contiene los dos errores de lint preexistentes de `Login.tsx`. T-002 no introduce
otro cambio de código ni modifica ese commit.

## Correspondencia con la especificación

- V0 personal web/PWA desplegada con Vercel + Firebase — `ALCANCE`, definición inicial
  de la V0.
- Stack React + TypeScript + Vite + Firebase + Vercel — `ESPECIFICACION`, sección 8.
- Build y lint obligatorios — `AGENTS.md`, sección 6.

El pipeline no agrega funcionalidad de producto ni modifica `00_ACTIVO/`.

## Resultado de build

```text
npm run build
→ bloqueado por el sandbox local: spawn EPERM al cargar vite.config.ts.

npm run build -- --configLoader native
→ ok: TypeScript y build de producción completados.
→ warning no bloqueante: chunk principal > 500 kB (preexistente).
```

El argumento alternativo cambia solo el mecanismo con que Vite carga su configuración.
El workflow remoto usa `npm run build` normal en `ubuntu-latest`, donde no existe la
restricción de procesos del sandbox local.

## Resultado de lint

```text
npm run lint → ok, sin errores ni warnings.
```

## Pruebas locales realizadas (sin red)

- `git diff --check` — sin errores de whitespace.
- Revisión estática del workflow:
  - eventos `push`, `pull_request` y `workflow_dispatch`;
  - permisos `contents: read`;
  - concurrencia con cancelación por rama;
  - Node.js 24 y caché npm;
  - `npm ci`, lint y build en pasos separados;
  - ningún secreto o valor Firebase embebido.
- Lint completo del repositorio.
- Compilación TypeScript y bundle de producción.

## Protocolo de prueba para el integrador (pruebas con red)

### P1 — GitHub Actions

1. Publicar `chore/t-002-ci-pipeline` en GitHub.
2. Abrir la pestaña **Actions** del repositorio.
3. Esperar el workflow **CI / Lint and build**.
4. Resultado esperado: `Install dependencies`, `Lint` y `Build` terminan en verde.

### P2 — Vercel Preview

1. Confirmar en Vercel **Settings > Git** que el repositorio está conectado y `main` es
   la rama de producción.
2. Confirmar que las variables `VITE_FIREBASE_*` existen con alcance **Preview**, sin
   copiar sus valores a Git o al informe.
3. Abrir el deployment generado para `chore/t-002-ci-pipeline`.
4. Resultado esperado: existe una URL Preview, la app carga y el login llega a Firebase.
5. Confirmar que el dominio de producción no cambió.

### P3 — Reutilización por una feature

Después de integrar T-002, publicar una rama de funcionalidad.

Resultado esperado: el push inicia CI y Vercel Preview sin copiar `.env.local`, instalar
herramientas manualmente ni desplegar a producción.

## Supuestos tomados

- GitHub es el remoto oficial (`origin`).
- `main` será la rama de producción en Vercel.
- La integración Git de Vercel se usa en lugar de agregar tokens Vercel al workflow.
- Node.js 24 satisface el requisito de Vite 8 (Node 20.19+ o 22.12+).

## Omisiones y riesgos

- El agente no publicó la rama ni activó GitHub Actions/Vercel; lo prohíbe `AGENTS.md`.
- No existe suite de tests automatizados en `package.json`; el pipeline ejecuta las dos
  verificaciones disponibles: lint y build.
- El build no valida credenciales Firebase. La carga y el login deben comprobarse en la
  Preview con variables de alcance Preview.
- Si Vercel no está conectado al repositorio, P2 requiere configuración humana inicial.

## Decisiones de producto pendientes

Ninguna.

## Diff para revisar

```text
git -C C:/Users/renac/OneDrive/Escritorio/equi-libra-v0/.vercel/worktrees/t002 diff 0e62b66
```

No hay integración automática a `main`.
