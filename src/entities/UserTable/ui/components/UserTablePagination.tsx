import { CheveronLeftIcon, CheveronRightIcon } from "../../../../shared/icons/Icons"
import Button from "../../../../shared/ui/Button"
import styles from './UserTablePagination.module.css'

const UserTablePagination = () => {
  return (
    <>
        <div className={styles.PaginationBlock}>
            <Button icon={<CheveronLeftIcon/>}/>
            {["1","2","3","4","5",'...',"3000"].map((item) => <Button text={item} type={item === "1" ? "Accent" : "Default"} />)}
            <Button icon={<CheveronRightIcon/>}/>
        </div>
        <p className={styles.PaginationText}>Показано 1-20 из 30 000 пользователей</p>
    </>
  )
}

export default UserTablePagination