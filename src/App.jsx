import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import BeforeAfter from "./components/BeforeAfter";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      {/* Seus outros componentes (Header, Hero, Footer, etc) */}
      <Router>
        <Routes>
           {/* Suas rotas aqui */}
        </Routes>
      </Router>

      {/* Adicione o rastreador aqui no final */}
      <Analytics />
    </>
  );
}

function App() {
  return (
    <>
      <Hero />
      <About />
      <Achievements />
      <BeforeAfter />
      <Courses />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
