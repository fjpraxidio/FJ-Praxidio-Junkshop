import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9a6fe8de-590c-4355-ae22-a2fed183b4d5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact container'>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <h4>Operating hours</h4>
        <p>Monday – Saturday: 7am –5pm</p>
        <p>Sunday: 7am – 3pm</p>
        <ul>
            <li><img src={mail_icon} alt="" />fjpraxidio@gmail.com</li>
            <li><img src={phone_icon} alt="" />+09284692248 : FRANK D. PRAXIDIO</li>
            <li><img src={location_icon} alt="" />Pasay City – Quezon City – Antipolo City</li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
