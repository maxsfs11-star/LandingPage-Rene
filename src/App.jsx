import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import BeforeAfter from "./components/BeforeAfter";
// 1. Importação do Analytics
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      {/* Seus componentes na ordem correta */}
      <Hero />
      <About />
      <Achievements />
      <BeforeAfter />
      <Courses />
      <Gallery />
      <Footer />

      {/* 2. O rastreador fica aqui, antes de fechar o fragmento */}
      <Analytics />
    </>
  );
}

export default App;