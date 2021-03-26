import './App.css';
import {Home} from './components/Home';
import {Footer} from './components/Footer';
import {About} from './components/About';
import {Service} from './components/Service';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="container">
     <Home/>
     <About/>
     <Service/>
     <Footer/>
    </div>
  );
}

export default App;
