export default function Missions() {
  const missions = [
    { id: 1, title: 'Infiltrar el servidor corporativo', reward: '500 XP', difficulty: 'Alta' },
    { id: 2, title: 'Recuperar datos del nodo Beta', reward: '250 XP', difficulty: 'Media' },
    { id: 3, title: 'Defender tu nodo del clan rival', reward: '150 XP', difficulty: 'Baja' },
  ];

  return (
    <section className="card">
      <h2>Misiones Activas</h2>
      {missions.map((mission) => (
        <div
          key={mission.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 0',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <span>{mission.title}</span>
          <span>{mission.reward}</span>
          <span>{mission.difficulty}</span>
        </div>
      ))}
    </section>
  );
}
