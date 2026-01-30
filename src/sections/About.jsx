const About = () => {
  return (
    <section
      id="about"
      className="relative bg-zinc-950 px-6 py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-emerald-500 mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
            Who I Am
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            I am a passionate Full Stack Developer with hands-on experience in building scalable, secure, and high-performance web applications.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Bio */}
          <div>
            <h3 className="text-xl font-semibold text-zinc-100 mb-4">
              Professional Summary
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              I am a Full Stack Developer skilled in Java, Spring Boot, React, and modern web technologies. I enjoy solving real-world problems and creating clean, maintainable code.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              I have internship experience, have built multiple full-stack projects, and continuously improve my skills by learning industry best practices and system design concepts.
            </p>


            <div className="border border-zinc-800 mt-7 rounded-xl p-6 hover:border-emerald-500/40 transition">
              <h4 className="text-lg font-semibold text-zinc-100 mb-2">
                💼 Internship Experience
              </h4>
              <p className="text-zinc-300 font-medium">
                Software Developer Intern – Techne AI Pvt. Ltd
              </p>
              <p className="text-zinc-400 text-sm mb-2">6 Months</p>
              <ul className="list-disc list-inside text-zinc-400 text-sm space-y-1">
                <li>Worked on real-world web applications</li>
                <li>Built and integrated frontend features using React</li>
                <li>Collaborated with developers in an agile environment</li>
              </ul>
            </div>
          </div>

          

          {/* Right: Education & Internship */}
          <div className="space-y-8">
            {/* Education Timeline */}
            <div className="border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/40 transition">
              <h4 className="text-lg font-semibold text-zinc-100 mb-4">
                🎓 Education
              </h4>

              {/* MCA */}
              <div className="mb-3">
                <p className="text-zinc-300 font-medium">
                  MES Institute of Management and Career Courses
                </p>
                <p className="text-zinc-400 text-sm">
                  Master of Computer Applications (CGPA: 8.05) • June 2024 • Pune, Maharashtra
                </p>
              </div>

              {/* BSc */}
              <div className="mb-3">
                <p className="text-zinc-300 font-medium">
                  Yashwantrao Chavan Institute of Science
                </p>
                <p className="text-zinc-400 text-sm">
                  Bachelor of Computer Science (CGPA: 9.81) • June 2022 • Satara, Maharashtra
                </p>
              </div>

              {/* Class XII */}
              <div className="mb-3">
                <p className="text-zinc-300 font-medium">   Yashwantrao Chavan Institute of Science</p>
                <p className="text-zinc-400 text-sm">
                  Class XII (HSC) • 62.15% • June 2019 • Satara, Maharashtra
                </p>
              </div>

              {/* Class X */}
              <div>
                <p className="text-zinc-300 font-medium">Anant English School</p>
                <p className="text-zinc-400 text-sm">
                  Class X (SSC) • 83.00% • June 2017 • Satara, Maharashtra
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/40 transition">
              <h4 className="text-lg font-semibold text-zinc-100 mb-2">
                📜 Certifications
              </h4>
              <ul className="list-disc list-inside text-zinc-400 text-sm space-y-1">
                <li>Java Full Stack Development – QSpiders Deccan, Pune • June 2025</li>
              </ul>
            </div>

            {/* Internship */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
