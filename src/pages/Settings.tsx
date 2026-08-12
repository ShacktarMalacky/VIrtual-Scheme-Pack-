export default function Settings() {
  return (
    <section className="card">
      <h2>Ajustes</h2>
      <p>Configura tus preferencias de juego y notificaciones.</p>
      <br />
      <div>
        <label>
          <input type="checkbox" defaultChecked /> Notificaciones de ataques
        </label>
      </div>
      <div style={{ marginTop: 8 }}>
        <label>
          <input type="checkbox" defaultChecked /> Modo oscuro
        </label>
      </div>
    </section>
  );
}
