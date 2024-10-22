import logo from './logo.svg';
import './App.css';
import JatekTer from './components/JatekTer';
import { useContext} from 'react';
import { KattContext } from './context/KattContext';


function App() {

  const {lista} = useContext(KattContext)

  return (
    <div className="App">
      <header className="App-header">
        <h1>LightOn</h1>
      </header>

    <article>

      <JatekTer lista = {lista}/>

    </article>

    <footer>Kádár Kristóf</footer>

    </div>
  );
}

export default App;
