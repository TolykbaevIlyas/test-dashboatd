import styles from '../UserTable.module.css'
import Input from '../../../../shared/ui/Input'
import { FilterIcon, PlusIcon, SettingIcon } from '../../../../shared/icons/Icons'
import Button from '../../../../shared/ui/Button'

const UserTableHeader = () => {
  return (
    <div className={styles.UserTable_Header}>
            <div className={styles.UserTable_Header_Left}>
                <Input placeholder='Найти пользователя'/>
                <Button icon={<SettingIcon/>}/>
                <Button icon={<FilterIcon/>}/>
            </div>
            <div className={styles.UserTable_Header_Right}>
                <Button text='Добавить пользователя' type='Accent' icon={<PlusIcon/>}/>
            </div>
        </div>
  )
}

export default UserTableHeader