import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {

  const [result, setResult] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "6d054d1f-8326-4a82-82af-b53060bb804f");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-900 dark:text-white underline underline-offset-8">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Panel */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Feel free to reach out for collaborations, questions, or just a friendly hello.
            </p>

            <div className="w-16 h-1 bg-blue-500 rounded-full" />

            {/* Contact Items */}
            {[
              {
                icon: 'fa-location-dot',
                label: 'Location',
                details: ['Mumbai, Maharashtra'],
              },
              {
                icon: 'fa-envelope-open-text',
                label: 'Email',
                details: ['prajapatikrishna562@gmail.com', 'kp3891353@gmail.com'],
              },
              {
                icon: 'fa-phone',
                label: 'Phone',
                details: ['+91 9029109451', '+91 8080037901'],
              },
            ].map(({ icon, label, details }) => (
              <div key={label} className="flex items-start gap-4">
                <i className={`fa-solid ${icon} p-4 bg-gray-200 dark:bg-gray-700 text-blue-600 text-xl rounded-lg`} />
                <div>
                  <p className="text-xl font-semibold text-gray-800 dark:text-white">{label}</p>
                  {details.map((d) => (
                    <p key={d} className="text-gray-500 dark:text-gray-400">{d}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form Panel */}
          <form
            onSubmit={onSubmitHandler}
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Send Message</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Drop me a message and I’ll respond as soon as possible.
            </p>

            {/* Name / Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  name='name'
                  className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-md bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Company</label>
                <input
                  type="text"
                  name='company'
                  placeholder="Your Company"
                  className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-md bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Phone / Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Phone</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name='number'
                  className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-md bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  name='email'
                  required
                  placeholder="Your Email"
                  className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-md bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">Subject</label>
              <input
                type="text"
                required
                name='subject'
                placeholder="Subject Line"
                className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-md bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                rows="4"
                required
                name="message"
                placeholder="Your Message"
                className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-md bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
            >
              <i className="fa-solid fa-paper-plane mr-2" /> {result ? result : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
