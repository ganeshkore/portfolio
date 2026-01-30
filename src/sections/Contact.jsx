const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-zinc-950 px-6 py-28 overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-emerald-500 mb-3">
            Let’s Connect
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Get In Touch
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Open to opportunities, collaborations, and meaningful professional
            discussions.
          </p>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact info */}
          <div className="space-y-5">
            {[
              {
                icon: "📞",
                title: "Phone",
                value: "+91 8208430169",
              },
              {
                icon: "📧",
                title: "Email",
                value: "ganeshkore51@gmail.com",
                link: "mailto:ganeshkore51@gmail.com",
              },
              {
                icon: "💼",
                title: "LinkedIn",
                value: "linkedin.com/in/ganeshkore",
                link: "https://linkedin.com/in/ganeshkore",
              },
              {
                icon: "🐙",
                title: "GitHub",
                value: "github.com/ganeshkore",
                link: "https://github.com/ganeshkore",
              },
              {
                icon: "📍",
                title: "Location",
                value: "Pune, Maharashtra, India",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-emerald-500/40 transition"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="text-sm text-zinc-400">{item.title}</h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-100 hover:text-emerald-500 transition"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-zinc-100">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Resume + Socials */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

            <h3 className="text-2xl font-semibold text-zinc-100 mb-3">
              Want to know more?
            </h3>
            <p className="text-zinc-400 mb-6">
              Download my resume for a detailed overview of my skills, projects,
              and professional experience.
            </p>

            <a
              href="https://ganeshkore.github.io/portfolio/assets/GaneshResume_8208430169.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-zinc-900 font-medium rounded-lg hover:bg-emerald-600 transition"
            >
              ⬇ Download Resume
            </a>

            {/* Social links */}
            <div className="mt-8 pt-6 border-t border-zinc-800">
              <p className="text-sm text-zinc-400 mb-4">
                Or connect with me here
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://instagram.com/ganesh_4747_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-pink-500 hover:text-white transition"
                >
                  📸 Instagram
                </a>

                <a
                  href="https://facebook.com/ganesh.kore.534622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-blue-600 hover:text-white transition"
                >
                  📘 Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-20 text-center text-sm text-zinc-500">
          Built by Dev. <strong>Ganesh</strong> with ❤️ 
        </p>
      </div>
    </section>
  );
};

export default Contact;
