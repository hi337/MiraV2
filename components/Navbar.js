import styles from '../styles/Home.module.css'
import { Container, IconButton } from '@mui/material'
import {FaBars} from "react-icons/fa"
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [navState, setNavState] = useState(false)

  return(
    <nav className={styles.navbar}>
      <a href='/' className={styles.navbarlogo}>
        <Image src={"/logo.jpg"} height={40} width={170} />
      </a>
      <IconButton className={styles.navbaricon} onClick={() => setNavState(!navState)}>
        <FaBars/>
      </IconButton>
      <div className={navState ? styles.navbarmenu + ' ' + styles.extend : styles.navbarmenu}>
        <ul>
          <li>
            <a href='#home'>HOME</a>
          </li>
          <li>
            <a href='#about'>ABOUT US</a>
          </li>
          <li>
            <a href='#service'>SERVICES</a>
          </li>
          <li>
            <a href='#contact'>CONTACT US</a>
          </li>
          <li>
            <a href='#faq'>FAQ</a>
          </li>
          <li>
            <a href='#licence'>LICENCE</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}