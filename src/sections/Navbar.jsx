import { useState, useEffect } from "react";
import { motion } from "motion/react";

function Navigation({ closeMenu }) {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "experience", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active link

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile menu if it's open
    if (closeMenu) {
      closeMenu();
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <ul className="nav-ul">
      {navItems.map(item => (
        <li key={item.id} className="nav-li group">
          <motion.a
            className={`nav-link block ${
              activeLink === item.id ? "text-lavender" : ""
            }`}
            href={`#${item.id}`}
            onClick={e => handleSmoothScroll(e, item.id)}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{item.label}</span>
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-lavender/20 to-aqua/20 opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.3 },
              }}
            />
          </motion.a>
        </li>
      ))}
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Kumar
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation closeMenu={closeMenu} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
