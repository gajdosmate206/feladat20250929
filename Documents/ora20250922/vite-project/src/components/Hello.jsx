function Hello()
{
      const sayHello = () => {
        window.alert('Helló Világ');
    }
    const sayHelloVki = (nev) => {
        window.alert('Helló '+nev);
    }
    var vki = 'Mekk Elek';
    return(
        <>
            <button onClick={sayHello}>Helló</button>
            <button onClick={ ()=>{ sayHelloVki('Mekk Elek')}}>Helló ismerős</button>
        </>
    )
}
export default Hello