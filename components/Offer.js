import { Container, Card, Grid, CardMedia, CardContent, Typography } from '@mui/material'
import styles from '../styles/Home.module.css'
import Miracards from "../json/Miracards.json"
import Subheader from './Subheader'

export default function Offer() {
    return(
        <div id="service" style={{backgroundColor: "#16A085", paddingBottom: 30}}>
        <Container className={styles.offer} maxWidth="lg">
            <Subheader title="WHAT WE OFFER!" subtitle="Here are some of the services we offer" />
        <Grid container flexDirection={'row'} justifyContent={"space-evenly"} alignItems={'center'} spacing={3} >
          {Miracards.Miracards.map((card, i) =>
            <Grid key={i} item>
            <Card className={styles.miracard} sx={{width: 360, height: 370}}>
              <CardMedia 
              image={card.img}
              component="img"
              height={230}/>
              <CardContent>
              <Typography variant='h5' component="div" gutterbottom="true">
                {card.name}  
              </Typography>
              <Typography variant="body2" color="text.secondary">{card.discription}</Typography>
              </CardContent>
            </Card>
            </Grid>
          )}
        </Grid>
        </Container>
        </div>
    )
}