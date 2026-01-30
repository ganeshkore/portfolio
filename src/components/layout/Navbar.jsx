import { useEffect, useState } from "react";

const sections = [
    {label: "Home" , id:"home"},
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl border border-zinc-800/60 bg-zinc-900/70 backdrop-blur-md shadow-lg overflow-hidden">
      
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="font-semibold text-zinc-100">
          Dev<span className="text-emerald-500">.</span>Ganesh
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-sm">
          {sections.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`cursor-pointer relative transition
                ${
                  active === item.id
                    ? "text-emerald-500"
                    : "text-zinc-400 hover:text-emerald-400"
                }
              `}
            >
              {item.label}

              {active === item.id && (
                <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-emerald-500" />
              )}
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          {/* Cmd K hint */}
          <div className="hidden sm:flex text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-400">
            Ctrl K
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl text-zinc-200"
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu (slide animation) */}
      <div
        className={`md:hidden transition-all duration-300 ease-out
          ${open
            ? "max-h-64 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
          }
        `}
      >
        <ul className="flex flex-col gap-3 px-6 pb-4 text-sm">
          {sections.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`cursor-pointer transition
                ${
                  active === item.id
                    ? "text-emerald-500"
                    : "text-zinc-300 hover:text-emerald-400"
                }
              `}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
