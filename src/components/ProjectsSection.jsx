import { ArrowRight, ExternalLink, Github, ChevronUp, Star, Code, ChevronDown, MoveRight, Filter, Sparkles, Award, Zap, Play, Eye, Calendar, Users, X } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// const projects = [
//   {
//     id: 1,
//     title: "Public Safety Software Platform",
//     category: "Enterprise",
//     description:
//       "Enterprise software used in public safety—incident and records workflows, dispatch-facing features, and integrations with other agency systems.",
//  fullDescription:   
//    image: "/projects/project1.jpg",
//     tags: ["React", "Node.js", "Socket.IO", "FeathersJS", "SQL Server"],
//     demoUrl: "#",
//     githubUrl: "#",
//     featured: true,
//     accentColor: "from-orange-500 to-amber-500",
//     status: "Live",
//     highlights: [
//       "React modules for incident and records management",
//       "Real-time updates for dispatch and reporting teams",
//       "Secure, service-based integrations across systems",
//     ],
//   },
//   {
//     id: 2,
//     title: "Records Management System (RMS)",
//     category: "Enterprise",
//     description:
//       "Modern RMS platform for managing offender records, arrests, charges, bookings, and case history—built with real-time architecture and integrated with CAD systems.",
//  fullDescription:   
//  image: "/projects/project6.png",
//     tags: ["React", "Node.js", "Socket.IO", "FeathersJS", "SQL"],
//     demoUrl: "#",
//     githubUrl: "#",
//     featured: true,
//     accentColor: "from-red-500 to-orange-500",
//     status: "Live",
//     highlights: [
//       "Complete offender lifecycle: booking → charges → case tracking",
//       "Real-time updates using Socket.IO across multiple users",
//       "Integrated with CAD for seamless incident-to-record conversion",
//       "Advanced search, reporting, and audit logs",
//     ],
//   },
//   {
//     id: 3,
//     title: "Offender Management System (OMS)",
//     category: "Enterprise",
//     description:
//       "Desktop-based offender management system for handling bookings, custody tracking, and record maintenance with robust backend services and offline capabilities.",
//  fullDescription:   
//    image: "/projects/project7.png",
//     tags: ["C#", ".NET", "WPF", "Service Worker", "SQL Server"],
//     demoUrl: "#",
//     githubUrl: "#",
//     featured: true,
//     accentColor: "from-indigo-500 to-blue-500",
//     status: "Live",
//     highlights: [
//       "WPF-based desktop interface for secure law enforcement usage",
//       "Service worker for background processing and sync",
//       "Efficient offender tracking and custody management",
//       "Reliable performance in low or offline network conditions",
//     ],
//   },
//   {
//     id: 3,
//     title: "Document E‑Commerce Platform",
//     category: "E‑Commerce",
//     description:
//       "NopCommerce-based document marketplace: subscriptions, digital delivery, and integrations with CRM and payment providers.",
//  fullDescription:   
//    image: "/projects/project2.png",
//     tags: ["ASP.NET", "REST APIs", "Payments", "E-sign APIs"],
//     demoUrl: "#",
//     githubUrl: "#",
//     featured: true,
//     accentColor: "from-orange-500 to-rose-500",
//     status: "Live",
//     highlights: [
//       "Custom extensions for document workflows",
//       "Payment gateway and e-signature integrations",
//       "Dynamics CRM sync for customers and orders",
// 0    ],
//   },
//   {
//     id: 4,
//     title: "Performance Management System",
//     category: "Enterprise",
//     description:
//       "HR performance platform: goals, reviews, 360° feedback, and reporting for people leaders.",
//  fullDescription:   
//    image: "/projects/project3.png",
//     tags: ["React", "ASP.NET Core", "SQL", "Reporting"],
//     demoUrl: "#",
//     githubUrl: "#",
//     accentColor: "from-amber-500 to-emerald-500",
//     status: "Live",
//     highlights: [
//       "Review cycles, goals, and employee dashboards",
//       "Backend services and SQL reporting for HR metrics",
//       "Role-based access for managers and staff",
//     ],
//   },
//   {
//     id: 5,
//     title: "Timesheet Management System",
//     category: "Enterprise",
//     description:
//       "Timesheets, approvals, and utilization reporting for project-based teams—replacing spreadsheet-heavy processes.",
//  fullDescription:   
//    image: "/projects/project4.png",
//     tags: [".NET", "jQuery", "REST APIs", "SQL Server"],
//     demoUrl: "#",
//     githubUrl: "#",
//     accentColor: "from-orange-500 to-indigo-500",
//     status: "Live",
//     highlights: [
//       "Task logging and approval workflows",
//       "Reporting dashboards for time and projects",
//       "APIs for secure processing and exports",
//     ],
//   },
//   {
//     id: 6,
//     title: "WhatsApp auto-reply system",
//     category: "Personal",
//     description:
//       "Side project: automated replies and real-time messaging flows on WhatsApp so inbound messages get handled without manual back-and-forth.",
//  fullDescription:   
//    image: "/projects/project5.png",
//     tags: ["Python", "Automation", "APIs"],
//     demoUrl: "#",
//     githubUrl: "#",
//     featured: false,
//     accentColor: "from-slate-500 to-zinc-600",
//     status: "Side project",
//     highlights: [
//       "Configurable auto-replies",
//       "Real-time message handling",
//       "Built as a practical integration exercise",
//     ],
//   },
// ];


const projects = [
  {
    id: 1,
    title: "Computer-Aided Dispatch (CAD)",
    category: "Enterprise",
    description:
      "CAD system for managing calls, events, unit dispatch, and real-time incident tracking across agencies.",
    fullDescription: `
      A real-time Computer-Aided Dispatch (CAD) system designed for public safety agencies to manage emergency calls, incidents, and field unit operations efficiently.

      The platform enables call intake, event creation, and intelligent unit dispatch with live status updates. It integrates seamlessly with RMS to ensure accurate record creation and data flow across systems.

      Built with a focus on performance and reliability, the system supports multiple agencies, real-time communication via sockets, and secure role-based access with full audit tracking.

      Key capabilities include live incident tracking, unit status management, cross-agency coordination, and high-availability architecture for mission-critical environments.`,
    image: "/projects/project1.jpg",
    tags: ["React", "Node.js", "Socket.IO", "FeathersJS", "SQL Server"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    accentColor: "from-orange-500 to-amber-500",
    status: "Live",
    highlights: [
      "Call intake, event creation, and dispatch workflows",
      "Real-time unit status and incident updates",
      "CAD to RMS integration for record creation",
      "Secure role-based access with audit tracking",
    ],
  },
  {
    id: 2,
    title: "Records Management System (RMS)",
    category: "Enterprise",
    description:
      "RMS for managing incidents, citations, warrants, and NIBRS reporting with real-time updates and CAD integration.",
    fullDescription: `
      A comprehensive Records Management System (RMS) built for law enforcement agencies to manage incidents, citations, warrants, and compliance reporting in a centralized platform.

      The system handles complete record lifecycles, from incident creation to validation and reporting, with seamless integration from CAD for automatic data flow. It ensures data accuracy and consistency across departments through real-time updates and structured workflows.

      A key focus of the platform is NIBRS reporting, providing validated data entry, advanced search capabilities, and compliance-ready reporting for federal standards.

      Designed for scalability and reliability, the system supports multi-user environments, role-based access control, audit tracking, and efficient data management for high-volume operations.`,  
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "Socket.IO", "FeathersJS", "SQL Server"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    accentColor: "from-red-500 to-orange-500",
    status: "Live",
    highlights: [
      "Incident, citation, and warrant record workflows",
      "Real-time updates across users and departments",
      "CAD to RMS integration for record creation",
      "NIBRS reporting with search and data validation",
    ],
  },
  {
    id: 3,
    title: "Offender Management System (OMS)",
    category: "Enterprise",
    description:
      "Desktop OMS for managing booking, subjects, jail operations, and custody tracking with reliable performance and offline support.",
    fullDescription:`
      A robust Offender Management System (OMS) developed as a desktop application to handle booking, subject records, jail operations, and custody tracking in a secure and controlled environment.

      The system supports complete inmate lifecycle management, including intake, classification, housing, and status tracking, with real-time updates across modules. It is optimized for high performance and reliability, even in low-connectivity environments, with offline capabilities and background data synchronization.

      Designed for secure institutional use, the platform includes role-based access control, audit logging, and tightly controlled workflows to ensure data integrity and compliance.

      The application is built to support continuous operations in critical environments, providing stable performance, efficient data handling, and seamless integration with other public safety systems.`,
    image: "/projects/project3.png",
    tags: ["C#", ".NET", "WPF", "Service Worker", "SQL Server"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    accentColor: "from-indigo-500 to-blue-500",
    status: "Live",
    highlights: [
      "Booking, subject, and jail management workflows",
      "Real-time custody tracking and status updates",
      "Background services for data sync and processing",
      "Optimized for secure and offline desktop usage",
    ],
  },
  {
    id: 4,
    title: "Document E-Commerce Platform",
    category: "E-Commerce",
    description:
      "Document marketplace with subscriptions, digital delivery, and CRM and payment integrations.",
    fullDescription: `
      A scalable document e-commerce platform designed for selling and managing digital products with subscription-based access and secure delivery.

      The platform enables users to browse, purchase, and access documents seamlessly, with integrated payment gateways and automated delivery workflows. It supports subscription models, user account management, and secure access control for digital assets.

      The system is tightly integrated with CRM solutions to manage customer data, track transactions, and streamline business operations. It also includes third-party integrations such as payment processing and e-signature services to enhance the overall user experience.

      Built with a focus on performance, security, and scalability, the platform handles high user traffic and ensures reliable transaction processing for real-world commercial use.`,
    image: "/projects/project4.png",
    tags: ["ASP.NET", "REST APIs", "Payments", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    accentColor: "from-orange-500 to-rose-500",
    status: "Live",
    highlights: [
      "Document purchase and delivery workflows",
      "Payment and e-signature integrations",
      "CRM sync for users and transactions",
      "Secure and scalable backend services",
    ],
  },
  {
    id: 5,
    title: "Performance Management System",
    category: "Enterprise",
    description:
      "HR system for goals, reviews, and 360° feedback with reporting and role-based access.",
    fullDescription: `
      A comprehensive Performance Management System designed to streamline employee evaluation, goal tracking, and feedback processes within organizations.

      The platform enables structured goal setting, performance reviews, and 360° feedback cycles, allowing managers and employees to collaborate effectively on performance improvement. It supports configurable review workflows, role-based access control, and secure data handling across departments.

      Advanced reporting and analytics dashboards provide insights into employee performance, team productivity, and organizational trends, helping leadership make data-driven decisions.

      Built for scalability and usability, the system ensures smooth user experience, efficient workflow management, and reliable performance in enterprise environments.`,
    image: "/projects/project5.png",
    tags: ["React", "ASP.NET Core", "SQL", "Reporting"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    accentColor: "from-amber-500 to-emerald-500",
    status: "Live",
    highlights: [
      "Goal setting and review cycle workflows",
      "360° feedback for employees and managers",
      "Reporting dashboards and analytics",
      "Role-based access and permissions",
    ],
  },
  {
    id: 6,
    title: "Timesheet Management System",
    category: "Enterprise",
    description:
      "Timesheet and project tracking system with task logging, approvals, and utilization reporting.",
    fullDescription: `
      A centralized Timesheet Management System built to streamline task tracking, time logging, and project utilization across teams.

      The platform allows users to log daily work, track project hours, and submit timesheets for approval through structured workflows. Managers can review, approve, and monitor team activity, ensuring accurate reporting and accountability.

      It provides detailed utilization reports and insights into project performance, helping organizations optimize resource allocation and improve productivity.

      The system replaces manual spreadsheet-based tracking with a reliable, scalable solution, offering API-driven data processing, export capabilities, and seamless integration with existing business systems.`,
    image: "/projects/project6.png",
    tags: [".NET", "jQuery", "REST APIs", "SQL Server"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    accentColor: "from-orange-500 to-indigo-500",
    status: "Live",
    highlights: [
      "Task logging and approval workflows",
      "Project and utilization reporting",
      "APIs for data processing and exports",
      "Replaced manual spreadsheet tracking",
    ],
  },
  // {
  //   id: 7,
  //   title: "WhatsApp Auto-Reply System",
  //   category: "Personal",
  //   description:
  //     "Automation system for handling WhatsApp messages with real-time responses, enabling efficient communication without manual intervention.",
  //   fullDescription: `
  //     An automated WhatsApp messaging system designed to handle incoming messages and respond intelligently in real time without manual intervention.

  //     The system uses rule-based logic and configurable triggers to automate replies, enabling efficient communication for repetitive queries and workflows. It processes incoming messages, evaluates conditions, and sends appropriate responses instantly.

  //     Built for experimentation and automation learning, the project demonstrates integration with messaging APIs, event-driven processing, and real-time handling of user interactions.

  //     It showcases practical use of automation to reduce manual effort, improve response time, and create scalable communication workflows.`,
  //   image: "/projects/project7.png",
  //   tags: ["Python", "Automation", "APIs"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  //   accentColor: "from-slate-500 to-zinc-600",
  //   status: "Side project",
  //   highlights: [
  //     "Automated reply workflows for messages",
  //     "Real-time message handling",
  //     "Configurable rules and triggers",
  //     "Built for automation and integration practice",
  //   ],
  // },
  // {
  //   id: 8,
  //   title: "Finance Data Analysis",
  //   category: "Personal",
  //   description:
  //     "Data analysis project exploring financial datasets using Python for insights, visualization, and trend analysis.",
  //   fullDescription: `
  //     A financial data analysis project focused on extracting insights from market datasets using Python-based data processing and visualization techniques.

  //     The project involves data cleaning, transformation, and analysis using libraries like Pandas and NumPy to identify trends, patterns, and correlations within financial data. Visualizations are created using Matplotlib to represent performance metrics and market behavior effectively.

  //     It explores key financial indicators, compares datasets, and highlights meaningful insights that can support data-driven decision making.

  //     This project demonstrates strong analytical thinking, data handling capabilities, and the ability to convert raw data into actionable insights through structured analysis.`,
  //   image: "/projects/project8.png",
  //   tags: ["Python", "Pandas", "NumPy", "Matplotlib"],
  //   demoUrl: "#",
  //   githubUrl: "https://github.com/vatsal-99",
  //   featured: false,
  //   accentColor: "from-green-500 to-emerald-600",
  //   status: "Capstone",
  //   highlights: [
  //     "Analyzed financial datasets for trends and patterns",
  //     "Data cleaning and transformation using Pandas",
  //     "Visualized insights with charts and graphs",
  //     "Explored correlations and performance metrics",
  //   ],
  // },
  // {
  //   id: 9,
  //   title: "Civil Engineering Calculators",
  //   category: "Personal",
  //   description:
  //     "Web-based calculator platform for civil engineering formulas and calculations for students and professionals.",
  //   fullDescription:`
  //       A web-based platform providing a collection of civil engineering calculators designed to simplify complex formula-based calculations for students and professionals.

  //       The application includes multiple tools covering common engineering calculations, allowing users to input values and instantly get accurate results through a clean and user-friendly interface.

  //       It focuses on usability and accessibility, enabling quick computations without the need for manual calculations or external references. Charts and visual outputs are used where applicable to improve understanding of results.

  //       This project demonstrates practical problem-solving, front-end development skills, and the ability to build tools that deliver real value to a specific domain audience.`,
  //   image: "/projects/project9.png",
  //   tags: ["ASP", "C#", "HTML", "CSS", "JS", "ChartJs"],
  //   demoUrl: "https://www.civil-engineering-calculators.com/",
  //   githubUrl: "#",
  //   featured: false,
  //   accentColor: "from-blue-500 to-cyan-500",
  //   status: "College project",
  //   highlights: [
  //     "Built multiple civil engineering calculation tools",
  //     "Simple and user-friendly web interface",
  //     "Covers common formulas for quick calculations",
  //     "Designed for students and professionals",
  //   ],
  // },
];

const categoryColors = {
  Enterprise:
    "from-orange-500/20 to-amber-500/20 text-orange-600 border-orange-500/30",
  "E‑Commerce":
    "from-indigo-500/20 to-sky-500/20 text-indigo-600 border-indigo-500/30",
  Personal:
    "from-slate-500/20 to-zinc-500/20 text-slate-700 dark:text-slate-300 border-slate-500/30",
};

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1]);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const categories = ["All", ...new Set(projects.map(project => project.category))];

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setShowAll(false);
    setIsMobileFilterOpen(false);
  };

  const handleVideoPlay = (project) => {
    setSelectedVideo(project);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const ProjectHighlights = ({ highlights }) => (
    <div className="space-y-2">
      {highlights.map((highlight, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          <span className="text-muted-foreground">{highlight}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="projects"
      className="relative min-h-screen py-16 md:py-24 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
      ref={sectionRef}
    >
      {/* Clean Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4" />
            Projects
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Enterprise
            <span className="block text-primary">Project Portfolio</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Production work from public safety and HR platforms to
            commerce—React on the UI, ASP.NET and SQL behind it, plus a personal
            WhatsApp automation build.
          </motion.p>
        </motion.div>

        {/* Simple Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilterChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-background border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  {/* Image/Video Section */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                          project.status === "Live"
                            ? "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30"
                            : "bg-amber-500/20 text-amber-600 border border-amber-500/30"
                        }`}
                      >
                        {project.status}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md
                        bg-white/80 dark:bg-black/60
                        text-gray-800 dark:text-gray-200 ${categoryColors[project.category]}`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Actions */}
                    {/* <motion.div 
                      className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    >
                      // Video Play Button 
                      <motion.button
                        onClick={() => handleVideoPlay(project)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 rounded-full backdrop-blur-sm border bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300"
                      >
                        <Play size={20} />
                      </motion.button> 
                      
                      {/* Code Button 
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                          project.githubUrl === "#" 
                            ? "bg-gray-500/50 text-gray-300 border-gray-500/30 cursor-not-allowed"
                            : "bg-white/20 text-white border-white/30 hover:bg-white/30"
                        }`}
                        onClick={(e) => project.githubUrl === "#" && e.preventDefault()}
                      >
                        <Code size={20} />
                      </motion.a>
                    </motion.div> */}
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <motion.div
                          className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 text-amber-600 text-xs font-medium border border-amber-500/30"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          <Star size={12} className="fill-amber-500" />
                          Featured
                        </motion.div>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <ProjectHighlights highlights={project.highlights} />
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: index * 0.1 + tagIndex * 0.05 + 0.4,
                          }}
                          className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      {/* CASE 1: Demo exists */}
                      {project.demoUrl && project.demoUrl !== "#" && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          <Eye size={16} />
                          View Demo
                        </motion.a>
                      )}

                      {/* CASE 3: No demo + no github */}
                      {(!project.demoUrl || project.demoUrl === "#") && (
                        <motion.button
                          onClick={() => setSelectedProject(project)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-3 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium bg-bg-muted text-foreground text-muted-foreground border border-border"
                        >
                          <Eye size={16} />
                          View Details
                        </motion.button>
                      )}

                      {/* CASE 2: GitHub exists */}
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium border border-border bg-background text-foreground hover:border-primary hover:bg-primary/5"
                        >
                          <Github size={16} />
                          Code
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Accent Border */}
                  <div
                    className={`h-1 bg-gradient-to-r ${project.accentColor}`}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-background border border-border rounded-2xl max-w-2xl w-full overflow-hidden max-h-[90vh] overflow-y-auto  shadow-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image */}
                <div className="h-60 w-full overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-5">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground">
                    {selectedProject.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-muted-foreground text-sm">
                    {selectedProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Full Description */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground">
                      Overview
                    </h4>

                    <div className="text-muted-foreground text-sm space-y-3 text-left">
                      {selectedProject.fullDescription
                        ?.trim()
                        .split("\n\n")
                        .map((para, i) => (
                          <p key={i}>- {para.trim()}</p>
                        ))}
                    </div>
                  </div>

                  {/* Close */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-25 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More */}
        {filteredProjects.length > 3 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${
                showAll
                  ? "bg-muted text-foreground border border-border"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              {showAll ? (
                <>
                  <ChevronUp size={18} />
                  Show Less
                </>
              ) : (
                <>
                  View More Projects
                  <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* Simple CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-background border border-border rounded-2xl p-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Zap className="h-4 w-4" />
              Get In Touch
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Like what you see?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Open to roles where React meets solid APIs and databases full
              stack, product-minded, and delivery-focused.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Contact Me
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="https://github.com/vatsal-99"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-medium border border-border text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Github size={18} />
                View GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={handleCloseVideo}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative bg-background rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {selectedVideo.title} Demo
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {selectedVideo.category}
                  </p>
                </div>
                <motion.button
                  onClick={handleCloseVideo}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Video Player */}
              <div className="aspect-video bg-black">
                <video
                  ref={videoRef}
                  src={selectedVideo.video}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  onEnded={handleCloseVideo}
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <p className="text-muted-foreground text-sm flex-1">
                    Watch the demo of {selectedVideo.title} in action
                  </p>
                  <div className="flex gap-3">
                    <motion.a
                      href={selectedVideo.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedVideo.demoUrl === "#"
                          ? "bg-muted text-muted-foreground cursor-not-allowed border border-border"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                      onClick={(e) =>
                        selectedVideo.demoUrl === "#" && e.preventDefault()
                      }
                    >
                      Visit Live Site
                    </motion.a>
                    <motion.a
                      href={selectedVideo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
                        selectedVideo.githubUrl === "#"
                          ? "bg-muted text-muted-foreground cursor-not-allowed border-border"
                          : "bg-background text-foreground border-border hover:border-primary hover:bg-primary/5"
                      }`}
                      onClick={(e) =>
                        selectedVideo.githubUrl === "#" && e.preventDefault()
                      }
                    >
                      View Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};