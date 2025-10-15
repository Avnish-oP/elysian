import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Team", path: "/team" },
  ];

  const socialLinks = [
    { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
    { icon: FaXTwitter, url: "https://twitter.com", label: "X (Twitter)" },
    { icon: FaLinkedin, url: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center">
              <img
                src="/ipu-logo.png"
                alt="Elysian Logo"
                className="h-12 w-auto"
              />
              <img src="/logo.png" alt="Elysian Logo" className="h-12 w-auto" />
            </Link>
          </motion.div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2"
                >
                  <motion.span
                    className={`text-white text-lg font-medium relative z-10 ${
                      location.pathname === item.path ? "text-purple-400" : ""
                    }`}
                    whileHover={{
                      textShadow: "0 0 8px rgba(168, 85, 247, 0.8)",
                    }}
                  >
                    {item.name}
                  </motion.span>

                  {/* Hover background effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{
                      opacity: 1,
                      scale: 1,
                      boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg -z-0"
                  />

                  {/* Active page indicator */}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Social Links - Right */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.8))",
                  y: -3,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="relative text-white hover:text-purple-400 transition-colors duration-300"
                aria-label={social.label}
              >
                <motion.div
                  whileHover={{
                    filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.8))",
                  }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
