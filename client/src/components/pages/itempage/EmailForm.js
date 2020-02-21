import React, { useState } from 'react';

const EmailForm = props => {
  const { itemName, sendEmail } = props;

  const [emailFormData, setEmailFormData] = useState({
    sender: '',
    topic: 'inquiry about ' + itemName,
    message: '',
    itemname: itemName
  });

  const [isMessageSent, setIsMessageSent] = useState(false);

  const { sender, topic, message } = emailFormData;

  // Just an onChange handler that changes the state of the form with every key stroke
  const onChange = e =>
    setEmailFormData({ ...emailFormData, [e.target.name]: e.target.value });

  const sendEmailHandler = e => {
    e.preventDefault();
    setIsMessageSent(true);
    sendEmail({ emailFormData });
  };

  return (
    <div className='itempage__form'>
      {!isMessageSent ? (
        <div className='itempage__form__container'>
          <form onSubmit={e => sendEmailHandler(e)}>
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
                name='topic'
                value={topic}
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
