export default function Inventory() {
  const items = [
    { id: 1, name: 'Exploit Zero-Day', type: 'Arma digital', qty: 1 },
    { id: 2, name: 'Decryptor Avanzado', type: 'Herramienta', qty: 3 },
    { id: 3, name: 'Firewall Personal', type: 'Defensa', qty: 2 },
  ];

  return (
    <section className="card">
      <h2>Inventario</h2>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 0',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <span>{item.name}</span>
          <span>{item.type}</span>
          <span>x{item.qty}</span>
        </div>
      ))}
    </section>
  );
}
