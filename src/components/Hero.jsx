export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">🚀 Transformação Real</div>
        <h1 className="hero-title">
          LAGARTIXA <br />
          <span className="runner-text">
            {/* A imagem agora mora DENTRO do título */}
            <img
              src="/images/icone-lagartixa.png"
              alt="Mascote Lagartixa"
              className="lagartixa-title-icon"
            />
            RUNNER
          </span>
        </h1>
        <p className="hero-subtitle">
          Superando limites, conquistando vitórias e transformando o próprio
          corpo.
        </p>

        {/* Novos blocos de estatísticas para preencher e dar autoridade */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">-25kg</span>
            <span className="stat-label">Eliminados</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Corridas Vencidas</span>
          </div>
        </div>

        <div className="hero-action">
          <a href="#historia" className="btn-cta">
            Conheça a História
          </a>
          <span className="action-hint">Inspire-se para a sua mudança</span>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="image-glow"></div>
        <img
          src="/images/foto-principal.png"
          alt="Evolução do Corredor Lagartixa Runner"
          className="hero-image"
        />
      </div>
    </section>
  );
}
