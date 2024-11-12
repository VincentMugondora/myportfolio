import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  // Define project details including links
  const projectsData = [
    {
      title: "ECO FINE",
      des: "ECO FINE is a sustainable platform designed to promote eco-friendly products and practices. Users can explore a variety of green products, learn about sustainability, and make informed choices to reduce their environmental impact.",
      src: projectOne,
      githubLink: "https://github.com/VincentMugondora/Eco-Fine",
      demoLink: "https://eco-fine.vercel.app/",
    },
    {
      title: "E-commerce Website",
      des: "This E-commerce website provides a seamless shopping experience with features like product browsing, shopping cart management, and secure checkout. It aims to connect buyers and sellers in a user-friendly environment.",
      src: projectTwo,
      githubLink: "https://github.com/VincentMugondora/react-ecommerce-app",
      demoLink: "https://react-ecommerce-app-alpha.vercel.app/",
    },
    {
      title: "Chatting App",
      des: "The Chatting App allows users to communicate in real-time through text messages. It features user authentication, chat rooms, and direct messaging, making it easy for friends and colleagues to stay connected.",
      src: projectThree,
      githubLink: "https://github.com/VincentMugondora/Social-Media-App",
      demoLink: "https://social-media-app-drab-omega.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectsData.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
