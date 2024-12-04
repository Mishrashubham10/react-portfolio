import Hero from './hero/Hero';
import Services from './services/Services';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';

const App = () => {
  return (
    <div className="container">
      <section id="#home">
        <Hero />
      </section>
      <section id="#services">
        <Services />
      </section>
      <section id="#portfolio">
        <Portfolio />
      </section>
      <section id="#contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;