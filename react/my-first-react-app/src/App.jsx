import Hobbi from './compoments/Hobbi'
import Konyvek from './compoments/Konyvek'

function App() {
  var nev = 'Mekk Elek';
  const szulNap = {
    ev: 2000,
    ho: 'január',
    nap: 1
  }

  const getFavColor = () => 'zöld';

  const nevStilus = {
    fontSize: "1.5em",
    fontWeight: "bold"
  }
  return(
    <>
      <h1 style={{textAlign: "center"}}>Első react alkalmazásom</h1>
      <p>Helló Világ</p>
      <p>Az én nevem {nev}</p>
      <p>Én {szulNap.ev}. év {szulNap.ho} hónapjának {szulNap.nap} napján születtem</p>
      <p>A kedvenc színem a {getFavColor()}</p>

      <Hobbi />
      <Konyvek />
    </>
  )
}

export default App
