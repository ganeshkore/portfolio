const skillsData = [
  {
    title: "Frontend",
    groups: [
      {
        label: "Languages",
        items: ["HTML5", "SCSS", "JavaScript", "TypeScript"],
      },
      {
        label: "Frameworks / Libraries",
        items: ["React", "Tailwind CSS", "Axios"],
      },
      {
        label: "Tools",
        items: ["Vite", "Git", "GitHub"],
      },
    ],
  },
  {
    title: "Backend",
    groups: [
      {
        label: "Languages",
        items: ["Java", "SQL"],
      },
      {
        label: "Frameworks",
        items: ["Spring", "Spring Boot", "JPA (Hibernate)"],
      },
      {
        label: "Databases",
        items: ["MySQL", "PostgreSQL"],
      },
      {
        label: "Tools",
        items: ["Postman", "Maven"],
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-zinc-950 px-6 py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-emerald-500 mb-3">
            What I Know
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
            Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/40 transition-shadow shadow-md hover:shadow-emerald-500/20"
            >
              <h3 className="text-xl font-semibold text-zinc-100 mb-6">
                {skill.title}
              </h3>

              {skill.groups.map((group, gIdx) => (
                <div key={gIdx} className="mb-5">
                  <h4 className="text-sm font-medium text-zinc-400 mb-2">
                    {group.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, iIdx) => (
                      <span
                        key={iIdx}
                        className="px-3 py-1 text-sm rounded-full bg-zinc-800 text-zinc-300 hover:bg-emerald-500 hover:text-zinc-900 transition"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
