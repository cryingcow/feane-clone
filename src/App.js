import Card from './components/card/Card';
import Comments from './components/comments/Comments';
import Deals from './components/deals/Deals';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about/About';

function App() {
  return (
    <>
      <Header />
      <Deals />
      {/* <Card /> */}
      <Comments />
      <About />
      <Footer />
    </>
  );
}

export default App;
