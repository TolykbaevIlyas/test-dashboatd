import styles from './Pagination.module.css'
const Pagination = ({prevPage = "Данные", nextPage = "Пользователи"}:{prevPage?:string, nextPage?:string}) => {
  return (
    <div className={styles.PaginationBlock}>
        <a href="#" className={styles.PaginationPrevPage}>{prevPage}</a>
        <p>/</p>
        <a href="#" className={styles.PaginationNextPage}>{nextPage}</a>
    </div>
  )
}

export default Pagination