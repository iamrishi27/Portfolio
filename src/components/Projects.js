// import React from 'react';
// import Project from './Project';

// function Projects() {
//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "Developed a dynamic e-commerce platform with user authentication, product management, and shopping cart features.",
//       technologies: "MERN Stack",
//       link: "#"
//     },
//     {
//       title: "Real Estate Website",
//       description: "Built a full-stack real estate platform with property search and listing functionality.",
//       technologies: "React, Redux, Firebase, Node.js, MongoDB",
//       link: "#"
//     }
//   ];

//   return (
//     <section className="projects" data-aos="fade-up">
//       <h2>Projects</h2>
//       <div className="project-list">
//         {projects.map((project, index) => (
//           <Project key={index} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;



import React from 'react';
import Project from './Project';

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Developed a dynamic e-commerce platform with user authentication, product management, and shopping cart features.",
      technologies: "MERN Stack",
      link: "#"
    },
    {
      title: "Real Estate Website",
      description: "Built a full-stack real estate platform with property search and listing functionality.",
      technologies: "React, Redux, Firebase, Node.js, MongoDB",
      link: "#"
    },
    {
      title: "Todo List App",
      description: "A simple and interactive todo list application allowing users to add, delete, and mark tasks as completed.",
      technologies: "React, Redux, Local Storage",
      link: "#"
    },
    {
      title: "Login Form",
      description: "Created a responsive login form with validation and authentication features.",
      technologies: "React, Firebase Authentication, Tailwind CSS",
      link: "#"
    }
  ];

  return (
    <section className="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
