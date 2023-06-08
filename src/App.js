/*Estamos usando la libreria de react-icons y react-router-dom y framer-motion*/
import Header from './Componentes/Header/Header';
import { BrowserRouter as Router} from 'react-router-dom'; 
import './App.css';
import AnimatedRoutes from './Componentes/AnimatedRoutes';
//Para las animaciones entre paginamas vamos a utilizar la libreria de framer motion de npm, esta nos permite anadir transisiones entre paginas utilizando reaact router

//Dentro ded AnimatedRoutes esta toda la logica de las rutas, solo que lo mandamos a otro archivo diferente en vez de tener aqui todo junto para poder implementar la libreria de framer-motion ya que no se podia hacer directamente por el tema de useLocation

function App() {
  return (
    <Router>
      <Header/>
      <AnimatedRoutes/>
    </Router>
  );
}

export default App;