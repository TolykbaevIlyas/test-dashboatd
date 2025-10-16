import Input from '../../../shared/ui/Input'
import Button from '../../../shared/ui/Button'
import styles from './UserTable.module.css'
import { PlusIcon } from '../../../shared/icons/plusIcon'

const UserTable = ({name = "Пользователи"}) => {
  return (
    <div className={styles.UserTable_Block}>
        <h3>{name}</h3>
        <div className={styles.UserTable_Header}>
            <div className={styles.UserTable_Header_Left}>
                <Input/>
                <Button text='1'/>
                <Button/>
            </div>
            <Button text='Добавить пользователя' type='Accent' icon={<PlusIcon/>}/>
        </div>
    </div>
  )
}

export default UserTable