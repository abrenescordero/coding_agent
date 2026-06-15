import './App.css'

const planets = [
  { name: 'Mercurio', className: 'mercury', distance: 90, duration: 8 },
  { name: 'Venus', className: 'venus', distance: 130, duration: 12 },
  { name: 'Tierra', className: 'earth', distance: 170, duration: 16 },
  { name: 'Marte', className: 'mars', distance: 215, duration: 22 },
  { name: 'Júpiter', className: 'jupiter', distance: 280, duration: 34 },
  { name: 'Saturno', className: 'saturn', distance: 345, duration: 42 },
  { name: 'Urano', className: 'uranus', distance: 405, duration: 50 },
  { name: 'Neptuno', className: 'neptune', distance: 460, duration: 58 },
] as const

function App() {
  return (
    <main className="homepage">
      <header className="intro">
        <h1>Sistema Solar</h1>
        <p>
          Explora los planetas orbitando alrededor del Sol en una animación continua.
        </p>
      </header>

      <section className="solar-system" aria-label="Sistema solar animado">
        <div className="sun" aria-label="Sol" />

        {planets.map((planet) => (
          <div
            key={planet.name}
            className="orbit"
            style={
              {
                '--orbit-size': `${planet.distance * 2}px`,
                '--duration': `${planet.duration}s`,
              } as React.CSSProperties
            }
            aria-hidden="true"
          >
            <span className={`planet ${planet.className}`} />
          </div>
        ))}
      </section>

      <ul className="legend" aria-label="Planetas del sistema solar">
        {planets.map((planet) => (
          <li key={planet.name}>
            <span className={`legend-dot ${planet.className}`} />
            {planet.name}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
