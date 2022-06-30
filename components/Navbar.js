import styles from '../styles/Home.module.css'
import { IconButton } from '@mui/material'
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
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Licence</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}