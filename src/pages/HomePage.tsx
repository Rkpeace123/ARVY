import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Problem from '../components/Problem';
import Approach from '../components/Approach';
import Services from '../components/Services';
import Differentiation from '../components/Differentiation';
import ProofBand from '../components/ProofBand';
import Discovery from '../components/Discovery';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Approach />
        <Services />
        <Differentiation />
        <ProofBand />
        <Discovery />
      </main>
      <Footer />
    </>
  );
}
