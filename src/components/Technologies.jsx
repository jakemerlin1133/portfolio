import React from "react";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiXampp } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

import { motion } from "framer-motion";

export const Technologies = () => {
  return (
    <>
      <div className="bg-black">
        <motion.h1
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-center font-bold text-5xl italic pt-16 pb-20"
        >
          My Technology Stack
        </motion.h1>

        <div className="text-white grid grid-cols-2 sm:grid-cols-5 sm:gap-2">
          <div className="p-6 rounded-lg mx-auto">
            <a href="https://react.dev/" target="https://react.dev/">
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <FaReact className="mx-auto mb-6 text-6xl text-cyan-500" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">React</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a href="https://laravel.com/" target="https://laravel.com/">
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <FaLaravel className="mx-auto mb-6 text-6xl text-red-600" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">Laravel</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a
              href="https://www.djangoproject.com/"
              target="https://www.djangoproject.com/"
            >
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <DiDjango className="mx-auto mb-6 text-6xl text-green-700" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">Django</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a href="https://www.mysql.com/" target="https://www.mysql.com/">
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <SiMysql className="mx-auto mb-6 text-6xl text-blue-500" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">MySql</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a href="https://html.com/" target="https://html.com/">
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <FaHtml5 className="mx-auto mb-6 text-6xl text-orange-600" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">HTML</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a
              href="https://www.w3schools.com/css/"
              target="https://www.w3schools.com/css/"
            >
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <FaCss3 className="mx-auto mb-6 text-6xl text-blue-600" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">CSS</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a
              href="https://tailwindcss.com/"
              target="https://tailwindcss.com/"
            >
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <RiTailwindCssFill className="mx-auto mb-6 text-6xl text-cyan-500" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">TailwindCSS</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a href="https://wordpress.com/" target="https://wordpress.com/">
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <FaWordpress className="mx-auto mb-6 text-6xl" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">WordPress</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a href="https://www.python.org/" target="https://www.python.org/">
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <FaPython className="mx-auto mb-6 text-6xl text-yellow-300" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">Python</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a href="https://www.php.net/" target="https://www.php.net/">
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <SiPhp className="mx-auto mb-6 text-6xl text-indigo-600" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">PHP</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a
              href="https://www.java.com/en/"
              target="https://www.java.com/en/"
            >
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <FaJava className="mx-auto mb-6 text-6xl text-blue-800" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">JAVA</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a
              href="https://www.postman.com/"
              target="https://www.postman.com/"
            >
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <SiPostman className="mx-auto mb-6 text-6xl text-orange-500" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">POSTMAN</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a href="https://jupyter.org/" target="https://jupyter.org/">
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <SiJupyter className="mx-auto mb-6 text-6xl text-orange-400" />
              </motion.div>
              <div className="text-xl font-bold text-center">
                Jupyter Notebook
              </div>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a
              href="https://www.javascript.com/"
              target="https://www.javascript.com/"
            >
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <SiJavascript className="mx-auto mb-6 text-6xl text-yellow-300" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">JavaScript</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a
              href="https://www.apachefriends.org/"
              target="https://www.apachefriends.org/"
            >
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <SiXampp className="mx-auto mb-6 text-6xl text-orange-500" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">Xampp</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a
              href="https://code.visualstudio.com/"
              target="https://code.visualstudio.com/"
            >
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <SiVisualstudiocode className="mx-auto mb-6 text-6xl text-sky-600" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">
                Visual Studio Code
              </h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a href="https://git-scm.com/" target="https://git-scm.com/">
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <FaGitAlt className="mx-auto mb-6 text-6xl text-red-500" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">Git</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a href="https://github.com/" target="https://github.com/">
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <FaGithub className="mx-auto mb-6 text-6xl text-white-500" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">Github</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a href="https://bitbucket.org/" target="https://bitbucket.org/">
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <FaBitbucket className="mx-auto mb-6 text-6xl text-blue-500" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">Bitbucket</h1>
            </a>
          </div>

          <div className="p-6 rounded-lg mx-auto">
            <a
              href="https://getbootstrap.com/"
              target="https://getbootstrap.com/"
            >
              <motion.div
                whileHover={{ scale: 1.3 }}
                initial={{ y: -10 }}
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <FaBootstrap className="mx-auto mb-6 text-6xl text-purple-500" />
              </motion.div>
              <h1 className="text-xl font-bold text-center">Bootstrap</h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
