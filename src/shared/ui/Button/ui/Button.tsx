import type { IBtn } from '../types/BtnType'
import styles from './Button.module.css'


const Button = ({type = "Default",text = "text", icon}: IBtn) => {
  return (
    <button className={`${styles.Button} ${type === "Accent" ? styles.Active : styles.Default}`}>
        <div>{icon}</div>
        <p>{text}</p>
    </button>
  )
}

export default Button