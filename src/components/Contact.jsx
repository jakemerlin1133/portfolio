import React, { useRef } from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Wallpaper1 from "../assets/black-wallpaper1.jpg";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wzf2nww", "template_gz5t2gj", form.current, {
        publicKey: "-U7lmlgRr1B2F7xci",
      })
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent!");
          form.current.reset();
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <>
      <div
        className="z-[1] h-full w-full"
        style={{
          background: `url(${Wallpaper1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.h1
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-center font-bold text-5xl italic py-20"
        >
          Contact Me
        </motion.h1>

        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 rounded-lg px-10 2xl:pb-[99px] sm:pb-4">
            <motion.h1
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-gray-300 font-bold text-3xl text-center"
            >
              Contact Details
            </motion.h1>

            <div className="text-white flex my-10">
              <h1 className="text-md font-thin">
                Feel free to get in touch with me for collaboration, networking,
                or any opportunities where I can contribute my skills in web
                development, software engineering, or machine learning. I am
                always open to connecting with like-minded professionals and
                exploring projects that drive innovation and impact.
              </h1>
            </div>

            <div className="underline border-t-2 border-gray-300 px-10"></div>

            <div className="flex my-8 sm:my-14">
              <IoCall className="text-gray-400 text-3xl" />
              <h1 className="ml-4 text-gray-200"> +63 9187584371</h1>
            </div>

            <div className="flex my-8 sm:my-14">
              <MdEmail className="text-gray-400 text-3xl" />
              <h1 className="ml-4 text-gray-200"> jakemerlin123@gmail.com</h1>
            </div>

            <div className="flex my-8 sm:my-14">
              <FaLocationDot className="text-gray-400 text-3xl" />
              <h1 className="ml-4 text-gray-200">
                #239, Brgy. Maasin, Mangaldan, Pangasinan
              </h1>
            </div>

            <div className="w-full gap-4 flex flex-nowrap justify-start text-white sm:px-12 py-4">
              <motion.a
                whileHover={{ scale: 1.4 }}
                initial={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                href="https://www.facebook.com/profile.php?id=100070937980239&sk=photos"
                target="https://www.facebook.com/profile.php?id=100070937980239&sk=photos"
                rel="noopener noreferrer"
                className="opacity-100 text-gray-400"
              >
                <FaFacebookSquare className="text-4xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.4 }}
                initial={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                href="https://www.linkedin.com/in/jake-russel-merlin-888b54283/"
                target="https://www.linkedin.com/in/jake-russel-merlin-888b54283/"
                rel="noopener noreferrer"
                className="opacity-100 text-gray-400"
              >
                <FaLinkedin className="text-4xl opacity-100" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.4 }}
                initial={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                href="https://www.instagram.com/jakemerlin123/"
                target="https://www.instagram.com/jakemerlin123/"
                rel="noopener noreferrer"
                className="opacity-100 text-gray-400"
              >
                <FaInstagramSquare className="text-4xl opacity-100" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.4 }}
                initial={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                href="https://github.com/jakemerlin1133"
                target="https://github.com/jakemerlin1133"
                rel="noopener noreferrer"
                className="opacity-100 text-gray-400"
              >
                <FaGithub className="text-4xl opacity-100" />
              </motion.a>
            </div>
          </div>

          <div className="w-full sm:w-1/2 sm:px-8 py-8 pb-16">
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="flex px-4 pb-4 sm:pb-8">
                <div className="w-1/2 flex flex-col">
                  <input
                    className="outline-none py-4 mx-2 px-2 rounded-md text-gray-500 font-semibold"
                    id="first_name"
                    name="firs_tname"
                    type="text"
                    placeholder="First Name"
                  />
                </div>

                <div className="w-1/2 flex flex-col">
                  <input
                    className="outline-none py-4 mx-2 px-2 rounded-md text-gray-500 font-semibold"
                    id="last_name"
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="flex flex-col px-6 pb-4 sm:pb-8 text-center">
                <input
                  className="outline-none py-4 px-2 rounded-md text-gray-500 font-semibold"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="px-6 pb-4 sm:pb-6">
                <textarea
                  className="outline-none w-full py-2 px-2 rounded-md text-gray-500 font-semibold"
                  placeholder="Message"
                  rows={10}
                  name="message"
                />
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  initial={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-white bg-gradient-to-b from-sky-800 via-sky-700 to-sky-800 font-semibold px-8 py-2 text-md rounded-lg"
                >
                  {" "}
                  Submit
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
