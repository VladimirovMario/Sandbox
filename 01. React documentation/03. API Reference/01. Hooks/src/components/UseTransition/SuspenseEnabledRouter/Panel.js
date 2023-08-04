import styles from './Panel.module.css';

export default function Panel({ children }) {
  return <section className={styles['panel']}>{children}</section>;
}
