import { Code, Award, Download, Shield, Zap, TrendingUp, Mail, Briefcase } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentCodeLine, setCurrentCodeLine] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");

const codeSnippets = [
  "// Welcome to my site · glad you're here.",
  "",
  "> const focus = 'Building enterprise software with .NET & React';",
  "> console.log(focus);",
  "",
  "// 5+ years of production experience",
  "// ASP.NET Core · React · TypeScript · Azure DevOps",
  "// Clean architecture · scalable systems · CI/CD",
  "// Thanks for visiting · Vatsal",
];

const achievements = [
  { number: "5+", label: "Years Experience", icon: <Shield className="h-3 w-3" /> },
  { number: "10+", label: "Enterprise Projects", icon: <Briefcase className="h-3 w-3" /> },
  { number: "4+", label: ".NET Experience", icon: <TrendingUp className="h-3 w-3" /> },
  { number: "3+", label: "AI Integrations", icon: <Zap className="h-3 w-3" /> },
];

  useEffect(() => {
    const currentLine = codeSnippets[currentCodeLine];
    if (displayedCode.length < currentLine.length) {
      setTimeout(() => {
        setDisplayedCode(currentLine.slice(0, displayedCode.length + 1));
      }, 30);
    } else {
      setTimeout(() => {
        if (currentCodeLine < codeSnippets.length - 1) {
          setCurrentCodeLine(prev => prev + 1);
          setDisplayedCode("");
        } else {
          setTimeout(() => {
            setCurrentCodeLine(0);
            setDisplayedCode("");
          }, 5000);
        }
      }, 800);
    }
  }, [displayedCode, currentCodeLine]);

  const handleViewResume = () => {
    // Open resume in new tab
    window.open('/Vatsal_Chandrani_Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center justify-center px-0 lg:px-6 overflow-hidden bg-gradient-to-br from-background/70 via-background/60 to-primary/10 mt-10 lg:mt-0"
      ref={ref}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg"
            style={{
              width: Math.random() * 60 + 20 + "px",
              height: Math.random() * 60 + 20 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 blur-[100px]"
          animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/10 to-emerald-500/10 blur-[100px]"
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container max-w-7xl mx-auto w-full mt-16 sm:mt-0">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.25, delayChildren: 0.5 },
            },
          }}
        >
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
              }}
            >
              <span className="block text-foreground">
                I'm Vatsal Chandrani
              </span>
              <span className="block text-primary mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold">
                Senior Full Stack Developer
              </span>
            </motion.h1>

           <motion.p
            className="text-xl sm:text-2xl text-foreground/75 mt-6 leading-relaxed max-w-2xl"
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
            }}
          >
            Senior Full Stack Developer with 5+ years of experience building{" "}
            <span className="text-primary">enterprise software</span> using{" "}
            <span className="text-primary">ASP.NET Core</span>,{" "}
            <span className="text-primary">C#</span>,{" "}
            <span className="text-primary">React</span>,{" "}
            <span className="text-primary">TypeScript</span>, and{" "}
            <span className="text-primary">Azure DevOps</span>. Experienced in scalable
            architectures, real-time systems, enterprise integrations, and modern web
            application development.
          </motion.p>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
              }}
            >
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-background/60 border border-border/50 backdrop-blur-sm 
                             hover:border-primary/30 transition-all duration-300  shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {achievement.icon}
                    <div className="text-2xl font-bold text-foreground">
                      {achievement.number}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
              }}
            >
              <motion.a
                href="#projects"
                className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground shadow-md hover:shadow-lg text-sm flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="h-5 w-5" />
                <span>View Projects</span>
                <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold border border-primary/50 text-foreground hover:border-primary transition-all duration-300 bg-background/80 backdrop-blur-sm text-sm flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-4 w-4" />
                <span>Contact Me</span>
              </motion.a>

              <motion.button
                onClick={handleViewResume}
                className="group relative overflow-hidden px-6 py-4 rounded-xl font-semibold border border-border text-muted-foreground hover:border-primary/30 transition-all duration-300 bg-background/60 backdrop-blur-sm text-sm flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-4 w-4" />
                <span>View Resume</span>
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            className="flex-1 flex justify-center lg:justify-end w-full  mb-10 lg:mb-0"
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
            }}
          >
            <div className="relative w-full max-w-md">
              <motion.div
                className="bg-background/90 border border-border rounded-2xl p-8 backdrop-blur-sm shadow-2xl w-full group hover:shadow-3xl transition-all duration-500"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-sm font-mono font-semibold text-muted-foreground">
                      portfolio.js
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-green-400/20 rounded-full animate-pulse"></div>
                </div>

                <div className="font-mono text-sm bg-muted/40 rounded-lg border border-border h-[480px] sm:h-[400px] lg:h-[320px] flex">
                  <div className="p-6 w-full">
                    <div className="grid grid-cols-1 gap-1 h-full content-start">
                      {codeSnippets.map((line, index) => (
                        <div
                          key={index}
                          className={`
                           flex items-start whitespace-pre-wrap break-words
                            ${index < currentCodeLine ? "opacity-100" : "opacity-0"}
                            ${index === currentCodeLine ? "opacity-100" : ""}
                            transition-opacity duration-150 ease-in-out
                            ${
                              line.includes("const") || line.includes("message")
                                ? "text-blue-400 font-semibold"
                                : line.includes("//")
                                  ? "text-muted-foreground italic"
                                  : line.includes("console.log")
                                    ? "text-emerald-400"
                                    : line.includes("'") || line.includes("`")
                                      ? "text-amber-400"
                                      : "text-foreground"
                            }
                          `}
                        >
                          {index < currentCodeLine ? line : ""}
                          {index === currentCodeLine ? (
                            <>
                              {displayedCode}
                              <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="ml-1 text-primary inline-block"
                              >
                                ▊
                              </motion.span>
                            </>
                          ) : (
                            ""
                          )}
                          {line === "" && "‎"}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="hidden md:flex absolute -bottom-1 -right-1 w-14 h-14 bg-gradient-to-r from-primary to-orange-500/90 rounded-xl flex items-center justify-center border-2 border-background shadow-2xl"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, -2, 0],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Code className="h-5 w-5 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -top-3 -left-3 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-border shadow-lg flex items-center gap-2"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.5, type: "spring" }}
                >
                  <Award className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-semibold text-foreground">
                    Solutions
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-15 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 1 }}
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-5 h-8 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};