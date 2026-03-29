import { useEffect, useState, useRef } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Sun,
  Moon,
  Github,
  Linkedin,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  // { name: "Testimonials", href: "#testimonials", icon: MessageSquare },
  { name: "Contact", href: "#contact", icon: Mail },
  // { name: "Blog", href: "https://blogni.vercel.app", icon: BookOpen },
];

const iconBtn =
  "flex p-2 rounded-full backdrop-blur-md border shadow-sm items-center justify-center transition " +
  "bg-white/80 dark:bg-black/70 " +
  "text-gray-700 dark:text-gray-300 " +
  "border-gray-200 dark:border-gray-700 " +
  "hover:bg-gray-100 dark:hover:bg-gray-800"+
  "transition-all duration-200";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full 
             bg-white/80 dark:bg-black/80 
             text-gray-800 dark:text-gray-300
             hover:bg-gray-100 dark:hover:bg-gray-800 
             border border-gray-200 dark:border-gray-700 
             shadow-sm transition"
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#hero");
  const lastScrollYRef = useRef(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      lastScrollYRef.current = currentScrollY;

      const sections = navItems
        .filter((item) => item.href.startsWith("#"))
        .map((item) => item.href);
      const scrollPosition = currentScrollY + 120;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {/* Fixed full-width header */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40",
          "border-b border-gray-200/60 dark:border-gray-800/60",
          "bg-background/80 backdrop-blur-xl",
          "text-foreground",
        )}
      >
        <div className="w-full px-4 sm:px-6 lg:px-6 h-16 flex items-center justify-between gap-4">
          {/* Left: Brand */}
          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors"
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? "✕" : "☰"}
            </button>
            <div className="hidden md:flex items-center gap-2">
              <div
                className="h-8 w-8 rounded-full overflow-hidden 
                bg-background border border-border
                flex items-center justify-center shadow-md"
              >
                <img
                  src="/logo.png"
                  alt="logo"
                  className="w-[90%] h-[90%] object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight text-left">
                <span className="text-sm font-semibold text-foreground">
                  Vatsal Chandrani
                </span>
                <span className="text-[11px] text-muted-foreground hidden lg:block">
                  Portfolio
                </span>
              </div>
            </div>
          </div>

          {/* Center: Nav links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium flex items-center gap-1.5 transition-colors",
                  activeSection === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary",
                )}
              >
                <item.icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Right: actions (theme, social) */}
          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />

            <motion.a
              href="https://github.com/vatsal-99"
              target="_blank"
              rel="noopener noreferrer"
              className={iconBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/vatsal-chandrani"
              target="_blank"
              rel="noopener noreferrer"
              className={iconBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu (hamburger) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div
              className="absolute inset-0 bg-black/20 dark:bg-black/50"
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              className="absolute top-0 left-0 h-full w-72 max-w-[85vw]
              bg-background border-r border-border shadow-xl flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    {/* Logo */}
                    <div
                      className="h-10 w-10 rounded-full overflow-hidden
                      bg-card border border-border
                      flex items-center justify-center shadow-sm"
                    >
                      <img
                        src="/logo.png"
                        alt="logo"
                        className="w-[85%] h-[85%] object-contain"
                      />
                    </div>

                    {/* Name */}
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm font-semibold text-foreground">
                        Vatsal Chandrani
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Full Stack Developer
                      </span>
                    </div>
                  </div>
                </div>

                {/* Menu */}
                <div className="p-2 flex-1 overflow-y-auto">
                  {navItems
                    .filter((item) => item.href.startsWith("#"))
                    .map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",

                          activeSection === item.href
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-muted/50",
                        )}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </a>
                    ))}
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
