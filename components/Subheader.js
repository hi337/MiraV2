import { Typography } from "@mui/material";
import styles from "../styles/Home.module.css"

export default function Subheader(props) {
    return(
        <div className={styles.globalSubheader}>
        <h2 className={styles.globalSubheaderTitle} variant="h5">
          {props.title}
        </h2>
        <div
          style={{
            width: 50,
            height: 4,
            marginBottom: 15,
            backgroundColor: "#f6b60b",
          }}
          variant="middle"
        />
        <Typography variant="p">
          {props.subtitle}
        </Typography>
        <br/><br/>
        <Typography variant="p">
          {props.extra}
        </Typography>
      </div>
    )
}
