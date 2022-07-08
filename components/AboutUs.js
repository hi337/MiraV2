import { Container, Typography, Button} from "@mui/material"
import styles from '../styles/Home.module.css'

export default function AboutUs() {
    return(
        <Container id="about" maxWidth="lg">
            <div className={styles.aboutusheader}>
                <Typography variant="h2">
                    ABOUT US
                </Typography>
                <Typography variant="h4">
                We are open 7 days a week (everyday!) 
                </Typography>
            </div>
            <div className={styles.aboutusbody}>
                <div className={styles.aboutusmain}>
                <Typography variant="h2">
                    MIRACARE PHARMACY
                </Typography>
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
                    <div>
                        <text>( On the request of a patient, the licensee is required to provide the name and the practice permit number of any regulated member who provides a pharmacy service to the patient or who engages in the practice of pharmacy with respect to a patient)</text>
                        <Button>Click here for patient concerns</Button>
                    </div>
                </div>
                <div className={styles.aboutusreasons}>
                    <h1>few reasons to choose us:</h1>
                    <div>
                        <h5>Prescribing Pharmacist: On site to assist you with minor ailment and to meet your health needs as part of collaborative ongoing care for our patients.</h5>
                    </div>
                    <div>
                        <h5>Medication Review: Medical information gathering, systematic review, identification of drug therapy problems, communicating with other health care professional and follow ups according to our patents needs</h5>
                    </div>
                    <div>
                        <h5>Free Flu Vaccine: For all eligible Albertans 5 years and older every flu season (October to March of every year).</h5>
                    </div>
                    <div>
                        <h5>Free Prescription Delivery: Free delivery across the city to your home, work place or long–term care facility.</h5>
                    </div>
                </div>
                </div>
                <div className={styles.aboutusshort}>
                    <div>
                        <div>
                            <h5>Miracare Pharmacy </h5>
                        </div>
                        <div>
                            <h5>Our Location: 3921 106 St NW Phone Number: +1-780-244-4221 Email: miracarepharmacy@gmail.com </h5>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}