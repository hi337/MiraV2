import { Grid } from "@mui/material"
import styles from "../styles/Home.module.css"
import {FaRegClock, FaMedkit, FaHeart, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt} from "react-icons/fa";

export default function Prenav() {
    return(
        <Grid className={styles.prenav} container flexDirection={"row"} justifyContent={"center"} alignItems={"center"} spacing={1}>
            <Grid className={styles.prenav_main} item>
            <a><FaRegClock/> Mon - Fri 09:30 - 6:00 & Weekends 10:00 - 3:00</a>
            </Grid>
            <Grid className={styles.prenav_main} item>
            <a><FaMedkit/> Book Your COVID RT-PCR Travel Testing!</a>
            </Grid>
            <Grid className={styles.prenav_main} item>
            <a><FaHeart/> Book Your COVID Vaccine!</a>
            </Grid>
            <Grid item xs={"auto"}>
            <div className={styles.prenav_social}>
               <a><FaPhoneAlt/></a>
               <a><FaEnvelope/></a>
               <a><FaFacebook/></a>
               <a><FaInstagram/></a>
               <a><FaTwitter/></a>
            </div>
            </Grid>
        </Grid>
    )
}