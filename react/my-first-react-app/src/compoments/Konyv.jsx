import styles from '../css/konyv.module.css';
function Konyv(){
        return(
        <>
        <p>
            <span>{props.szerzo}</span>:&nbsp;
            <span>{props.cim}</span>
        </p>
        </>
    )
}

export default Konyv;