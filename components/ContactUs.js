import { Container } from "@mui/material";
import styles from "../styles/Home.module.css";

export default function ContactUs() {
  return (
    <Container id="contact" className={styles.contactus} maxWidth="lg">
      <h3>Contact Us</h3>
      <h5>OUR LOCATION: 3921 106 st NW</h5>
      <div>Corporate Information</div>
      <div>Miracare Pharmacy Inc 3921 106 St NW Edmonton, AB T6J 2S3</div>
      <div>Corporation representative: Salam Shartooh</div>
      <div></div>
    </Container>
  );
}
