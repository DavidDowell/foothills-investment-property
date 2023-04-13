import React from 'react';
import { Link, animateScroll } from 'react-scroll';

const Contact = () => {
  return (
    <section>
      <div>Contact Us</div>
      <div>
        <div class="contact-info">
          <div>
            <h3>Noble Oak Solutions</h3>
            <p>
              Any questions or concerns?
              <br />
              Let us know and we'll be happy to talk to you!
            </p>

            <address>
              365 Main Ave SW <br />
              Hickory, NC <br />
              28602 <br />
              Phone Number: <a href="#reach-out"> 828-838-1274 </a>
            </address>
          </div>

          <div class="contact-form">
            <h3>Contact Us</h3>
            <form>
              <label for="contact-name">Your Name</label>
              <input type="text" id="contact-name" placeholder="Your Name" />

              <label for="contact-message">Message</label>
              <textarea id="contact-message" placeholder="Message"></textarea>

              <button type="submit" className="bg-emerald-200">
                Submit
              </button>
            </form>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.7837505392176!2d-81.34679132287093!3d35.73153652720673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88512e2b750c3e75%3A0x57418a8a9b6c378!2s365%20Main%20Ave%20SW%2C%20Hickory%2C%20NC%2028602!5e0!3m2!1sen!2sus!4v1681418385138!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Hello"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
