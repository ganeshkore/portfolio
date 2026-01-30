import React from "react";
import Navbar from "./components/layout/Navbar";
import CommandPalette from "./components/command/CommandPalette";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      {/* Fixed UI */}
      <Navbar />
      <CommandPalette />

      {/* Page content */}
      <main>
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
};

export default App;
