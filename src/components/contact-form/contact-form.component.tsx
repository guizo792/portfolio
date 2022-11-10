import { useState, FormEvent, ChangeEvent } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { ContactContainer } from "./contact-form.styles";

const defaultFormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, subject, message } = formFields;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <ContactContainer>
      <h2>Let's get in touch</h2>
      <span>Send me a message</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          required
          onChange={handleChange}
          name="name"
          value={name}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Subject"
          type="text"
          required
          onChange={handleChange}
          name="subject"
          value={subject}
        />

        {/* <FormInput
          label="Message"
          type="text-area"
          required
          onChange={handleChange}
          name="message"
          value={message}
          className="message-input"
        /> */}
        <textarea
          name="message"
          cols={10}
          rows={5}
          placeholder="enter your message..."
        ></textarea>
        <Button type="submit">Send message</Button>
      </form>
    </ContactContainer>
  );
};

export default ContactForm;
