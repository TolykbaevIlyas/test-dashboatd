import { SearchIcon } from '../../../icons/Icons'
import Button from '../../Button'
import type { IInput } from '../types/types'
import styles from './Input.module.css'

const Input = ({placeholder}:IInput) => {
  return (
    <div className={styles.InputBlock}>
      <input type="text" className={styles.Input} placeholder={placeholder}/>
      <Button icon={<SearchIcon/>}/>
    </div>
  )
}

export default Input