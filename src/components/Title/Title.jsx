import styles from './Title.module.css'

export function Title({ title = "Untitled" }) {
    const displayTitle = title.length === 0 ? "Untitled" : title;

    return(<h1 className={styles.h1}>{displayTitle}</h1>);
}