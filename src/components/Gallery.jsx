export default function Gallery() {
  // Aumentei um pouco o array de exemplo para o grid ficar mais preenchido
  const photos = [
    "/images/foto1.jpg",
    "/images/foto2.jpg",
    "/images/foto3.jpg",
    "/images/foto4.jpg",
    "/images/foto5.png",
    "/images/foto6.jpg",
    "/images/foto7.jpg",
    "/images/foto8.jpg",
    "/images/foto9.jpg",
    "/images/foto10.png",
    "/images/foto11.png",
    "/images/foto12.png",
    "/images/foto13.png",
    "/images/foto14.png",
  ];

  return (
    <section className="gallery" id="galeria">
      <div className="gallery-header">
        <span className="section-subtitle">Bastidores</span>
        <h2 className="gallery-title">Galeria de Fotos</h2>
        <p className="gallery-text">
          Registros de treinos, competições e da rotina de quem vive a corrida
          todos os dias.
        </p>
      </div>

      <div className="gallery-grid">
        {photos.map((src, i) => (
          <div className="gallery-item" key={i}>
            <img
              src={src}
              alt={`Momento Lagartixa Runner ${i + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
