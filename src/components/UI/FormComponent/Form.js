import React, { useState } from 'react';
import styles from '../../../styles/form.module.scss';
import globalStyles from '../../../styles/hero.module.scss';
import emailjs from 'emailjs-com';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [emailStatus, setEmailStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();

    emailjs.send('service_92e1b2e', 'template_yopvtz9', formData, 'Kz5eqBPQi8KUQMEkT')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setEmailStatus('Success');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((err) => {
        console.log('FAILED', err);
        setEmailStatus('failed');
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitButton}>
      <div className={styles.formGroup}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <textarea
          name="message"
          rows={5}
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button className={globalStyles.primaryButton} type="submit">
        Send
      </button>

     {/* Display email status */}
     {emailStatus && (
        <div className={`status ${emailStatus === 'success' ? 'success' : 'failed'}`}>
          {emailStatus === 'Success' ? 'Message sent successfully!' : 'Failed to send message.'}
        </div>
      )}
    </form>
  );
};

export default Form;