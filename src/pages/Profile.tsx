export default function Profile() {
  return (
    <section className="card">
      <h2>Perfil del Hacker</h2>
      <p>
        Inicia sesión para ver tu perfil, estadísticas, XP acumulada y rango en
        la Red Oscura.
      </p>
      <br />
      <ul style={{ listStyle: 'none' }}>
        <li>Rango: Anónimo</li>
        <li>XP: 0</li>
        <li>Nodos controlados: 0</li>
      </ul>
    </section>
  );
}
