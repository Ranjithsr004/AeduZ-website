import React from 'react'
import './ContactPage.css'
const ContactPage = () => {
  return (
    <div className="contact pt-10 ">
      <div className="contact-col">
        <div className='con-left'>
        <h3>Send us a message <img src="./assets/message.png" alt="" /></h3>
        <p>AeduZ is your premier destination for personalized mentorship. Through our innovative platform & network of experienced mentors, we empower the students, filled them with confidence & resilience to overcome challenges & achieve their educational goals.</p>
        <ul>
            <li><img src="https://cdn-icons-png.flaticon.com/128/646/646094.png" alt="" />aeduz@gmail.com</li>
            <li><img src="https://cdn-icons-png.flaticon.com/128/126/126341.png" alt="" />+91 123456789</li>
            <li><img src="https://cdn-icons-png.flaticon.com/128/484/484167.png" alt="" />Students Residential Area, IIT Bombay, 400076</li>
        </ul>
        </div>
      </div>
      <div className="contact-col">
        <form>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your Name" />
            <label>Your Email</label>
            <input type="email" name="name" placeholder="Enter your Email" />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number"/>
            <label>Your Role as Query</label>
            {/* <input type="text" name="name" placeholder="Enter your Query" /> */}
            <select name="role" id="role">
              <option value="-1">Select</option>
              <option value="mentor">Mentor</option>
              <option value="mentie">Mentie</option>
              <option value="others">others</option>
            </select>
            <label >Write your message here</label>
            <textarea name="message" row="6" placeholder="Enter your message"></textarea>
            <button type="submit" className="btn-cs">Submit now </button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
