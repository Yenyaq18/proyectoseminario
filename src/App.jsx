import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    curso: '',
  })

  const [enviado, setEnviado] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setEnviado(true)
  }

  return (
    <main className="page">
      <section className="decor" aria-hidden="true">
        <div className="blob blob-one"></div>
        <div className="blob blob-two"></div>
      </section>

      <section className="form-card">
        <header className="card-header">
          <p className="eyebrow">+ 2026</p>
          <h1>Formulario de inscripción</h1>
          <p className="subtitle">Por favor, ingrese los datos requeridos para la inscripción.</p>
        </header>

        <form className="alumno-form" onSubmit={handleSubmit}>
          <div className="field-grid">
            <label>
              Nombre completo
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Sofia"
                required
              />
            </label>

            <label>
              Curso / Grado
              <input
                type="text"
                name="curso"
                value={formData.curso}
                onChange={handleChange}
                placeholder="Ej. 5to A"
                required
              />
            </label>
          </div>


          <button type="submit">Registrar</button>
        </form>

        {enviado && (
          <p className="success" role="status">
            Registro completado: {formData.nombre}
          </p>
        )}

        <aside className="preview" aria-live="polite">
          <h2>Resumen</h2>
          <div className="preview-line">
            <strong>{formData.nombre || 'Nombre'}</strong>
            <span className="dot">•</span>
            <span>{formData.curso || 'Curso'}</span>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default App
