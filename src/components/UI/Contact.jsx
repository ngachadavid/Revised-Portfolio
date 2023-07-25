import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  // const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_email';
    const templateId = 'template_6539uxg';
    const userId = 'ectIXcjfg9xRxCqA7';

    emailjs
      .send(serviceId, templateId, formValues, userId)
      .then((response) => {
        console.log('SUCCESS', response.status, response.text);
        setFormValues({
          user_name: '',
          user_email: '',
          subject: '',
          message: '',
        });
        // setMessage('Thank you for contacting me. I will get back to you as soon as possible.');
      })
      .catch((err) => {
        console.log('FAILED:', err);
        // setMessage('Sorry, an error occurred. Please try again later.');
      });
  };

  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">Get in Touch</h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8177883749836!2d36.81988707332369!3d-1.2831742356192901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5d2a8bf2f%3A0x584569be8b3354cc!2sNation%20Centre%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1687028911513!5m2!1sen!2ske"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form onSubmit={handleSubmit} className="w-full">
              {/* {message && <p>{message}</p>} */}
              <div className="mb-5">
                <input
                  value={formValues.user_name}
                  onChange={handleChange}
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  value={formValues.user_email}
                  onChange={handleChange}
                  type="text"
                  name="user_email"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  value={formValues.subject}
                  onChange={handleChange}
                  type="text"
                  name="subject"
                  placeholder="Enter your subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  required
                />
              </div>

              <div className="mb-5">
                <textarea
                  type="text"
                  value={formValues.message}
                  onChange={handleChange}
                  name="message"
                  placeholder="Write your message"
                  rows={3}
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
