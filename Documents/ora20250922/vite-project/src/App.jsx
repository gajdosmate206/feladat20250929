import './css/general.css';
import Hello from './components/Hello.jsx';
import {Flip, Flip2} from './components/Flips.jsx';
import Targyak from './components/Targyak.jsx'

function App() {
  return (
    <>
      <h1>Második React App</h1>
      <Hello />
      <Flip />
      <Flip2 />
      <Targyak />
      <Szamlalo />
    </>
  )
}

export default App
