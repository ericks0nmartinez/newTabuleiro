import styles from  './styles.module.css'

function Subdivisao(props) {
    return (
        <div 
            style={{backgroundColor: props.preta ? "black" : "white"}}
            className={styles.subdivisao }></div>
    )
}

export default Subdivisao