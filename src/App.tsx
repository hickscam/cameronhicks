import './App.css'

const RESEARCH_AREAS = [
  {
    title: 'Renewable Energy & Grid Integration',
    description: 'Policy and market design for wind, solar, and storage; transmission planning and regional coordination.',
  },
  {
    title: 'Decarbonization & Climate Targets',
    description: 'Pathways to net-zero, sectoral strategies, and alignment with international climate agreements.',
  },
  {
    title: 'Energy Justice & Equity',
    description: 'Access, affordability, and community impact of energy transitions and infrastructure siting.',
  },
  {
    title: 'Regulation & Market Design',
    description: 'Wholesale and retail electricity markets, carbon pricing, and regulatory innovation.',
  },
]

const RESOURCES = [
  { title: 'State Clean Energy Dashboard', type: 'Data & tools', year: '2024' },
  { title: 'Federal Energy Policy Tracker', type: 'Brief', year: '2024' },
  { title: 'Renewable Portfolio Standards: A Survey', type: 'Report', year: '2023' },
  { title: 'Equity in Utility Program Design', type: 'Working paper', year: '2023' },
]

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <h1 className="site-title">
            <a href="#top">Energy Policy Research</a>
          </h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#research">Research</a></li>
              <li><a href="#resources">Resources</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className="hero">
          <div className="container">
            <span className="hero-tag">Research & Analysis</span>
            <h1>Energy Policy Research</h1>
            <p>
              Evidence-based analysis of electricity markets, decarbonization pathways,
              and the policy tools that shape the transition to a clean energy system.
            </p>
          </div>
        </section>

        <section id="research">
          <div className="container">
            <h2>Research Areas</h2>
            <div className="research-grid">
              {RESEARCH_AREAS.map((area) => (
                <article key={area.title} className="research-card">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="resources">
          <div className="container">
            <h2>Publications & Resources</h2>
            <ul className="resources-list">
              {RESOURCES.map((item) => (
                <li key={item.title}>
                  <a href="#">{item.title}</a>
                  <span className="meta">{item.type} · {item.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <h2>About</h2>
            <p style={{ maxWidth: '42rem', color: 'var(--text-muted)' }}>
              This site hosts research and policy analysis on energy and climate,
              with a focus on electricity markets, regulation, and equitable outcomes.
              Work is intended for policymakers, advocates, and researchers.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            Energy Policy Research · Static site built with React & TypeScript
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
