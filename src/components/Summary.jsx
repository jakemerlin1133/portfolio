import React from "react";
import "../style.css";
import Profile from "../assets/profile-2.png";
import Wallpaper1 from "../assets/black-wallpaper1.jpg";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Summary = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/contact");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Jake Russel L. Merlin - Resume.pdf";
    link.download = "Jake Russel L. Merlin - Resume.pdf";
    link.click();
  };

  return (
    <>
      <div
        className="z-[1] h-auto w-full"
        style={{
          background: `url(${Wallpaper1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-wrap 2xl:pt-40 sm:pt-20">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/2 sm:z-40 flex items-center justify-center"
          >
            <motion.div
              className="text-center px-10 pb-6  pt-24 sm:pt-2 sm:pl-24 "
              id="content"
            >
              <h6 className="text-gray-300 text-2xl font-italic sm:text-start">
                Hello
              </h6>
              <h1 className="text-4xl lg:text-6xl font-bold italic text-gray-300 sm:text-start">
                I'm Jake Russel
              </h1>

              <h3 className="text-3xl pb-4 pt-2 font-bold italic bg-gradient-to-r from-sky-400 to-sky-500 bg-clip-text tracking-tight text-transparent sm:text-start">
                Software Developer
              </h3>
              <p className="text-gray-300 sm:text-start text-sm">
                A passionate and driven developer, I am constantly seeking
                opportunities to enhance my expertise in web development,
                software engineering, and machine learning.
              </p>
              <div className="flex gap-4 pt-8 justify-center sm:justify-start sm:pl-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  initial={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-800 bg-gradient-to-b from-sky-600 to-sky-400 from-60% px-4 rounded-sm font-semibold"
                  onClick={handleDownload}
                >
                  Resume
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  initial={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-sky-400 border-sky-500 border-2 px-4 py-2 rounded-sm font-semibold"
                  onClick={handleNavigation}
                >
                  Contact Me
                </motion.button>
              </div>

              <div className="w-full gap-7 flex flex-nowrap justify-center sm:justify-start text-gray-200 sm:px-8 mt-8">
                <motion.a
                  whileHover={{ scale: 1.3 }}
                  initial={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  href="https://www.facebook.com/profile.php?id=100070937980239&sk=photos"
                  target="https://www.facebook.com/profile.php?id=100070937980239&sk=photos"
                  rel="noopener noreferrer"
                  className="opacity-100"
                >
                  <FaFacebookSquare className="text-3xl" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.3 }}
                  initial={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  href="https://www.linkedin.com/in/jake-russel-merlin-888b54283/"
                  target="https://www.linkedin.com/in/jake-russel-merlin-888b54283/"
                  rel="noopener noreferrer"
                  className="opacity-100"
                >
                  <FaLinkedin className="text-3xl" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.3 }}
                  initial={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  href="https://www.instagram.com/jakemerlin123/"
                  target="https://www.instagram.com/jakemerlin123/"
                  rel="noopener noreferrer"
                  className="opacity-100"
                >
                  <FaInstagramSquare className="text-3xl" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.3 }}
                  initial={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  href="https://github.com/jakemerlin1133"
                  target="https://github.com/jakemerlin1133"
                  rel="noopener noreferrer"
                  className="opacity-100"
                >
                  <FaGithub className="text-3xl" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="w-full sm:w-1/2 z-40 flex mb-0">
            <motion.img
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="justify-center rounded-[20px] hidden sm:block mx-auto drop-shadow-2xl sm:h-[480px] sm:w-[480px] 2xl:h-[710px] 2xl:w-[710px]"
              src={Profile}
              alt="Profile"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};
