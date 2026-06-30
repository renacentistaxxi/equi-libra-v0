# Pipeline de desarrollo

**Estado:** operativo al integrar T-002 y conectar GitHub con Vercel.

## Flujo

1. Cada tarea se implementa en su propia rama y worktree.
2. Al hacer `push`, GitHub Actions ejecuta `npm ci`, `npm run lint` y `npm run build`.
3. Si el repositorio está conectado al proyecto de Vercel, cada rama que no sea la rama
   de producción recibe un Preview Deployment con URL propia.
4. El integrador prueba esa URL y revisa la auditoría antes de fusionar.
5. Solo la fusión a la rama de producción habilita el deployment de producción.

## GitHub Actions

Workflow: `.github/workflows/ci.yml`.

- Se ejecuta en cada `push`, pull request y ejecución manual.
- Usa Node.js 24, compatible con Vite 8.
- Instala exactamente el lockfile con `npm ci`.
- No usa secretos ni accede a Firebase.
- Tiene permisos de solo lectura sobre el repositorio.
- Cancela ejecuciones anteriores de la misma rama cuando llega un commit nuevo.

## Activación de Vercel Preview

Esta parte se configura una sola vez en la interfaz de Vercel; no requiere guardar tokens
de Vercel en GitHub Actions.

1. En Vercel, abrir el proyecto de EQUI-LIBRA.
2. En **Settings > Git**, conectar `renacentistaxxi/equi-libra-v0` si todavía no está
   conectado.
3. Verificar que la rama de producción sea `main`.
4. En **Settings > Environment Variables**, cargar las variables `VITE_FIREBASE_*` con
   alcance **Preview**. Usar un proyecto Firebase de prueba si se necesita aislar datos.
5. Hacer push de una rama y abrir su deployment desde **Deployments** o desde el check
   publicado en el pull request.

No copiar archivos `.env*` al repositorio y no incluir sus valores en logs, commits o
informes.

## Criterio de integración

Una rama está lista para revisión humana cuando:

- CI termina en verde;
- el Preview Deployment abre correctamente;
- la prueba funcional específica de la tarea pasa;
- el informe de cierre y la auditoría no tienen bloqueantes.

La integración y la actualización de `_GOBERNANZA/REGISTRO_IMPLEMENTACION.md` siguen
siendo acciones humanas según `AGENTS.md`.

## Fuentes operativas

- GitHub Actions para Node.js: https://docs.github.com/actions/automating-builds-and-tests/building-and-testing-nodejs
- Vercel Git deployments: https://vercel.com/docs/git
- Vite, requisitos de Node.js: https://vite.dev/guide/
