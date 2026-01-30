const projectsData = [
  {
    title: "ShopEase",
    tech: "Java • Spring Boot • React • JPA • JWT Auth • Redux Toolkit • Tailwind CSS • MySQL",
    desc: `ShopEase is a scalable, full-stack e-commerce platform engineered with a modern Java backend and
      a React frontend. The backend efficiently manages core business logic, database operations, and
      secure client-server communication via REST APIs. JWT Authentication with role-based authorization
      protects transactional data for products, carts, and orders—all accessible through the admin dashboard.
      The frontend uses Redux Toolkit for global state management and Tailwind CSS for a clean, responsive interface.`,
   
  },
  {
    title: "Inventory Management",
    tech: "React • JavaScript • Tailwind CSS • Axios • Mock API",
    desc: `A modern, responsive React-based web application to manage a collection of books with full CRUD
      functionality. The application uses a clean dark-themed UI, supports API-driven data, and is deployed live using Netlify.`,
    github: "https://github.com/ganeshkore/Book-Inventory-Management-System",
    live: "https://inventory-management-books.netlify.app/",
  },
  {
    title: "TodoList",
    tech: "React • Vite • Tailwind CSS • LocalStorage • Context API",
    desc: `A simple and efficient TodoList application built using React, Vite, and Tailwind CSS.
      Demonstrates useContext for state management and localStorage to persist todos across sessions.`,
    github: "https://github.com/ganeshkore/todolist",
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-zinc-950 px-6 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-emerald-500 mb-3">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className="project-card bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/40 transition-shadow shadow-md hover:shadow-emerald-500/20"
            >
              <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-emerald-500 mb-3">{project.tech}</p>
              <p className="text-zinc-400 mb-4">{project.desc}</p>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-emerald-500 text-zinc-900 rounded-md hover:bg-emerald-600 transition"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-zinc-800 border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-500 hover:text-zinc-900 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
