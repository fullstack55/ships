import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/common/footer/footer";
import Title from "../../components/common/title/title";
import ContactTitle from "./components/contact-title";
import ContactForm from "./components/contact-form";
import emailIcon from "../../assets/images/desktop/contact/email.png";
import phoneIcon from "../../assets/images/desktop/contact/phone.png";
import visitIcon from "../../assets/images/desktop/contact/visit.png";
import "./contact.sass";

const ContactPage = () => (
  <>
    <Header info={false} />
    <Title boldText="CONTACT" regularText="US" />
    <div className="contact-title-container">
      <ContactTitle
        icon={emailIcon}
        primaryText="Email Us"
        secondaryText="We would like to hear your ideas"
        footer="info@example.com"
      />
      <ContactTitle
        icon={phoneIcon}
        primaryText="Phone Us"
        secondaryText="Lorem ipsum dolor sit amet, consectetur"
        footer="+10 123 456 789"
      />
      <ContactTitle
        icon={visitIcon}
        primaryText="Visit Us"
        secondaryText="Lorem ipsum dolor sit amet"
        footer="123, Main Street, Paris, France"
      />
    </div>
    <ContactForm />
    <Footer />
  </>
);

export default ContactPage;
