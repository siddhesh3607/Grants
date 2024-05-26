import Page from "@/components/page";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com'; // Import EmailJS library

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    debugger;
    event.preventDefault();
  
    const formData = {
      Name: name,
      Email: email,
      Subject: subject,
      Message: message
    };
  
    console.log('Form Data:', formData); // Log form data for debugging
  
    emailjs.send(
      'service_rjvwojn', // Service ID
      'template_qr3ffdg', // Template ID
      formData, // Form data
      'lNFsVYsko5bQOgxUL' // User ID (API Key)
    )
    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send message, please try again.');
      }
    );
  
    // Clear form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };
  

  return (
    <Page noLoading>
      <h1 style={{ fontSize: '35px', color: '#ff6600' }}>
        <strong>Contact Us</strong>
      </h1>

      <div className="container">
        <div className="figure-animation"></div>
        <div className="form-container">
          <p className="form-header" style={{ textAlign: 'center' }}>
            <strong>Submit your contact info to get in touch with our Customer Experience Team.</strong>
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Your Message"
              />
            </div>
            <button type="submit" style={{ backgroundColor: '#ff5722' }}>Send Message</button>
          </form>
        </div>
      </div>
    </Page>
  );
}