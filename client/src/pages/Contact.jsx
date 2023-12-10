import React from "react";
import { useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value, //name is in [] so it can be used dynamically cuz every input have diff name
    });
  };

  // setContact((prev) => ({
  //   ...prev,
  //   [name]: value,                 2ND APPROACH====
  // }))

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <main>
          <div className="section-contact">
            <div className="contact-content container">
              <h1 className="contact-main-heading mb-3">Contact Us</h1>
            </div>
            <div className="container grid grid-two-cols">
              <div className="contact-image">
                <img
                  src="/images/support.png"
                  alt=""
                  width={520}
                  height={500}
                />
              </div>

              <div className="section-form">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={contact.username}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={contact.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      type="text"
                      cols={30}
                      rows={5}
                      name="message"
                      id="message"
                      required
                      autoComplete="off"
                      value={contact.message}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <button type="submit" className="btn btn-submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55095.46972436545!2d78.02202314851345!3d30.337679171560982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d712928f9683%3A0x4401beae23e757eb!2sIT%20PARK%20SAHASTRADHARA%20ROAD%2C%20DEHRADUN!5e0!3m2!1sen!2sin!4v1701501079960!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};

export default Contact;
