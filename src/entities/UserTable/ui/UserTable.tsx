import Input from '../../../shared/ui/Input'
import Button from '../../../shared/ui/Button'
import styles from './UserTable.module.css'
import { FilterIcon, PlusIcon, SettingIcon } from '../../../shared/icons/Icons'

const UserTable = ({name = "Пользователи"}) => {
  return (
    <div className={styles.UserTable_Block}>
        <h3 className={styles.UserTable_Title}>{name}</h3>
        <div className={styles.UserTable_Header}>
            <div className={styles.UserTable_Header_Left}>
                <Input/>
                <Button icon={<SettingIcon/>}/>
                <Button icon={<FilterIcon/>}/>
            </div>
            <div className={styles.UserTable_Header_Right}>
                <Button text='Добавить пользователя' type='Accent' icon={<PlusIcon/>}/>
            </div>
        </div>
    </div>
  )
}

export default UserTable