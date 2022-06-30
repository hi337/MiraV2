import Carousel from "react-material-ui-carousel"
import {Button, Paper, Typography} from "@mui/material"
import Image from "next/image"

function Item(props) {
    return(
        <Paper style={{backgroundImage: "url(/" + props.item.backgroundImage + ")", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: 600}}>
            {/* <Image objectFit="cover" layout="fill" src={"/" + props.item.backgroundImage} /> */}
            <Typography variant="h4">{props.item.title}</Typography>
            <Typography variant="h5">{props.item.describe}</Typography>
            <Button href={props.item.link}>{props.item.buttonText}</Button>
        </Paper>
    )
}

export default function MiraCarousel() {

    const items = [
        {
            title: "COVID TRAVEL RT-PCR TESTING NOW AVAILABLE!",
            describe: "COVID-19 RT-PCR Travel Testing is now available at Mircare Pharmacy!\nBook an Appointment or Walk-in.\nStandard = $120 + GST, Expedited = $150 + GST",
            backgroundImage: "pcr.jpg",
            link: "./covid_pcr_booking.html",
            buttonText: "Book Online"
        },
        {
            title: "COVID-19 VACCINES AVAILABLE!",
            describe: "",
            backgroundImage: "OIP.jpg",
            link: "tel:780-244-4221",
            buttonText: "Book an Appointment Today!"
        },
        {
            title: "COVID ANTIBODIES TEST NOW AVAILABLE!",
            describe: "Test are now available here to keep all you Edmontonians safe and in the know!",
            backgroundImage: "renditionDownload (3).svg",
            link: "#contact",
            buttonText: "Learn More"
        }
    ]

    return(
        <Carousel>
            {items.map((item, index) => {
                return <Item item={item} key={index} />
            })}
        </Carousel>
    )
}