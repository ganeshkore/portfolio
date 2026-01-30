import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const commands = [
  { label: "Go to Projects", action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Go to Skills", action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Go to Contact", action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = [
    ...commands,
  
  ].filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-32">
      <div className="w-full max-w-xl rounded-xl bg-white dark:bg-zinc-900 shadow-2xl border border-zinc-200 dark:border-zinc-800">
        
        <input
          autoFocus
          placeholder="Type a command..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-5 py-4 bg-transparent outline-none text-zinc-800 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800"
        />

        <ul className="max-h-72 overflow-y-auto">
          {filtered.map((cmd, i) => (
            <li
              key={i}
              onClick={() => {
                cmd.action();
                setOpen(false);
                setQuery("");
              }}
              className="px-5 py-3 cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              {cmd.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommandPalette;
