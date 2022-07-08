import { Container } from "@mui/material"
import styles from "../styles/Home.module.css"
import Image from "next/image"

export default function Licence() {
    return (
        <Container id="licence" className={styles.licence} maxWidth="lg">
            <h3>Licence</h3>
            <h5>MIRACARE PHARMACY LICENCE IS HERE!</h5>
            <Image width={300} height={400} src={"/licence.webp"} />
        </Container>
    )
}