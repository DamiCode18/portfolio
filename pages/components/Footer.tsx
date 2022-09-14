import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
type Props = {}

const Footer = (props: Props) => {
return (
  <footer className='text-center py-[1rem] border-[#eaeaea] border-t-[1px] bottom-0 w-[100%] mt-2'>
  <p>
    Copyright {new Date().getFullYear()} &copy; Damicode
  </p>
</footer>
)
}

export default Footer;