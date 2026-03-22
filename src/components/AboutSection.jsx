import React, { useState, useEffect } from 'react';
import { Briefcase, User, Download, Calendar, Sparkles, TrendingUp, Github, Linkedin, Mail, Star, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);

  const achievements = [
    { number: "5", label: "Years Experience", icon: <Calendar className="h-5 w-5" />, suffix: "+" },
    { number: "10", label: "Projects Delivered", icon: <Briefcase className="h-5 w-5" />, suffix: "+" },
    { number: "6", label: "Enterprise Systems", icon: <Layers className="h-5 w-5" />, suffix: "+" },
    { number: "∞", label: "Learning & Growing", icon: <TrendingUp className="h-5 w-5" />, suffix: "" },
  ];

const features = [
  "Production-ready frontend with real APIs",
  "Clean, maintainable ASP.NET Core & SQL",
  "Enterprise systems: public safety & commerce",
  "Scalable service integrations",
  "Clear communication & smart trade-offs",
  "AI assistant (browser-based, no API)",
];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/vatsal-99" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/vatsal-chandrani" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:vatsalchandrani99@gmail.com" },
  ];

const tabContent = {
  personal: (
    <>
      I’m based in India. Outside of work, I enjoy understanding how systems fit
      together especially balancing{" "}
      <span className="text-primary">fast, responsive UI</span> with{" "}
      <span className="text-primary">reliable backend logic</span>. I like
      exploring new tools, improving performance, and building things that solve
      real problems. The chat assistant on this page answers common questions
      about my work and projects in simple terms everything runs{" "}
      <span className="text-primary">locally in the browser</span>. I also enjoy
      continuously refining my workflow and building{" "}
      <span className="text-primary">efficient, scalable applications</span>.
    </>
  ),

  professional: (
    <>
      I’m a Full Stack Developer with{" "}
      <span className="text-primary">5+ years</span> of experience building
      production-grade applications. Currently, I work on{" "}
      <span className="text-primary">enterprise public safety systems</span>{" "}
      using <span className="text-primary">React and REST APIs</span>, focusing
      on performance, scalability, and reliability. Previously, I developed
      performance management and timesheet platforms, and built a{" "}
      <span className="text-primary">WhatsApp auto-reply system</span> for
      real-time messaging and automation. I work with{" "}
      <span className="text-primary">.NET, SQL, and React</span> daily, and use{" "}
      <span className="text-primary">Python for data science and ML</span>,
      exploring AI-driven applications end-to-end.
    </>
  ),

  approach: (
    <>
      I start with <span className="text-primary">user needs</span> and
      translate them into clean, maintainable solutions. I build{" "}
      <span className="text-primary">clear React interfaces</span> backed by{" "}
      <span className="text-primary">robust APIs and structured SQL</span>. I
      prefer <span className="text-primary">small, testable iterations</span>{" "}
      over large rewrites, ensuring stability and scalability. I collaborate
      with architecture teams on integrations and focus on delivering{" "}
      <span className="text-primary">
        efficient, maintainable, real-world solutions
      </span>{" "}
      with strong attention to performance and code quality.
    </>
  ),
};

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCounter(prev => (prev + 1) % 4), 2000);
    return () => clearInterval(interval);
  }, []);

  // Programmatic download function
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Vatsal-Chandrani-Resume.pdf'; // Must be in public folder
    link.download = 'Vatsal-Chandrani-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="relative z-10 py-12 md:py-20 px-0 lg:px-6 bg-gradient-to-br from-background/70 via-background/60 to-primary/5  overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        <div
          className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute w-60 sm:w-80 h-60 sm:h-80 bg-secondary/5 rounded-full blur-3xl transition-all duration-1500 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
          }}
        />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-16 right-8 sm:top-20 sm:right-20 animate-float">
          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-primary/20 rounded-lg rotate-45" />
        </div>
        <div className="absolute bottom-32 left-8 sm:bottom-40 sm:left-20 animate-float animation-delay-2000">
          <div className="w-5 sm:w-6 h-5 sm:h-6 bg-secondary/20 rounded-full" />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 px-2 sm:px-6">
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6 transition-all duration-500 hover:bg-primary/15 hover:scale-105 group cursor-pointer">
            <div className="relative">
              <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-primary animate-pulse" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-primary tracking-wide">
              ABOUT ME
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-foreground">About me</span>
            <span className="block text-primary font-normal text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-3">
              Enterprise work, practical delivery
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            5+ years building scalable web applications in public safety and
            e-commerce delivering high-performance UI, robust APIs, and
            accurate, real-world data, powered by modern technologies and
            AI-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="xl:col-span-2 space-y-8">
            {/* About Card */}
            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60 relative overflow-hidden group">
              {/* Decorative Circles */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-secondary rounded-full -translate-x-16 translate-y-16" />
              </div>

              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:scale-105 md:group-hover:scale-110 relative">
                      <img
                        src="/profile-logo.png"
                        alt="Vatsal Chandrani"
                        className="w-full h-full object-cover object-[center_20%]"
                      />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                      Vatsal Chandrani
                    </h2>
                    <p className="text-primary text-base sm:text-lg font-normal mb-3 sm:mb-4">
                      Full Stack Developer
                    </p>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      {achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className={`p-2 sm:p-3 rounded-xl bg-background/50 border border-border transition-all duration-300 hover:scale-105 hover:border-primary/30 ${counter === index ? "bg-primary/10 border-primary/50" : ""}`}
                        >
                          <div className="flex items-center gap-2 justify-center md:justify-start">
                            {achievement.icon}
                            <div>
                              <div className="font-bold text-sm sm:text-lg">
                                {achievement.number}
                                {achievement.suffix}
                              </div>
                              <div className="text-[10px] sm:text-xs text-muted-foreground">
                                {achievement.label}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex flex-col sm:flex-row border-b border-border mb-4 sm:mb-6">
                  {["personal", "professional", "approach"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base font-medium transition-all duration-300 ${activeTab === tab ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[100px] sm:min-h-[120px]">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-left"
                    >
                      {tabContent[activeTab]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            {/* Why Choose Me */}
            <div className="bg-card/50 border border-border rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <h3 className="text-base sm:text-xl font-bold mt-2 mb-3 sm:mb-4 flex items-center gap-2">
                <Star className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
                How I work
              </h3>
              <div className="space-y-1 sm:space-y-1.5">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 sm:gap-2 p-0.5 sm:p-1 rounded-lg transition-all duration-300 hover:bg-background/50 hover:scale-105"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>{" "}
            </div>

            {/* Work Together */}
            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <h3 className="text-base sm:text-xl font-bold mb-4 sm:mb-6 flex items-center justify-start gap-2">
                <User className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
                Get in Touch
              </h3>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium whitespace-nowrap bg-primary text-primary-foreground rounded-xl transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg group"
                >
                  <User className="h-4 w-4 mr-1.5 group-hover:scale-110 transition-transform duration-300" />
                  Contact Me
                </a>

                <button
                  onClick={handleDownload}
                  className="inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium whitespace-nowrap border border-border rounded-xl transition-all duration-300 hover:bg-accent hover:border-primary/30 hover:scale-105 hover:shadow-lg group"
                >
                  <Download className="h-4 w-4 mr-1.5 group-hover:translate-y-0.5 transition-transform duration-300" />
                  Download Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-background/50 rounded-xl border border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-4">
                  <h4 className="font-semibold text-center sm:text-left text-sm sm:text-base whitespace-nowrap">
                    Quick Connect
                  </h4>

                  <div className="flex flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="p-2 bg-background rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
};
