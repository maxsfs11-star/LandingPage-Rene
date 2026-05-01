export default function Courses() {
  // Adicionei algumas propriedades para enriquecer o visual de vendas
  const courses = [
    {
      title: "Treinamento para 5K",
      desc: "O plano completo para tirar você do sedentarismo e cruzar sua primeira linha de chegada com segurança.",
      level: "Iniciante",
      price: "R$ 97,00",
    },
    {
      title: "Alta Performance",
      desc: "Planilhas avançadas, treinos intervalados e estratégias de fortalecimento para baixar o seu Pace.",
      level: "Avançado",
      price: "R$ 197,00",
    },
  ];

  return (
    // Adicionei o ID para âncoras funcionarem
    <section className="courses" id="cursos">
      <div className="courses-header">
        <span className="section-subtitle">Aprenda Comigo</span>
        <h2 className="courses-title">Planilhas de Treino</h2>
        <p className="courses-text">
          Dê o próximo passo na sua evolução. Escolha o plano ideal para o seu
          objetivo e venha treinar comigo.
        </p>
      </div>

      <div className="courses-grid">
        {courses.map((c, i) => (
          <div className="course-card" key={i}>
            <div className="course-badge">{c.level}</div>
            <h3 className="course-name">{c.title}</h3>
            <p className="course-desc">{c.desc}</p>

            <div className="course-footer">
              <span className="course-price">{c.price}</span>
              <button className="btn-buy">Inscrever-se</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
