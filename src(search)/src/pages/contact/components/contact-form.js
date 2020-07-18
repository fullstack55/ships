import React from 'react';
import PropTypes from 'prop-types';
import Input from "../../../components/common/input-field/input-field";
import TextArea from "../../../components/common/text-area/text-area";
import Select from "../../../components/common/select-with-label/select-with-label";
import Button from "../../../components/common/button/button";

import './contact-form.sass';

const ContactForm = () => (
  <div className="contact-form-container">
    <form>
      <div className="contact-form-container-header">
        <span className="contact-form-container-header-first">
          CONTACT
        </span>
        <span>
          &nbsp;
        </span>
        <span className="contact-form-container-header-last">
          FORM
        </span>
      </div>
      <div className="contact-form-container-body">
        <div>
          <Input
            label="Name:"
            placeholder="Build"
            type="text"
            className="contact-form-container-body-input"
          />
          <Input
            label="Email:"
            placeholder="info@example.com"
            type="email"
            className="contact-form-container-body-input"
          />
          <Select
            label="Subject:"
            options={ [{
              label: 'Option 1',
              value: '1'
            }, {
              label: 'Option 2',
              value: '2'
            }]}
            placeholder="Select a subject"
            className="contact-form-container-body-input"
          />
        </div>
        <div>
          <TextArea
            label="Message:"
            placeholder="Build"
            className="contact-form-container-body-text-area"
          />
        </div>
        <div>
          <Button
            variant="secondary"
          >
            Send Your Message
          </Button>
        </div>
      </div>
    </form>
  </div>
)

ContactForm.propTypes = {
  onSubmit: PropTypes.func
};

export default ContactForm;