import GyurukUra from "./GyurukUra"
import Konyv from "./Konyv"
import Leiras from "./Leiras"

function Konyvek(){
    return(
        <>
            <h2>Kedvenc könyveim</h2>
            <GyurukUra />
            <Konyv szerzo="Fekete István" cim="Tüskevár" />
            <Leiras />
        </>
    )
}

export default Konyvek