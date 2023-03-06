import { Button, Container, IconButton } from "@mui/material";
import { FaEnvelope } from "react-icons/fa";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#f6b60b",
          marginTop: 30,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        {/* <Container className={styles.footer} maxWidth={"xl"}> */}
        <div className={styles.prefooter}>
          <div>
            <h4 className={styles.footerpretitle}>
              Come now for flu and travel shots!
            </h4>
            <p className={styles.footerpretext}>
              If you are planning to travel outside of the country, make sure to
              get professional advise on recommended vaccinations!{" "}
            </p>
          </div>
          <Button
            href="index.html#contact"
            className={styles.footerprebutton}
            variant={"contained"}
          >
            <b>Contact Us</b>
          </Button>
        </div>
        {/* </Container> */}
      </div>
      <div style={{ backgroundColor: "#0d5d4d" }}>
        <Container maxWidth="lg">
          <div className={styles.mainfooter}>
            <h2 style={{ color: "gold", fontSize: 30 }}>Miracare Pharmacy</h2>
            <p className={styles.footerLastText}>
              Visit us today for all your medical needs
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
