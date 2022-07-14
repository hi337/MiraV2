import { Container, Typography, Button, Divider} from "@mui/material"
import styles from '../styles/Home.module.css'
import Subheader from "./Subheader"

export default function AboutUs() {
    return(
        <Container id="about" maxWidth="lg">
            <Subheader title="ABOUT US" subtitle="We are Edmonton's Friendly Neighbourhood Pharmacy"/>
            <div className={styles.aboutusbody}>
                <div className={styles.aboutusmain}>
                <Typography variant="h4">
                    MIRACARE PHARMACY
                </Typography>
                <div style={{marginTop: 10, marginBottom: 10, width: 100, height: 2, backgroundColor: "black"}}></div>
                <Typography variant="body1">
                With convenient south side location and ample parking space, MIRACARE Pharmacy is one of the well known pharmacies in Edmonton. We offer variety of pharmacy services and products. You may visit our services page for more information!
                </Typography>
                <div className={styles.aboutuslicencee}>
                    <div style={{backgroundColor: "#EAFAF1"}}>
                       Licensee: Chowdhry Farhana Faruquee
                    </div>
                    <ul>
                        <li>Practice Permit Number: 14665</li>
                        <li>Business Address: 3921-106 St NW Edmonton , AB T6J 2S3</li>
                    </ul>
                    <div style={{backgroundColor: "#ffe6e6"}}>
                        <text>( On the request of a patient, the licensee is required to provide the name and the practice permit number of any regulated member who provides a pharmacy service to the patient or who engages in the practice of pharmacy with respect to a patient)</text>
                        <Button variant="contained">Click here for patient concerns</Button>
                    </div>
                </div>
                
                </div>
                <div className={styles.aboutusshort}>
                    <div>
                        <div style={{marginBottom: 15}}>
                            <Typography variant="h5">Miracare Pharmacy </Typography>
                        </div>
                        <div>
                            <Typography variant="body1">Our Location: 3921 106 St NW <br/> Phone Number: +1-780-244-4221 <br/> Email: miracarepharmacy@gmail.com </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}