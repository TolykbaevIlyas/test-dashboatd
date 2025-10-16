import { SearchIcon } from '../../../icons/Icons'
import Button from '../../Button'
import styles from './Input.module.css'

const Input = () => {
  return (
    <div className={styles.InputBlock}>
      <input type="text" className={styles.Input} placeholder='Найти пользователя'/>
      <Button icon={<SearchIcon/>}/>
    </div>
  )
}

export default Input