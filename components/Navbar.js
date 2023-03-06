import styles from "../styles/Home.module.css";
import { Container, IconButton } from "@mui/material";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [navState, setNavState] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.navbarlogo}>
          <Image src={"logo.jpg"} height={40} width={170} />
        </a>
      </Link>
      <IconButton
        className={styles.navbaricon}
        onClick={() => setNavState(!navState)}
      >
        <FaBars />
      </IconButton>
      <div
        className={
          navState ? styles.navbarmenu + " " + styles.extend : styles.navbarmenu
        }
      >
        <ul>
          <li>
            <a href="index.html#home">HOME</a>
          </li>
          <li>
            <a href="index.html#about">ABOUT US</a>
          </li>
          <li>
            <a href="index.html#service">SERVICES</a>
          </li>
          <li>
            <a href="index.html#contact">CONTACT US</a>
          </li>
          <li>
            <a href="index.html#faq">FAQ</a>
          </li>
          <li>
            <a href="index.html#licence">LICENCE</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
