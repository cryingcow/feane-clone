import Menu from './pages/menu/Menu';
import Deals from './components/deals/Deals';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import SlideShow from './components/slide/SlideShow';
import About from './pages/about/About';
import Booking from './pages/booking/Booking';

function App() {
  return (
    <>
      <Header />
      <Deals />
      <Menu />
      <About />
      <Booking />
      <SlideShow />
      <Footer />
    </>
  );
}

export default App;
