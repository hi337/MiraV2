import Carousel from "react-material-ui-carousel"
import {Button, Paper, Typography} from "@mui/material"
import styles from '../styles/Home.module.css'

function Item(props) {
    return(
        <Paper className={styles.carousel} style={{backgroundImage: "url(/" + props.item.backgroundImage + ")", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: 600}}>
            <h4 className={styles.carouseltitle}><b>{props.item.title}</b></h4>
            {
                props.item.describe.map((string, index) => {
                    return <Typography style={{fontSize: 20}} key={index} variant="p">{string}</Typography>
                })
            }
            <div style={{paddingBottom: 60}}></div>
            <Button className={styles.carouselbutton} href={props.item.link}><b>{props.item.buttonText}</b></Button>
        </Paper>
    )
}

export default function MiraCarousel() {

    const items = [
        {
            title: "COVID TRAVEL RT-PCR TESTING NOW AVAILABLE!",
            describe: ["COVID-19 RT-PCR Travel Testing is now available at Mircare Pharmacy!","Book an Appointment or Walk-in.","Standard = $120 + GST, Expedited = $150 + GST"],
            backgroundImage: "pcr.jpg",
            link: "./covid_pcr_booking.html",
            buttonText: "Book Online"
        },
        {
            title: "COVID-19 VACCINES AVAILABLE!",
            describe: [""],
            backgroundImage: "OIP.jpg",
            link: "tel:780-244-4221",
            buttonText: "Call Today!"
        },
        {
            title: "COVID ANTIBODIES TEST NOW AVAILABLE!",
            describe: ["Test are now available here to keep all you Edmontonians safe and in the know!"],
            backgroundImage: "rendition.webp",
            link: "#contact",
            buttonText: "Learn More"
        }
    ]

    return(
        <div id="home">
        <Carousel indicators={false}>
            {items.map((item, index) => {
                return <Item item={item} key={index} />
            })}
        </Carousel>
        </div>
    )
}