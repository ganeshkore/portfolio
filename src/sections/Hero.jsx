import { useEffect, useRef } from "react";

const Hero = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      if (glowRef.current) {
        glowRef.current.style.setProperty("--x", `${x}%`);
        glowRef.current.style.setProperty("--y", `${y}%`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-zinc-950"
    >
      {/* Mouse reactive glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 hero-glow pointer-events-none"
      />

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="floating-icon top-24 left-10">⚛️</span>
        <span className="floating-icon bottom-32 right-16 delay-1">☕</span>
        <span className="floating-icon top-1/2 right-1/3 delay-2">🧩</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <p className="text-sm uppercase tracking-widest text-emerald-500 mb-4 fade-in">
          Welcome to my portfolio
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-zinc-100">
          Hi, I&apos;m{" "}
          <span className="text-emerald-500">Ganesh</span>
          <br />
          <span className="typing-text">Full Stack Developer</span>
        </h1>

        <p className="text-zinc-400 max-w-xl mx-auto mb-10">
          I design and build scalable, secure, and high-performance web
          applications with clean architecture and modern UI.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects">
            <button className="magnetic-btn primary">
              View Projects
            </button>
          </a>

          {/* View Resume */}
          <a
            href="/assets/GaneshResume_8208430169.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="magnetic-btn secondary">
              View Resume
            </button>
          </a>

          {/* Download Resume */}
          <a
            href="/assets/GaneshResume_8208430169.pdf"
            download
          >
            <button className="magnetic-btn secondary">
              Download Resume
            </button>
          </a>
        </div>

        {/* Tech stack */}
        <div className="mt-12 text-sm text-zinc-500">
          React • Spring Boot • PostgreSQL • Tailwind
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 text-zinc-500 animate-bounce">
        ↓ Scroll
      </div>
    </section>
  );
};

export default Hero;
