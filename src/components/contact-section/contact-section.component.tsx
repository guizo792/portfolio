import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import {
  ContactSectionContainer,
  ContactsContainer,
  Contacts,
} from "./contact-section.styles";
import ContactForm from "../contact-form/contact-form.component";

export const personalAccounts = {
  linkedin: "https://www.linkedin.com/in/abdellah-guizoul-0878b823a/",
  gmail: "guizoulabdellah792@gmail.com",
};

const ContactSection = () => {
  return (
    <ContactSectionContainer id="contacts">
      <h1 className="section-title education-section-title">Accounts</h1>
      <ContactsContainer>
        <Contacts>
          <a target="_blank" rel="noreferrer" href={personalAccounts.linkedin}>
            <span>Linkedin account</span>
            <FontAwesomeIcon icon={brands("linkedin")} />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href={"mailto:" + personalAccounts.gmail}
          >
            <span>Gmail account</span>
            <FontAwesomeIcon icon={solid("envelope")} />
          </a>
        </Contacts>
        <ContactForm />
      </ContactsContainer>
    </ContactSectionContainer>
  );
};

export default ContactSection;
