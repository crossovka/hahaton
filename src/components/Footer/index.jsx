import React from 'react';
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__list}>
        <a href='https://vk.com/poteryavsya'>
          <li className={styles.vk}><i className="fa fa-vk"></i></li>
        </a>
        <a href="https://api.whatsapp.com/send?phone=79098469873">
          <li className={styles.whatsapp}><i className="fa fa-whatsapp"></i></li>
        </a>
        <a href='https://vk.com/poteryavsya'>
          <li className={styles.vk}><i className="fa fa-vk"></i></li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
