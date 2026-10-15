import { useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('La aplicación está cargada.');

  function runBasicCheck() {
    setMessage('Chequeo básico completado: el frontend responde.');
  }

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="brand-mark">CD</div>
        <div>
          <p className="eyebrow">LABORATORIO DE DESPLIEGUE</p>
          <h1>Coolify Debug Lab</h1>
        </div>
        <span className="status-pill"><span className="status-dot" /> Interfaz cargada</span>
      </header>

      <section className="hero panel">
        <p className="eyebrow">MISIÓN</p>
        <h2>Encuentra y corrige las fallas</h2>
        <p className="hero-copy">
          Este proyecto tiene problemas intencionales en distintas capas del despliegue.
          Usa Coolify, los logs de Docker y las herramientas del navegador para investigar
          cada síntoma antes de hacer cambios.
        </p>
        <div className="tag-row">
          <span className="tag">GitHub</span>
          <span className="tag">Dockerfile</span>
          <span className="tag">Build</span>
          <span className="tag">Puertos</span>
          <span className="tag">Runtime</span>
        </div>
      </section>

      <section className="cards-grid">
        <article className="panel lab-card">
          <div className="card-icon">01</div>
          <h3>Despliegue</h3>
          <p>¿Puede Coolify instalar las dependencias y construir la imagen?</p>
          <span className="mini-label">Revisa: Deployment Logs</span>
        </article>
        <article className="panel lab-card">
          <div className="card-icon">02</div>
          <h3>Conectividad</h3>
          <p>¿El proxy puede comunicarse con el puerto donde escucha la aplicación?</p>
          <span className="mini-label">Revisa: Ports Exposes</span>
        </article>
        <article className="panel lab-card">
          <div className="card-icon">03</div>
          <h3>Ejecución</h3>
          <p>¿Todas las interacciones del frontend funcionan después de cargar la página?</p>
          <span className="mini-label">Revisa: consola del navegador</span>
        </article>
      </section>

      <section className="panel test-panel">
        <div>
          <p className="eyebrow">PRUEBAS DEL FRONTEND</p>
          <h2>Panel de diagnóstico</h2>
          <p className="message" role="status">{message}</p>
        </div>
        <div className="button-row">
          <button className="button button-secondary" onClick={runBasicCheck}>
            Ejecutar chequeo básico
          </button>
          <button className="button button-primary" onClick={() => runDeepDiagnostics()}>
            Ejecutar chequeo avanzado
          </button>
        </div>
        <p className="helper-text">
          Consejo: abre las herramientas de desarrollador del navegador y revisa la pestaña
          Console si un botón no hace lo esperado.
        </p>
      </section>

      <section className="panel rubric-panel">
        <h2>Registro de investigación</h2>
        <ol>
          <li>Reproduce el problema y anota el síntoma.</li>
          <li>Identifica la capa que falla antes de modificar archivos.</li>
          <li>Realiza un cambio, confirma el resultado y vuelve a desplegar.</li>
          <li>Guarda cada reparación con un commit en GitHub.</li>
        </ol>
      </section>

      <footer>
        <span>Tu Nombre · {new Date().getFullYear()} · Nombre del ramo</span>
        <span>Proyecto educativo para practicar Coolify</span>
      </footer>
    </main>
  );
}
