import React, { useState, useEffect } from "react";
import { projectsData } from "../data";
import { projectsNav } from "../data";
import Project from "./Project";
import { fetchProject } from "../utils/fetchProject";
import { fetchCategory } from "../utils/fetchCategory";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [filterItem, setFilterItem] = useState("");
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchCategory()
      .then((res) => {
        setCategory(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const fetchAllProjects = () => {
    setLoading(true);
    fetchProject()
      .then((res) => {
        setProjects(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchAllProjects();

    return () => {
      fetchAllProjects();
    };
  }, []);

  // useEffect(() => {
  //   // get projects base on item
  //   if (item === "all") {
  //     fetchProject().then((res) => {
  //       setProjects(res);
  //     });
  //   } else {
  //     const newProjects = projects.filter((project) => {
  //       return project.category.title.toLowerCase() === item;
  //     });
  //     setProjects(newProjects);
  //   }
  // }, [item]);

  const handleClick = (e, index, val) => {
    if (val.title === "All") {
      setFilterItem("");
      setActive(index);
      fetchAllProjects();
    } else {
      setFilterItem(val.title.toLowerCase());
      setActive(index);
    }
  };

  if (loading) return <div>Loading data....</div>;
  return (
    <section className="snap-center">
      <nav className="w-full ">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {category.map((val, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index, val);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {val.title}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* // projects grid */}

      <div className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
        {projects
          .filter((val) =>
            val.category.title.toLocaleLowerCase().includes(filterItem)
          )
          .map((val) => {
            return (
              <AnimatePresence>
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                  }}
                >
                  <Project item={val} key={val._id} />
                </motion.div>
              </AnimatePresence>
            );
          })}
      </div>
    </section>
  );
};

export default Projects;
