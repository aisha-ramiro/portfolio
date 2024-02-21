import styles from './Contact.module.css'

import {AiOutlineMail, 
  AiOutlineWhatsApp,
   AiOutlineShareAlt,
   AiOutlineGithub,
   AiOutlineLinkedin,
   AiOutlineInstagram} from 'react-icons/ai'

export const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h2>Contato</h2>
      <div className={styles.contacItems}>


        <div className={styles.contact}>
       
           <AiOutlineMail /> 
         
          <p>aishamontealto@gmail.com</p>
          
           
        </div>
        <div className={styles.contact}>
       <AiOutlineWhatsApp /> 
          (16)994379407
        </div>
        <div className={styles.contactMedia}>
        
          <a href="https://github.com/aisha-ramiro/"><AiOutlineGithub /></a>
          <a href="/"><AiOutlineLinkedin /></a>
          <a href="/"><AiOutlineInstagram /></a>
          
        </div>
      </div>
    </div>
  )
}
