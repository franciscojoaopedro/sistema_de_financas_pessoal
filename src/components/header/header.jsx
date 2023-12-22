import styles  from "./header.module.css"

export const Header = () => {
  return <header className={styles.header} >
        <nav className={styles.nav}>
            <h2>Controlo Financeiro Pessoal</h2>
        </nav>
  </header>;
};
