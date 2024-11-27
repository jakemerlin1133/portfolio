import React from "react";
import { motion } from "framer-motion";

import Wallpaper1 from "../assets/black-wallpaper1.jpg";
import HAI from "../assets/HAI.png";
import HMS from "../assets/HMS.png";
import HRMS from "../assets/HRMS.png";
import AZURE from "../assets/AZURE.png";

export const Projects = () => {
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
          className="text-gray-300 text-center font-bold text-5xl sm:text-7xl italic pt-40 pb-10"
        >
          My Projects
        </motion.h1>

        <motion.h1
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-center font-bold text-6xl sm:text-6xl italic pt-28"
        >
          Internship
        </motion.h1>

        <div className="flex flex-wrap pb-10 z-40">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/2 z-20 p-5 pb-16 flex items-center justify-center"
          >
            <img
              className="justify-center rounded-[20px] z-20 sm:h-[300px] sm:w-[500px] mt-32"
              src={HAI}
              alt="HAI"
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/2 z-20 flex items-center justify-center"
          >
            <div className="text-center px-10" id="content">
              <h1 className="text-gray-300 text-center font-bold text-6xl sm:text-5xl italic pb-8">
                HAI App
              </h1>
              <p className="text-gray-300 text-justify leading-relaxed text-lg">
                <span className="ml-4"></span>I was able to identify and fix
                several bugs within the application, which improved its overall
                performance and stability. In addition to bug fixes, I also
                collaborated with the team to re-design the frontend of the
                application, enhancing its user interface and user experience.
                This redesign involved updating the layout, colors, and visual
                elements to make the application more modern and visually
                appealing. I worked closely with the design team to ensure that
                the new design aligned with user needs and provided a more
                intuitive navigation experience. As a result, the application
                became more user-friendly and was well-received by its users.
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
              <h1 className="text-gray-300 text-center font-bold text-6xl sm:text-5xl italic pb-8">
                HMS App
              </h1>
              <p className="text-gray-300 text-justify leading-relaxed text-lg">
                <span className="ml-4"></span>I successfully integrated data
                from the Laravel API into the Record Modules page using React,
                ensuring seamless data flow between the frontend and backend.
                This integration involved configuring API endpoints and managing
                the state within the React components to display dynamic data
                efficiently. I collaborated with the backend team to ensure that
                the API responses were optimized and properly formatted for use
                in the frontend. Additionally, I implemented error handling and
                loading states to improve the user experience during data
                retrieval. As a result, the Record Modules page now displays
                real-time, accurate data, enhancing the functionality of the
                application.
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
              className="justify-center rounded-[20px] z-20 sm:h-[300px] sm:w-[500px] mt-20"
              src={HMS}
              alt="HMS"
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
              className="justify-center rounded-[20px] z-20 sm:h-[300px] sm:w-[500px] mt-20"
              src={HRMS}
              alt="HRMS"
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/2 z-20 flex items-center justify-center"
          >
            <div className="text-center px-10" id="content">
              <h1 className="text-gray-300 text-center font-bold text-6xl sm:text-5xl italic pb-8">
                HRMS App
              </h1>
              <p className="text-gray-300 text-justify leading-relaxed text-lg">
                <span className="ml-4"></span>I designed and created several key
                database entities, including Documents, Employee, and Benefits,
                using Laravel's Eloquent ORM to ensure efficient and scalable
                database management. For each entity, I defined appropriate
                relationships, such as one-to-many and many-to-many, to model
                the data structure accurately and facilitate seamless
                interaction between different entities. I also ensured data
                integrity by setting up validation rules and constraints for the
                attributes of each entity. Additionally, I implemented migration
                files to handle the creation and modification of database
                tables, which allowed for smooth deployment across different
                environments. As a result, the system now supports complex data
                operations and is easily extendable for future features.
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
              <h1 className="text-gray-300 text-center font-bold text-6xl sm:text-5xl italic pb-8">
                Azure Machine Learning
              </h1>
              <p className="text-gray-300 text-justify leading-relaxed text-lg">
                <span className="ml-4"></span>I gained hands-on experience in
                training machine learning models, including data processing and
                cleaning techniques essential for preparing datasets. This
                involved preprocessing raw data, handling missing values,
                normalizing features, and performing other necessary
                transformations to ensure the datasets were suitable for
                training. I also explored and utilized Azure Machine Learning
                Studio for building and deploying models, leveraging its
                powerful tools to streamline the process. In addition, I worked
                with Python notebooks to experiment with various algorithms and
                evaluate model performance using different metrics. Through this
                process, I gained valuable insights into the full lifecycle of
                machine learning projects, from data preparation to model
                deployment.
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
              className="justify-center rounded-[20px] z-20 sm:h-[300px] sm:w-[500px] mt-20"
              src={AZURE}
              alt="AZURE"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};
