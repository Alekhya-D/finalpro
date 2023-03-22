import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:teamdreamfly@gmail.com">
        <Button>Contact: teamdreamfly@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
