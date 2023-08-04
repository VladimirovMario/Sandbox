import styles from './Layout.module.css';

export default function Layout({ children, isPending }) {
  return (
    <div className={styles['layout']}>
      <section
        className={styles['header']}
        style={{
          opacity: isPending ? 0.7 : 1,
        }}
      >
        Music Browser
      </section>
      <main style={{ minHeight: '200px', padding: '10px' }}>{children}</main>
    </div>
  );
}
