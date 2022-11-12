import { useState, FormEvent, ChangeEvent } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { ContactContainer } from "./contact-form.styles";
import { showAlert } from "src/utils/alerts";

const defaultFormFields = {
  user_name: "",
  user_email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { user_name, user_email, subject, message } = formFields;
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    showAlert("waiting", "sending message...");

    emailjs
      .sendForm(
        "service_2duml5k",
        "template_e02nbaj",
        form.current as unknown as string,
        "eN0XFoM0m695KiHsO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormFields(defaultFormFields);
          showAlert("success", "Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          setFormFields(defaultFormFields);
          showAlert("error", "Message sending failed");
        }
      );
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <ContactContainer>
      <h2>Let's get in touch</h2>
      <span>Send me a message</span>
      <form ref={form} onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          required
          onChange={handleChange}
          name="user_name"
          value={user_name}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="user_email"
          value={user_email}
        />

        <FormInput
          label="Subject"
          type="text"
          required
          onChange={handleChange}
          name="subject"
          value={subject}
        />

        <textarea
          name="message"
          value={message}
          cols={10}
          required
          onChange={handleChange}
          rows={5}
          placeholder="enter your message..."
        ></textarea>
        <Button className="submit-btn" type="submit">
          Send message
        </Button>
      </form>
    </ContactContainer>
  );
};

export default ContactForm;
