import Linha from '../Linha'
import styles from './styles.module.css'

function Tabuleiro(props) {
    return (
        <div className={styles.Tabuleiro}>
            <Linha  />
            <Linha preta />
            <Linha  />
            <Linha preta />
            <Linha />
            <Linha preta />
            <Linha />
            <Linha preta />
        </div>
    )
}

export default Tabuleiro