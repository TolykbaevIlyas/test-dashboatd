import type { IBtn } from '../types/BtnType'
import styles from './Button.module.css'


const Button = ({type = "Default",text = "", icon}: IBtn) => {
  return (
    <button className={`${styles.Button} ${type === "Accent" ? styles.Active : styles.Default}`}>
        {icon}  
        <p>{text}</p>
    </button>
  )
}

export default Button