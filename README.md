# Coolify Debug Lab — proyecto de práctica

Proyecto educativo React + Vite con errores intencionales para practicar diagnóstico de despliegues usando GitHub, Dockerfile y Coolify.

> **Aviso:** este repositorio está roto a propósito al comenzar. No uses este proyecto de práctica como una aplicación de producción.

## Qué practicarás

1. Fallo de instalación de dependencias durante la construcción de la imagen.
2. Fallo del comando de build.
3. Aplicación desplegada, pero inaccesible por una discordancia de puerto entre el proceso y Coolify.
4. Error de JavaScript al utilizar una función de diagnóstico.
5. Commits pequeños y nuevos despliegues después de cada reparación.

La guía de soluciones se entrega por separado para que no tengas que verla antes de practicar.

## Archivos importantes

- `Dockerfile`: instalación, construcción y comando que inicia el servidor web.
- `package.json`: scripts y dependencias de Node.js.
- `src/App.jsx`: interfaz y acciones del frontend.
- `src/style.css`: estilos de la página.

## Cómo subirlo a GitHub

1. Descarga y descomprime el ZIP.
2. Crea un repositorio nuevo en GitHub, por ejemplo `coolify-debug-lab`. Para empezar, puede ser público o privado según los permisos que tengas configurados en Coolify.
3. Desde la terminal, entra en la carpeta del proyecto y ejecuta:

```bash
git init
git add .
git commit -m "Añade laboratorio inicial con fallas intencionales"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/coolify-debug-lab.git
git push -u origin main
```

Cambia `TU_USUARIO` por tu usuario real y usa la URL que te entregue GitHub. Si Git ya estaba inicializado, no repitas `git init` ni agregues dos veces el mismo `origin`.

## Cómo crear la aplicación en Coolify

Los nombres exactos de algunas opciones pueden variar según la versión de Coolify.

1. En Coolify, crea o abre un proyecto.
2. Añade una aplicación desde tu fuente GitHub y selecciona este repositorio y la rama `main`.
3. Elige la estrategia de construcción **Dockerfile** y verifica que el directorio base sea `/` y que la ubicación del Dockerfile sea `/Dockerfile`.
4. En la configuración de puertos expuestos (`Ports Exposes`), para el desafío inicial usa `3000`.
5. Asigna un dominio de prueba o usa el mecanismo de URL pública que ya tengas configurado.
6. Ejecuta **Deploy** y abre los **Deployment Logs**.

Coolify necesita que la aplicación escuche en `0.0.0.0` y que el puerto configurado coincida con el puerto en el que escucha el proceso dentro del contenedor. Consulta la documentación oficial: https://coolify.io/docs/applications/builds/dockerfile

## Retos (no mires soluciones todavía)

### Reto 1 — Instalación

El despliegue se detiene antes de compilar la aplicación. Lee la parte inicial de los logs y determina qué condición espera el instalador de dependencias.

**Objetivo:** conseguir que la instalación de dependencias termine correctamente sin saltarte los archivos necesarios del proyecto.

### Reto 2 — Build

Después de corregir el primer problema, el despliegue avanza pero falla cuando intenta construir el frontend.

**Objetivo:** identifica qué comando se ejecuta, reprodúcelo localmente si puedes y corrige la causa.

### Reto 3 — El contenedor corre, pero la URL falla

Después de corregir el build, revisa los logs de ejecución y la configuración `Ports Exposes` de Coolify.

**Objetivo:** determina en qué puerto escucha el proceso y alinea la configuración de Coolify con él, o modifica el comando del servidor para que use el puerto configurado. Recuerda que `EXPOSE` en un Dockerfile no cambia por sí solo el puerto en el que escucha la aplicación.

### Reto 4 — Error al pulsar un botón

Cuando la página ya cargue, pulsa primero **Ejecutar chequeo básico** y luego **Ejecutar chequeo avanzado**. Abre la consola del navegador si la segunda acción falla.

**Objetivo:** identificar la excepción JavaScript, reparar la función ausente y volver a desplegar.

## Flujo de trabajo recomendado

Después de cada reparación:

```bash
git status
git diff
git add .
git commit -m "Corrige reto 1: instalación de dependencias"
git push origin main
```

Cambia el mensaje del commit según el reto. Luego vuelve a Coolify y ejecuta un nuevo despliegue (o espera el despliegue automático si ya lo configuraste). Verifica los logs y prueba la URL antes de pasar al siguiente reto.

## Cómo editar con nano en Ubuntu

```bash
nano Dockerfile
nano package.json
nano src/App.jsx
```

En Nano: `Ctrl+O` guarda, `Enter` confirma el nombre y `Ctrl+X` sale. Después revisa con `git diff` qué cambió.

Si tienes Node.js instalado y acceso a Internet, puedes trabajar localmente desde esta carpeta con `npm install` y luego `npm run build`. No edites los archivos de producción o repositorios importantes mientras practicas; este laboratorio está diseñado para romperse.

## Limpieza y seguridad

- No guardes tokens de GitHub, Cloudflare, contraseñas ni archivos `.env` reales en el repositorio.
- Usa un recurso de prueba en Coolify y una URL de prueba.
- No borres volúmenes ni contenedores de otros proyectos para arreglar este laboratorio.
- Al terminar, puedes detener o eliminar únicamente el recurso de prueba desde Coolify.

## Referencias

- Coolify — aplicaciones y despliegues: https://coolify.io/docs/applications/
- Coolify — Dockerfile: https://coolify.io/docs/applications/builds/dockerfile
- Coolify — redes y puertos: https://coolify.io/docs/core/networking-in-coolify
- Vite — guía oficial: https://vite.dev/guide/
