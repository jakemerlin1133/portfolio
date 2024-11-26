import React from "react";
import { FaComputer } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import Wallpaper1 from "../assets/black-wallpaper1.jpg";

import { motion } from "framer-motion";

export const Skills = () => {
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
          className="text-gray-300 text-center font-bold text-5xl italic pt-12 pb-20"
        >
          My Skills
        </motion.h1>
        <div className="flex flex-wrap sm:flex-nowrap text-white pb-10 px-6 gap-12">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/3 text-center border-2 rounded-xl p-6"
          >
            <FaComputer className="text-5xl mx-auto text-gray-300" />
            <h1 className="text-3xl font-bold mb-4 mt-2 text-gray-300">
              Web Development
            </h1>
            <p className="text-gray-200">
              Proficient in building dynamic web applications using frameworks
              like Laravel and Django, with experience in both front-end and
              back-end technologies, including React and Tailwind CSS for
              responsive design.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/3 text-center border-2 rounded-xl p-6"
          >
            <MdComputer className="text-5xl mx-auto text-gray-300" />
            <h1 className="text-3xl font-bold mb-4 mt-2 text-gray-300">
              Software Engineer
            </h1>
            <p className="text-gray-200">
              Skilled in developing scalable software solutions, leveraging
              programming best practices, version control, and continuous
              integration, with a focus on delivering efficient and maintainable
              code.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/3 text-center border-2 rounded-xl p-6"
          >
            <RiComputerLine className="text-5xl mx-auto text-gray-300" />
            <h1 className="text-3xl font-bold mb-4 mt-2 text-gray-300">
              Machine Learning
            </h1>
            <p className="text-gray-200">
              Experienced in applying machine learning algorithms and data
              processing techniques, with hands-on expertise in tools like Azure
              Machine Learning and libraries for geospatial analysis, such as
              Google Earth Engine and geemap.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};
