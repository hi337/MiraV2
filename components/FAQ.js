import { Container } from "@mui/material";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function FAQ() {
  return (
    <Container id="faq" maxWidth="lg">
      <div className={styles.FAQheader}>
        <h3>FRQUENTLY ASKED QUESTIONS</h3>
        <h5>OUR PHARMACY'S MOST FRQUENTLY ASKED QUESTIONS!</h5>
      </div>
      <div className={styles.FAQ}>
        <div className={styles.FAQimg}>
          <Image height={265} width={457} src="/heart-hand.webp" />
        </div>
        <div className={styles.FAQtext}>
          <p>
            What do I need to bring with me to fill a prescription at the
            pharmacy? If this is your first time filling a prescription at our
            pharmacy, we will need: Your name, address, phone number, and birth
            date. If you have an Alberta Health card, we will need that number
            and if you are a student and covered under the Student Health Plan,
            we will also need your student ID number. If you have any other
            coverage through work or your parents, we will need this
            information. Can I transfer my prescription from another pharmacy?
            Yes, Just visit us at our pharmacy or phone us at 780-244-4221. We
            will need to know the name of the medication you want filled, as
            well as the name of the pharmacy where you last had the prescription
            filled, so we can contact the pharmacy. Will Pharmacy ever contact
            my doctor? Yes, we may need to contact your doctor to: -Answer any
            concerns or questions about the prescription written -Discuss
            possible drug allergies or interactions with other medications you
            are taking -Consult with your doctor to find out whether an
            alternative medication may be appropriate for you. Is my health
            information kept confidential? Yes, all personal health information
            is always kept secure and confidential. If you would like to discuss
            sensitive health concerns with one of our pharmacists in private,
            please request to speak with us in our private counseling room,
            located in the pharmacy. Who is a "prescribing pharmacist"? A
            Prescribing Pharmacist is someone who has been granted privileges by
            the Alberta College of Pharmacists to write prescriptions for
            medications without you having to see a physician. Is there any
            limitation on what type of medications a Prescribing Pharmacist can
            prescribe? A pharmacist may not prescribe Narcotics, Controlled
            Drugs or Targeted Substances. A pharmacist also may not provide an
            interim supply, extend a prescription, make a therapeutic
            substitution or adapt a prescription where the original prescription
            bears a specific indication otherwise. Is there any limitation on
            whom a Prescribing Pharmacist can not prescribe? Yes, Prescribing
            Pharmacists: Must not prescribe for themselves Must not prescribe
            for animals Should not prescribe for a family member or someone of a
            “close personal or emotional relationship” unless there is no
            alternative. Are you open on Sundays and Stat Holidays? Yes, we are
            open 7-days a week. On Sundays and Stat Holidays we open from 10 to
            3.
          </p>
        </div>
      </div>
    </Container>
  );
}
