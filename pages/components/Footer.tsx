import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
type Props = {}

const Footer = (props: Props) => {
return (
  <footer className={styles.footer}>
  <p>
    Copyright {new Date().getFullYear()} &copy; Damicode
  </p>
 <p>Designed by Bolub</p>
</footer>
)
}

export default Footer;