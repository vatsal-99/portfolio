import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import jsIcon from "@/assets/icons/javascript.png";
import reactIcon from "@/assets/icons/react.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import expressIcon from "@/assets/icons/express.png";
import postgresqlIcon from "@/assets/icons/postgresql.png";
import pythonIcon from "@/assets/icons/python.png";
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import netIcon from "@/assets/icons/net.png";
import SQLIcon from "@/assets/icons/sql.png";
import CursorIcon from "@/assets/icons/cursor.png";
import CSharpIcon from "@/assets/icons/csharp.png";
import JiraIcon from "@/assets/icons/jira.png";

const skills = [
  // Frontend   React first
  { name: "React", level: 90, category: "frontend", icon: "react" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "javascript" },
  { name: "HTML5", level: 90, category: "frontend", icon: "html" },
  { name: "CSS3", level: 85, category: "frontend", icon: "css" },

  // Backend   ASP.NET called out separately from Node
  { name: "Node.js", level: 80, category: "backend", icon: "nodejs" },
  { name: "ASP.NET Core", level: 85, category: "backend", icon: "net" },
  { name: "C#", level: 82, category: "backend", icon: "csharp" },

  { name: "SQL Server", level: 88, category: "database", icon: "sql" },
  { name: "PostgreSQL", level: 78, category: "database", icon: "postgresql" },

  { name: "Jira", level: 85, category: "technologies", icon: "jira" },
  { name: "GitHub", level: 90, category: "technologies", icon: "github" },
  { name: "Cursor", level: 88, category: "technologies", icon: "cursor" },
  { name: "VS Code", level: 88, category: "technologies", icon: "vscode" },
  { name: "Python (learning)", level: 72, category: "technologies", icon: "python" },
];

const categories = [
  { id: "all", label: "All skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "technologies", label: "Tools & more" },
];

const iconImages = {
  html: htmlIcon,
  css: cssIcon,
  javascript: jsIcon,
  react: reactIcon,
  nodejs: nodejsIcon,
  express: expressIcon,
  postgresql: postgresqlIcon,
  python: pythonIcon,
  git: gitIcon,
  github: githubIcon,
  vscode: vscodeIcon,
  net: netIcon,
  sql: SQLIcon,
  cursor: CursorIcon,
  csharp: CSharpIcon,
  jira: JiraIcon
};

const SkillBar = ({ level }) => (
  <div className="w-full h-2 sm:h-3 bg-muted rounded-full overflow-hidden border border-border">
    <motion.div
      key={level}
      initial={{ width: 0 }}
      animate={{ width: `${level}%` }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="h-full bg-primary/85 rounded-full"
    />
  </div>
);

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section
      id="skills"
      className="py-20 px-0 bg-gradient-to-br from-background via-muted/20 to-background"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Technical skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Grouped by area what I use most often in production. Use the filters
            to focus on frontend, backend, database, or tools.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-card text-foreground border-border hover:border-primary/40"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-card p-4 sm:p-5 rounded-xl border border-border/80 hover:border-primary/35 transition-colors duration-200 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-muted/60 border border-border flex items-center justify-center shrink-0">
                    <img
                      src={iconImages[skill.icon]}
                      alt=""
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center gap-2 mb-1">
                      <h3 className="font-semibold text-base sm:text-lg text-foreground truncate">
                        {skill.name}
                      </h3>
                      <span className="text-xs font-medium text-muted-foreground tabular-nums shrink-0">
                        {skill.level}%
                      </span>
                    </div>
                    <SkillBar level={skill.level} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
