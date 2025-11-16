import styles from './Title.module.css'

export function Title({ title }) {
    return(<h1 className={styles.h1}>{title}</h1>);
}