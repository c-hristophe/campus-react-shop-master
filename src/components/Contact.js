import React, { useState } from "react";
import { Input, Button, Form, TextArea } from 'semantic-ui-react'
const FORM_ENDPOINT = "https://public.herotofu.com/v1/6916c380-6808-11ed-bd0a-c1ef0a3c8340";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Merci!</h2>
        <div>Je vous recontacte rapidement.</div>
      </>
    );
  }

  return (
    <Form>
     
    <form
      action={"https://public.herotofu.com/v1/6916c380-6808-11ed-bd0a-c1ef0a3c8340"}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <Input type="text" placeholder="Nom" name="name" required />
      </div>
      <div>
        <Input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <TextArea placeholder="votre message" name="message" required />
      </div>
      <div>
        <Button type="submit"> Envoyer </Button>
      </div>
    </form>
   
   </Form>
  );
};

export default ContactForm;
