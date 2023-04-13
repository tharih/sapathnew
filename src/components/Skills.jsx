import React from "react";
import { skills } from "../data";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <section className="relative py-12 bg-[url('https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-fixed skill-bg-after">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-8 md:grid-flow-row ">
          {skills.slice(0, skills.length / 2).map((skill, index) => {
            return (
              <motion.div
                initial={{
                  x: -300,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="flex items-center justify-center z-10"
                key={index}
              >
                <img src={skill.image} alt="" />
              </motion.div>
            );
          })}
          {skills
            .slice(skills.length / 2, skills.length)
            .map((skill, index) => {
              return (
                <motion.div
                  initial={{
                    x: 300,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="flex items-center justify-center z-10"
                  key={index}
                >
                  <img src={skill.image} alt="" />
                </motion.div>
              );
            })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
