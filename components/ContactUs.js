import { Container } from "@mui/material";
import styles from "../styles/Home.module.css";
import Subheader from "./Subheader";

export default function ContactUs() {
  return (
    <Container id="contact" className={styles.contactus} maxWidth="lg">
      
      <Subheader title="CONTACT US" subtitle="OUR LOCATION: 3921 106 st NW" />
      <div>Corporate Information</div>
      <div>Miracare Pharmacy Inc 3921 106 St NW Edmonton, AB T6J 2S3</div>
      <div>Corporation representative: Salam Shartooh</div>
      <div></div>
    </Container>
  );
}
