export default function BeforeAfter() {
  // A variável é declarada aqui...
  const transformacoes = [
    {
      id: 1,
      antes: "/images/antes-5.jpg",
      depois: "/images/depois-1.jpg",
      descricao: "De uma vida sedentária para a alta performance nas pistas",
    },
    {
      id: 2,
      antes: "/images/antes-2.jpg",
      depois: "/images/depois-2.jpg",
      descricao: "Transformação real: disciplina que molda o corpo e a postura",
    },
    {
      id: 3,
      antes: "/images/antes-4.jpg",
      depois: "/images/depois-5.png",
      descricao: "O resultado de não desistir: cruzando linhas de chegada",
    },
    {
      id: 4,
      antes: "/images/antes-5.jpg", // Foto de perfil (bermuda de flamingo)
      depois: "/images/corredor2.jpg", // Chegada na corrida noturna de braços abertos
      descricao: "O resultado de não desistir: cruzando linhas de chegada",
    },
  ];

  return (
    <section className="transformation" id="evolucao">
      <div className="transformation-header">
        <span className="section-subtitle">A Evolução</span>
        <h2 className="transformation-title">O Processo em Foco</h2>
        <p className="transformation-text">
          A mudança não acontece do dia para a noite. É resultado de suor,
          resiliência e a decisão de nunca mais voltar a ser quem eu era.
        </p>
      </div>

      <div className="transformation-grid">
        {/* ... e é OBRIGATORIAMENTE usada aqui dentro do map! */}
        {transformacoes.map((item) => (
          <div className="transform-card" key={item.id}>
            <div className="transform-images">
              <div className="image-container">
                <span className="image-tag tag-antes">Antes</span>
                <img src={item.antes} alt="Lagartixa Runner Antes" />
              </div>

              <div className="image-container">
                <span className="image-tag tag-depois">Depois</span>
                <img src={item.depois} alt="Lagartixa Runner Depois" />
              </div>
            </div>

            <div className="transform-footer">
              <p>{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
