import 'bootstrap/dist/css/bootstrap.min.css';
import poster from './assets/PSP25_PRLMW_Sophisticated_Sportswear_03-scaled-e1744190359451-1680x695.webp';
import Header from './components/Header';
import './App.css';
import { Carousel } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Header />
      <main > 
        <Carousel style={{ marginTop: '20px' }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=""
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Primer Slide</h3>
              <p>Descripción del primer slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={poster}
              alt="Second slide"
            />
           </Carousel.Item> 
          </Carousel> 
      </main>
    </div>
  );
}

export default App;
