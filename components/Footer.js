import { Button, Container, IconButton } from "@mui/material";
import { FaEnvelope } from "react-icons/fa";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <div>
      <div style={{ backgroundColor: "#f6b60b", marginTop: 30 }}>
        <Container className={styles.footer} maxWidth="lg">
          <div className={styles.prefooter}>
            <div>
              <h5>Come now for flu and travel shots!</h5>
              <h5>
                If you are planning to travel outside of the country, make sure
                to get professional advise on recommended vaccinations!{" "}
              </h5>
            </div>
            <Button>Contact Us Now!</Button>
          </div>
        </Container>
      </div>
      <div style={{backgroundColor: "#0d5d4d"}}>
        <Container maxWidth="lg">
        <div className={styles.mainfooter}>
        <h4>Miracare Pharmacy</h4>
        <p>Visit us today for all your medical needs</p>
        <div className={styles.footerbuttons}>
            <IconButton><FaEnvelope size={28}/></IconButton>
        </div>
      </div>
        </Container>
      </div>
    </div>
  );
}
