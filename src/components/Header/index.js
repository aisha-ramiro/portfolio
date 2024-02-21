import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
      <ul>
      <li>
        <a href="#about">Sobre mim</a>
      </li>
      <li>
        <a href="#skills">Minhas skills</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#contact">Contato</a>
      </li>
      </ul>
    </nav> 

    </div>
  )
}
