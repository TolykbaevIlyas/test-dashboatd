import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <ul className={styles.footer_block}>
            <li className={styles.footer_item}>
                <a href="#">Информация</a>
                <a href="#">Поддержка</a>
            </li>
            <li className={styles.footer_item}>
                <a href="#">Пользователи</a>
                <a href="#">Клиенты</a>
            </li>
            <li className={styles.footer_item}>
                <a href="#">Реклама</a>
                <a href="#">Настройки Куки</a>
            </li>
            <li className={styles.footer_item}>
                <a href="#">Условия</a>
                <a href="#">Главная</a>
            </li>
            <li className={styles.footer_item}>
                <a href="#">Политика Конфиденциальности</a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer