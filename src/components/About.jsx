import React from "react";
import { motion } from "framer-motion";

import Wallpaper1 from "../assets/black-wallpaper1.jpg";
import Profile from "../assets/profile1.jpg";
import Profile1 from "../assets/profile5.jpg";
import Profile2 from "../assets/profile2.jpg";
export const About = () => {
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
          className="text-gray-300 text-center font-bold text-6xl sm:text-5xl italic pt-28 pb-10"
        >
          About Me
        </motion.h1>

        <div className="flex flex-wrap pb-10">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/2 z-20 p-5 pb-16 flex items-center justify-center"
          >
            <img
              className="justify-center rounded-[20px] z-20"
              src={Profile}
              alt="Profile"
              width={370}
              height={60}
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/2 z-20 flex items-center justify-center"
          >
            <div className="text-center px-10" id="content">
              <p className="text-gray-300 text-justify leading-relaxed text-lg">
                <span className="ml-4"></span>As a passionate and driven
                developer, I am constantly seeking opportunities to enhance my
                expertise in web development, software engineering, and machine
                learning. With hands-on experience in building full-stack
                applications using frameworks like Laravel, Django, and React, I
                am committed to crafting efficient, scalable, and user-friendly
                solutions. I have a solid understanding of machine learning
                concepts and geospatial analysis, leveraging tools like Google
                Earth Engine and Azure Machine Learning. My goal is to
                continuously grow my skill set and contribute to innovative
                projects that make a meaningful impact. I am dedicated to
                becoming a well-rounded developer who excels in both technical
                proficiency and problem-solving.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap pb-10 z-40">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/2 z-20 flex items-center justify-center"
          >
            <div className="text-center px-10" id="content">
              <p className="text-gray-300 text-justify leading-relaxed text-lg">
                <span className="ml-4"></span>I am a Bachelor of Science in
                Computer Science graduate from Universidad de Dagupan, and I
                proudly hail from Pangasinan. During my internship at Highly
                Succeed Inc. in Mandaluyong City, Manila, I gained valuable
                hands-on experience in software development. My journey into the
                world of technology has been largely self-driven, as I have
                continuously honed my skills through self-study and dedication
                to learning from online resources. I am committed to expanding
                my knowledge and improving myself every day, with the goal of
                becoming a highly skilled and impactful developer.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/2 z-20 p-5 flex items-center justify-center"
          >
            <img
              className="justify-center rounded-[20px] z-20"
              src={Profile1}
              alt="Profile1"
              width={500}
              height={500}
            />
          </motion.div>
        </div>

        <div className="flex flex-wrap pb-10 z-40">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/2 z-20 p-5 flex items-center justify-center"
          >
            <img
              className="justify-center rounded-[20px] z-20"
              src={Profile2}
              alt="Profile2"
              width={370}
              height={60}
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/2 z-20 flex items-center justify-center"
          >
            <div className="text-center px-10" id="content">
              <p className="text-gray-300 text-justify leading-relaxed text-lg">
                <span className="ml-4"></span>In addition to my technical
                abilities, I am a strong believer in the importance of
                collaboration and communication within a team. I enjoy working
                in dynamic environments where I can learn from others while also
                sharing my insights. Whether it's developing new features,
                solving complex problems, or optimizing existing systems, I am
                always eager to take on new challenges and contribute to the
                success of any project. My adaptability and passion for
                continuous learning make me confident in my ability to navigate
                the ever-evolving world of technology.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
