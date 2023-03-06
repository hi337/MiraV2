import { Container } from "@mui/material";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Subheader from "./Subheader";

export default function Licence() {
  return (
    <Container id="licence" className={styles.licence} maxWidth="lg">
      <Subheader title="LICENCE" subtitle="Miracare's Offical Licence" />
      <Image width={300} height={400} src={"licence.webp"} />
    </Container>
  );
}
