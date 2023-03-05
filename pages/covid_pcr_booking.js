import Navbar from "../components/Navbar";
import Prenav from "../components/Prenav";
import Head from "next/head";
import Subheader from "../components/Subheader";
import {
  Container,
  TextField,
  Button,
  FormControl,
  NativeSelect,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import FormInfo from "../json/FormInfo.json";
import Footer from "../components/Footer";

export default function PCRPage() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [num, setNum] = useState(0);
  const [type, setType] = useState("Standard (results within 12 hours)");
  const [sympt, setSympt] = useState("No");

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Head>
        <title>Miracare Pharmacy Edmonton</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Prenav />
      <Navbar />
      <Subheader
        title="BOOK AN APPOINTMENT FOR A COVID-19 RT-PCR TEST!"
        subtitle="Standard (results within 12 hours) = $120+GST"
        extra="Expedited (results within 3 to 6 hours) = $150+GST"
      />
      <Container maxWidth={"lg"}>
        <FormControl>
          <label>
            <b>Pick a Date:</b>
          </label>
          <Button variant="contained" onClick={handleClick}>
            {date.toDateString()}
          </Button>
          {isOpen && (
            <DatePicker
              inline
              selected={date}
              onChange={(newDate) => setDate(newDate)}
            ></DatePicker>
          )}
          <label>
            <b>Pick a Time:</b>
          </label>
          <NativeSelect
            defaultValue={time}
            onChange={(newTime) => setTime(newTime)}
          >
            {FormInfo.times.map((timeChoice, i) => (
              <option key={i} value={timeChoice}>
                {timeChoice}
              </option>
            ))}
          </NativeSelect>
          <label>
            <b>Your Full Name:</b>
          </label>
          <TextField
            variant={"standard"}
            value={name}
            onChange={(newName) => setName(newName.target.value)}
          />
          <label>
            <b>Your Email Address:</b>
          </label>
          <TextField
            variant={"standard"}
            value={email}
            onChange={(newEmail) => setEmail(newEmail.target.value)}
          />
          <label>
            <b>Your Phone Number:</b>
          </label>
          <TextField
            variant={"standard"}
            value={phone}
            onChange={(newPhone) => setPhone(newPhone.target.value)}
          />
          <label>
            <b>Number Of People:</b>
          </label>
          <NativeSelect
            defaultValue={num}
            onChange={(newNum) => setNum(newNum)}
          >
            {FormInfo.people.map((numChoice, i) => (
              <option key={i} value={numChoice}>
                {numChoice}
              </option>
            ))}
          </NativeSelect>
          <label>
            <b>Your Type Of Service:</b>
          </label>
          <RadioGroup
            value={type}
            onChange={(newType) => setType(newType.target.value)}
          >
            <FormControlLabel
              value="Standard (results within 12 hours)"
              control={<Radio />}
              label="Standard (results within 12 hours)"
            />
            <FormControlLabel
              value="Expedited (results within 3 to 6 hours) "
              control={<Radio />}
              label="Expedited (results within 3 to 6 hours) "
            />
          </RadioGroup>
          <label>
            <b>Do you have symptoms or have contact with anyone with Covid?:</b>
          </label>
          <RadioGroup
            value={sympt}
            onChange={(newSympt) => setSympt(newSympt.target.value)}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
          <Button variant={"contained"}>Submit</Button>
        </FormControl>
      </Container>
      <Footer />
    </div>
  );
}
