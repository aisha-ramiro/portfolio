import styles from './Introduction.module.css'


const Introuction = () => {
  return (
    <div className={styles.containerDiv}>
        <div className={styles.introContainer}>
      <div className={styles.introDiv}>
      <h1>Aisha G. Ramiro</h1>
      <h2>Desenvolvedora Front-End</h2>
      <p>Obrigado por visitar meu portfólio! Estou ansioso para colaborar em projetos inovadores e ajudar a construir experiências incríveis na web.</p>
    </div>
    <div className={styles.introDivImg}>
      <img src="https://avatars.githubusercontent.com/u/79142932?v=4" alt="Foto de perfil" />
    </div>
    </div>
    </div>
  )
}

export default Introuction