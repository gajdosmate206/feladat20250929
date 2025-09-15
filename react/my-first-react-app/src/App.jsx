function App() {
  var nev = 'Mekk Elek';
  const szulNap = {
    ev: 2000,
    ho: 'január',
    nap: 1
  }

  const getFavColor = () => 'zöld';
  return(
    <>
      <h1>Első react alkalmazásom</h1>
      <p>Helló Világ</p>
      <p>Az én nevem {nev}</p>
      <p>Én {szulNap.ev}. év {szulNap.ho} hónapjának {szulNap.nap} napján születtem</p>
      <p>A kedvenc színem a {getFavColor()}</p>
    </>
  )
}

export default App
