import Card from './components/card/Card';
import Comments from './components/comments/Comments';
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
      {/* <Card /> */}
      <About />
      <Booking />
      <SlideShow />
      <Footer />
    </>
  );
}

export default App;
