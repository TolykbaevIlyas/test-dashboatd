
import styles from './UserTable.module.css'

import UserTableHeader from './components/UserTableHeader'
import { ArrowDownIcon, ArrowUpIcon } from '../../../shared/icons/Icons';
import { Table } from '../../../shared/ui/Table';
import UserTablePagination from './components/UserTablePagination';

const columns = [
  { key: "id", label: "ID", icon: <ArrowUpIcon /> },
  { key: "role", label: "Роль", icon: <ArrowDownIcon/> },
  { key: "name", label: "Имя", icon: <ArrowDownIcon/> },
  { key: "login", label: "Логин", icon: <ArrowDownIcon/> },
  { key: "position", label: "Должность", icon: <ArrowDownIcon/> },
  { key: "contacts", label: "Контакты", icon: <ArrowDownIcon/> },
  { key: "email", label: "Почта", icon: <ArrowDownIcon/> },
  { key: "phone", label: "Телефон", icon: <ArrowDownIcon/> },
  { key: "city", label: "Город", icon: <ArrowDownIcon/> },
];

const data = [
  {
    id: "13619",
    role: "Админ",
    name: "Александр",
    login: "someDesigner",
    position: "Дизайнер",
    contacts: "@test",
    email: "test@test.ru",
    phone: "+7 9999999999",
    city: "Нижний Новгород",
  },
  {
    id: "13620",
    role: "Админ",
    name: "Александр",
    login: "someDesigner",
    position: "Дизайнер",
    contacts: "@AlexMellon",
    email: "test@test.ru",
    phone: "+7 9999999999",
    city: "Нижний Новгород",
  },
];

const UserTable = ({name = "Пользователи"}: {name:string}) => {
  return (
    <div className={styles.UserTable_Block}>
        <h3 className={styles.UserTable_Title}>{name}</h3>
        <UserTableHeader/>
        <Table columns={columns} data={data} />
        <UserTablePagination/>
    </div>
  )
}

export default UserTable