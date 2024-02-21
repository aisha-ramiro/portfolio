import portfolio1 from '../../assets/images/portfolio1.png'
import portfolio2 from '../../assets/images/portfolio2 .png'

import styles from './Portfolio.module.css'

export const Portfolio = () => {
  return (
    <div className={styles.portContainer}>
      <h2>Meu Portfólio</h2>
      <div className={styles.portItems}>
        <a href="/"><img src={portfolio1} alt="" /></a>
       <a href="/">  <img src={portfolio2} alt="" /></a>
        <a href="/"> <img src={portfolio1} alt="" /></a>
      </div>
    </div>
  )
}
