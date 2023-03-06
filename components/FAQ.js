import { Container } from "@mui/material";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Subheader from "./Subheader";

export default function FAQ() {
  return (
    <Container style={{ paddingTop: 20 }} id="faq" maxWidth="lg">
      <Subheader
        title="FREQUENTLY ASKED QUESTIONS"
        subtitle="OUR PHARMACY'S MOST FRQUENTLY ASKED QUESTIONS!"
      />
      <div className={styles.FAQ}>
        <div className={styles.FAQimg}>
          <Image height={270} width={460} src="heart-hand.webp" />
        </div>
        <div className={styles.FAQtext}>
          <p>
            <b>
              What do I need to bring with me to fill a prescription at the
              pharmacy?
            </b>
            <br />
            If this is your first time filling a prescription at our pharmacy,
            we will need: Your name, address, phone number, and birth date. If
            you have an Alberta Health card, we will need that number and if you
            are a student and covered under the Student Health Plan, we will
            also need your student ID number. If you have any other coverage
            through work or your parents, we will need this information.
            <br />
            <b>Can I transfer my prescription from another pharmacy?</b>
            <br />
            Yes, Just visit us at our pharmacy or phone us at 780-244-4221. We
            will need to know the name of the medication you want filled, as
            well as the name of the pharmacy where you last had the prescription
            filled, so we can contact the pharmacy.
            <br />
            <b>Will Pharmacy ever contact my doctor?</b>
            <br /> Yes, we may need to contact your doctor to:
            <br />
            -Answer any concerns or questions about the prescription written
            <br />
            -Discuss possible drug allergies or interactions with other
            medications you are taking
            <br />
            -Consult with your doctor to find out whether an alternative
            medication may be appropriate for you.
            <br />
            <b>Is my health information kept confidential?</b>
            <br />
            Yes, all personal health information is always kept secure and
            confidential. If you would like to discuss sensitive health concerns
            with one of our pharmacists in private, please request to speak with
            us in our private counseling room, located in the pharmacy.
            <br />
            <b>Who is a prescribing pharmacist?</b>
            <br />A Prescribing Pharmacist is someone who has been granted
            privileges by the Alberta College of Pharmacists to write
            prescriptions for medications without you having to see a physician.
            <br />
            <b>
              Is there any limitation on what type of medications a Prescribing
              Pharmacist can prescribe?
            </b>
            <br />A pharmacist may not prescribe Narcotics, Controlled Drugs or
            Targeted Substances. A pharmacist also may not provide an interim
            supply, extend a prescription, make a therapeutic substitution or
            adapt a prescription where the original prescription bears a
            specific indication otherwise.
            <br />
            <b>
              Is there any limitation on whom a Prescribing Pharmacist can not
              prescribe?
            </b>
            <br />
            Yes, Prescribing Pharmacists:
            <br />
            Must not prescribe for themselves
            <br />
            Must not prescribe for animals
            <br />
            Should not prescribe for a family member or someone of a “close
            personal or emotional relationship” unless there is no alternative.
            <br />
            <b>Are you open on Sundays and Stat Holidays?</b>
            <br />
            Yes, we are open 7-days a week. On Sundays and Stat Holidays we open
            from 10 to 3.
          </p>
        </div>
      </div>
    </Container>
  );
}
