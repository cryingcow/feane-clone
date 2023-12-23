import Card from './components/card/Card';
import Deals from './components/deals/Deals';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about/About';

function App() {
  return (
    <>
      <Header />
      <Deals />
      <Card />
      <About />
      <Footer />
    </>
  );
}

export default App;
