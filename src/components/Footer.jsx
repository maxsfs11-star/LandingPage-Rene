import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">
            LAGARTIXA<span>RUNNER</span>
          </h2>
          <p>
            Transformando suor em performance. Treinamento personalizado para
            quem busca o próximo nível.
          </p>
          <div className="social-links">
            <a
              href="https://www.instagram.com/renefeliz/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="mailto:contato@lagartixarunner.com.br">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-nav">
          <h3>Navegação</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#planilhas">Planilhas</a>
            </li>
            <li>
              <a href="#galeria">Galeria</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contato Direto</h3>
          <p>Dúvidas sobre os treinos?</p>
          <a href="https://wa.me/1799705-5289" className="footer-wa-link">
            <FaWhatsapp /> Enviar Mensagem
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Lagartixa Runner - Todos os direitos
          reservados.
        </p>
        <p className="dev-signature">
          Desenvolvido por
          <a href="https://wa.me/17992647714" target="_blank">
            <span className="brand-name"> VM Digital</span>
          </a>
        </p>
      </div>
      {/* Botão Flutuante do WhatsApp */}
      <a
        href="https://wa.me/1799705-5289"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}
