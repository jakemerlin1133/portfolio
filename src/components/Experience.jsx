import React from "react";
import "../style.css";

import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <>
      <div className="z-[1] h-full w-full bg-black pb-16">
        <motion.h1
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-center font-bold text-4xl sm:text-5xl italic pt-10 pb-10"
        >
          My Experience
        </motion.h1>

        <div className="w-full text-center flex my-12">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className=" w-1/2 flex justify-center items-center border-r-2 border-gray-300 rounded-sm"
          >
            <h1 className="text-gray-300 italic font-semibold px-2">
              July 10, 2024 - August 22, 2024 (Internship){" "}
            </h1>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-300 w-1/2 sm:px-20"
          >
            <h1 className="text-3xl font-bold px-2 italic">
              Highly Succeed Inc.
            </h1>
            <h2 className="mt-4 px-2">
              - 3rd Flr., Royal Plaza Commercial Center, DM Guevarra St.
              Mandaluyong City, Philippines 1550
            </h2>
          </motion.div>
        </div>

        <div className="text-white flex flex-wrap sm:flex-nowrap px-4 gap-4 ">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.7 }}
            className="w-full sm:w-1/4 rounded-2xl p-8  bg-gradient-to-t from-zinc-700 to-zinc-900"
          >
            <h1
              className="text-md text-center font-bold mb-4 text-gray-50"
              id="style"
            >
              Contribute to major applications
            </h1>

            <ul className="list-disc text-gray-300">
              <li className="mb-4">
                <h4 className="font-bold mb-2">HAI Application</h4>
                <p>
                  Fixed the bugs and also helped to re-design the frontend of
                  the application.
                </p>
              </li>

              <li className="mb-4">
                <h4 className="font-bold mb-2">HMS Application</h4>
                <p>
                  Integrated the data from laravel api to Record module page
                  using React.
                </p>
              </li>

              <li className="mb-4">
                <h4 className="font-bold mb-2">HRMS Application</h4>
                <p>
                  Create the database entity such as Documents, Employee, and
                  Benefits using the LARAVEL
                </p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.7 }}
            className="w-full sm:w-1/4 rounded-2xl p-8 bg-gradient-to-t from-zinc-700 to-zinc-900"
          >
            <h1
              className="text-md text-center font-bold mb-4 text-gray-50"
              id="style"
            >
              Collaboration of the teams
            </h1>

            <ul className="list-disc text-gray-300">
              <li className="mb-4">
                <p>
                  Experienced to collaborate with different teams in web
                  development department.
                </p>
              </li>

              <li className="mb-4">
                <p>
                  Provided effective support and guidance to team members,
                  ensuring smooth progress on tasks despite tight deadlines.
                </p>
              </li>

              <li className="mb-4">
                <p>
                  Utilized strong problem-solving skills to address and resolve
                  issues promptly, helping the team stay on track.
                </p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.7 }}
            className="w-full sm:w-1/4 rounded-2xl p-8 bg-gradient-to-t from-zinc-700 to-zinc-900 "
          >
            <h1
              className="text-md text-center font-bold mb-4 text-gray-50"
              id="style"
            >
              Developing and Implementing Machine Learning Models
            </h1>
            <ul className="list-disc text-gray-300">
              <li className="mb-4">
                <p>
                  Explored and utilized Machine Learning to develop and
                  implement machine learning models, gaining hands-on experience
                  in data preparation, model training, and evaluation.
                </p>
              </li>

              <li className="mb-4">
                <p>
                  Practiced Python programming to enhance model development and
                  streamline data processing workflows.
                </p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.7 }}
            className="w-full sm:w-1/4 rounded-2xl p-8 bg-gradient-to-t from-zinc-700 to-zinc-900 "
          >
            <h1
              className="text-md text-center font-bold mb-4 text-gray-50"
              id="style"
            >
              Assigned as a Team leader
            </h1>
            <ul className="list-disc text-gray-300">
              <li className="mb-4">
                <p>
                  Led and coordinated a team of web developers to deliver
                  high-quality projects on time and within scope.
                </p>
              </li>

              <li className="mb-4">
                <p>
                  Facilitated communication and collaboration within the team,
                  ensuring effective problem-solving and project management.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};
