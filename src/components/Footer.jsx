import { ArrowUp, Linkedin, Github, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/vatsal-chandrani", label: "LinkedIn" },
    { icon: <Github size={18} />, href: "https://github.com/vatsal-99", label: "GitHub" },
    { icon: <Mail size={18} />, href: "mailto:vatsal.chandrani.dev@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: "vatsalchandrani99@gmail.com", href: "mailto:vatsalchandrani99@gmail.com" },
    { icon: <Phone size={16} />, text: "+91 6351700021", href: "tel:+916351700021" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Glass background container */}
        <motion.div
          className="backdrop-blur-lg bg-card text-white rounded-xl p-8 border border-gray-200/60 shadow-lg dark:border-gray-700/60"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Branding */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-bold text-muted-foreground text-left">
                VATSAL CHANDRANI
              </h3>
              <p className="text-muted-foreground text-sm text-left">
                Full stack developer with 5+ years in enterprise web React,
                ASP.NET, SQL, and REST APIs.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-muted-foreground transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants} className="hidden md:block">
              <h4 className="text-muted-foreground font-medium mb-4 text-sm uppercase tracking-wider">
                Navigation
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      className="text-muted-foreground transition-colors duration-300 text-sm text-left"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h4 className="text-muted-foreground font-medium mb-4 text-sm uppercase tracking-wider text-left">
                Contact
              </h4>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3 text-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-muted-foreground mt-0.5">
                      {info.icon}
                    </span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="transition-colors duration-300 text-muted-foreground"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-gray-600 dark:text-white/90">
                        {info.text}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-left">
              <h4 className="text-muted-foreground font-medium text-sm uppercase tracking-wider">
                Resume
              </h4>
              <p className="text-muted-foreground text-sm">
                PDF with roles, projects, and education same detail as this
                site, formatted for recruiters.
              </p>
              <a
                href="/Vatsal_Chandrani_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full hover:border-primary/70 hover:text-primary/90 justify-center px-4 py-2 rounded-md text-sm font-medium border border-primary text-primary bg-transparent hover:bg-primary/10 transition-all duration-300"
              >
                Download resume
              </a>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/50 flex flex-col items-center text-xs text-gray-600 dark:text-white/90 space-y-4 sm:space-y-0 sm:flex-row sm:justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="mt-1 text-muted-foreground">
                Made with ❤️ by Vatsal
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-muted-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground transition-colors">
                Cookies
              </a>
              <motion.a
                href="#hero"
                aria-label="Back to top"
                className="p-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={16} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};