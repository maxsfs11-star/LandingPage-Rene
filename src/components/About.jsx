import { useEffect, useRef, useState } from 'react';

export default function About() {
  // Criamos um estado para saber se a seção está visível
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se 30% da seção aparecer na tela, ativamos a animação
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconecta para animar apenas na primeira vez
        }
      },
      { threshold: 0.3 } 
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    // Colocamos o ref aqui e aplicamos uma classe dinâmica baseada no estado
    <section 
      className={`about ${isVisible ? 'animate-about' : ''}`} 
      id="historia" 
      ref={aboutRef}
    >
      <div className="about-image-wrapper">
        <div className="about-image-decoration"></div>
        <img
          src="/images/corredor2.png"
          alt="História do atleta Lagartixa Runner"
          className="about-image"
        />
      </div>

      <div className="about-content">
        <span className="section-subtitle">O Início de Tudo</span>
        <h2 className="about-title">Minha História</h2>

        <p className="about-text">
          Desde os primeiros passos nas pistas até as competições mais
          desafiadoras, minha jornada no atletismo sempre foi guiada pela
          disciplina, foco e paixão por superar limites. Cada treino, cada
          corrida e cada conquista moldaram quem eu sou hoje.
        </p>

        <blockquote className="about-quote">
          "A verdadeira vitória está na constância e na evolução diária."
        </blockquote>

        <p className="about-text">
          Meu objetivo é inspirar outras pessoas a acreditarem no próprio
          potencial. Não importa como você começa, mas sim a determinação 
          de dar um passo à frente todos os dias.
        </p>
      </div>
    </section>
  );
}