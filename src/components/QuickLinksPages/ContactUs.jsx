import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: "",
      mobile: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="h-full flex flex-col justify-between bg-[#fff7f7]">
      
      <div className="px-6 md:px-16 py-10">
        

        <h1 className="text-3xl md:text-4xl font-bold text-[#5C0B15] text-center mb-6">
          Contact Us
        </h1>


        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          For Any Questions Or Queries, Whether You’re Already A Customer Or A Potential Customer, 
          Feel Free To Reach Out To Our Friendly And Knowledgeable Customer Support Team.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          
          <div className="bg-white p-6 rounded-xl shadow-md space-y-6">

            <div>
              <h2 className="text-lg font-semibold text-[#5C0B15]">📧 Email Us</h2>
              <p className="text-gray-700">care@traditionbyavisha.com</p>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                We will always respond as soon as possible. Expect a response within 
                24–48 hours on weekdays. During public holidays, responses may take longer.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#5C0B15]">💬 WhatsApp</h2>
              <p className="text-gray-700">9023606654</p>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Speak with our support team Monday to Friday (11:00 AM – 7:30 PM).  
                This number is for WhatsApp messages only — voice calls are not available.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#5C0B15]">🕒 Supporting Timing</h2>
              <p className="text-gray-700">
                Monday to Saturday (11:00 AM – 7:30 PM)
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#5C0B15]">📍 Location</h2>
              <p className="text-gray-700">
                Ahmedabad, Gujarat – 380001
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Crafted with tradition in Ahmedabad — delivered with love across India ❤️
              </p>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              If you have specific feedback or questions you'd like to discuss, 
              don’t hesitate to drop us a message. Our team will reach out within 24–48 hours on weekdays.
            </p>
          </div>

          
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md space-y-4"
          >
            <h2 className="text-xl font-semibold text-[#5C0B15]">
              Send a Message
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A61E2C]"
              required
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile No."
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A61E2C]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A61E2C]"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A61E2C]"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#5C0B15] text-white py-2 rounded-lg hover:bg-[#7a0f1f] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;