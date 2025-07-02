import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import Logo from "./images/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Vision", path: "/vision" },
  { name: "Mission", path: "/mission" },
  { name: "Workshops", path: "/workshops" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const containerVariants = {
  hidden: { opacity: 0, y: -30, scaleY: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scaleY: 0.8,
    transition: {
      duration: 0.3,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 flex items-center justify-center">
              <img
                src={Logo}
                alt="Soil Steps Logo"
                className="h-8 w-20 soil-to-tree-grow"
              />
            </div>
            <span className="font-poppins font-bold text-xl text-foreground group-hover:text-soil-water transition-colors">
              Soil Steps
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive(item.path)
                    ? "text-soil-water bg-soil-water/10 shadow-sm"
                    : "text-foreground/80 hover:text-soil-water hover:bg-soil-water/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-soil-water hover:bg-soil-water/5 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden origin-top overflow-hidden bg-background/95 backdrop-blur-sm border-t border-border/40"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.path)
                          ? "text-soil-water bg-soil-water/10"
                          : "text-foreground/80 hover:text-soil-water hover:bg-soil-water/5"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
