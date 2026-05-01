import { useRef, useState } from "react";

// 1. Array de dados para manter o código limpo
const conquistasData = [
  { icon: "🏆", title: "1º Lugar", desc: "Corrida de Rua 10km — 2023" },
  { icon: "🥇", title: "Melhor Tempo", desc: "5km — 18:42" },
  { icon: "🥈", title: "2º Lugar", desc: "Meia Maratona — 2024" },
  { icon: "🔥", title: "Recorde Pessoal", desc: "21km — 1:29:10" },
  { icon: "🏃‍♂️", title: "Top 10 Geral", desc: "Corrida de Rua 15km — 2024" },
  { icon: "⏱️", title: "Recorde Pessoal", desc: "10km — 38:12" },
  { icon: "🥇", title: "Campeão da Categoria", desc: "Prova de 5km — 2023" },
  { icon: "🔥", title: "Melhor Pace", desc: "Pace médio — 4:05 min/km" },
  {
    icon: "🏅",
    title: "Participação Especial",
    desc: "Meia Maratona Int. — 2024",
  },
  {
    icon: "💪",
    title: "Desafio Concluído",
    desc: "30 dias de treinos consecutivos",
  },
];

// 2. Subcomponente isolado para gerenciar o estado 3D de CADA card
function AchievementCard({ icon, title, desc }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / 15) * -1;
    const rotateY = (x - rect.width / 2) / 15;

    // Atualiza o CSS inline dinamicamente
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      transition: "transform 0.1s ease-out",
      "--mx": `${x}px`,
      "--my": `${y}px`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.6s cubic-bezier(.175, .885, .32, 1.275)",
    });
  };

  return (
    <div
      className="achievement-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <span className="achievement-icon">{icon}</span>
      <h3 className="achievement-card-title">{title}</h3>
      <p className="achievement-card-desc">{desc}</p>
    </div>
  );
}

// 3. Componente Principal
export default function Achievements() {
  return (
    <section className="achievements" id="conquistas">
      <h2 className="achievements-title">Conquistas</h2>

      <div className="achievements-grid">
        {conquistasData.map((item, index) => (
          <AchievementCard
            key={index}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
}
