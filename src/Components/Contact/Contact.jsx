import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "adityaEmailJs", // Replace with your EmailJS service ID
        "template_4gcwuld", // Replace with your EmailJS template ID
        form.current,
        "v0qByTfgsy0kUtPZK" // Replace with your EmailJS user ID (or public key)
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  const classA = "text-white body-font relative bg-gray-900 ";
  return (
    <div>
      <section className={classA} id="contact">
        <div className="container mx-auto px-0 sm:px-5 py-24">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Feel free to reach out to me!
            </p>
          </div>
          <div className="w-full md:w-2/3 lg:w-1/2 mx-auto border border-purple-500 rounded-xl p-5">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full sm:w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full sm:w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
