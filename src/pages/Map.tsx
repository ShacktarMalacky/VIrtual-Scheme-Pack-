export default function Map() {
  const nodes = [
    { id: 1, name: 'Nodo Alpha', level: 5, status: 'Controlado' },
    { id: 2, name: 'Nodo Beta', level: 12, status: 'Disputado' },
    { id: 3, name: 'Nodo Gamma', level: 3, status: 'Libre' },
  ];

  return (
    <section className="card">
      <h2>Mapa de la Red</h2>
      <p>Selecciona un nodo para infiltrarte o defender tu territorio.</p>
      <br />
      {nodes.map((node) => (
        <div
          key={node.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 0',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <span>{node.name}</span>
          <span>Nivel {node.level}</span>
          <span>{node.status}</span>
        </div>
      ))}
    </section>
  );
}
