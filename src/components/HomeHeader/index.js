import styles from "./HomeHeader.module.css";

export default function HomeHeader() {
    return (
        <header className={styles.homeheader}>
            <span>
                <img src="logo.png" alt="" className={styles.logo} />
            </span>

            <h3 className={styles.language}>Idioma do site: Português</h3>
        </header>
    );
}