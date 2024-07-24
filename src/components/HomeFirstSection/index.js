import styles from './HomeFirstSection.module.css'

export default function HomeFirstSection() {
    return (
        <section className={styles.homefirstsection}>
            <img src="imagemsecao01.png" alt="Imagem da primeira seção" />
            

            <section className={styles.sectioncontent}>
                <h2>Crie seus próprios jogos e aplicativos!</h2>
                <button>Começar agora</button>
                <button>Já tenho conta</button>
            </section>
        </section>
    );
}