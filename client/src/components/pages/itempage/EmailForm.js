import React, { useState } from 'react';

const EmailForm = props => {
  const { itemName } = props;

  const [emailFormData, setEmailFormData] = useState({
    sender: '',
    subject: 'inquiry about ' + itemName,
    message: ''
  });

  const [isMessageSent, setIsMessageSent] = useState(false);

  const { sender, subject, message } = emailFormData;

  // Just an onChange handler that changes the state of the form with every key stroke
  const onChange = e =>
    setEmailFormData({ ...emailFormData, [e.target.name]: e.target.value });

  const sendEmail = e => {
    e.preventDefault();

    setIsMessageSent(true);

    fetch(
      // `/api/gallery/send-email/${sender}/${subject}/${emailtext}`
      `/api/gallery/send-email/dosis@csumb.edu/${sender}/${subject}/${message}`
    ).catch(err => console.log(err));
  };

  return (
    <div className='itempage__form'>
      {!isMessageSent ? (
        <div className='itempage__form__container'>
          <form onSubmit={e => sendEmail(e)}>
            <div className='itempage__form__group'>
              <label>Email Address:</label>
              <input
                type='text'
                name='sender'
                value={sender}
                onChange={e => onChange(e)}
                className='itempage__form__input'
              ></input>
            </div>
            <div className='itempage__form__group'>
              <label>Subject:</label>
              <input
                type='text'
                name='subject'
                value={subject}
                onChange={e => onChange(e)}
                className='itempage__form__input'
              ></input>
            </div>
            <div className='itempage__form__group'>
              <label>Message:</label>
              <textarea
                name='message'
                value={message}
                onChange={e => onChange(e)}
                className='itempage__form__textarea'
              ></textarea>
            </div>
            <input
              type='submit'
              className='itempage__form__button'
              value='ask about the item'
            />
          </form>
        </div>
      ) : (
        <div className='itempage__form__messagesuccess'>
          <p>
            item inquiry is successful, please allow us up to two days to
            respond to the email you provided
          </p>
        </div>
      )}
    </div>
  );
};

export default EmailForm;
