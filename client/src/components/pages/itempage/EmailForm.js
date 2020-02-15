import React, { useState } from 'react';

const EmailForm = () => {
  const [emailFormData, setEmailFormData] = useState({
    sender: '',
    subject: '',
    emailtext: ''
  });

  const { recipient, sender, subject, emailtext } = emailFormData;

  // Just an onChange handler that changes the state of the form with every key stroke
  const onChange = e =>
    setEmailFormData({ ...emailFormData, [e.target.name]: e.target.value });

  const sendEmail = e => {
    e.preventDefault();

    fetch(
      // `/api/gallery/send-email/${sender}/${subject}/${emailtext}`
      `/api/gallery/send-email/${sender}/thisisthetopicfornow/${emailtext}`
    ).catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={e => sendEmail(e)}>
        {/* <form> */}
        <label>your email:</label>
        <input
          type='text'
          name='sender'
          value={sender}
          onChange={e => onChange(e)}
        ></input>
        <br></br>
        <label>inquiry about the item:</label>
        <input
          type='textarea'
          name='emailtext'
          value={emailtext}
          onChange={e => onChange(e)}
        ></input>
        <br></br>
        <input
          type='submit'
          className='itempage__button'
          value='ask about the item'
        />
      </form>
    </div>
  );
};

export default EmailForm;
