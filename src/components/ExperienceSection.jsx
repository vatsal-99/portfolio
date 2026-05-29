import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "TatvaSoft",
    role: "Team Leader / Senior Full Stack Developer",
    period: "Jun 2022 – Apr 2026",
    location: "Ahmedabad, India (Remote)",
    highlights: [
      "Owned and stabilized enterprise law enforcement platform serving 50+ US agencies",
      "Built CI/CD pipelines using Azure DevOps — automated build, test, and deployment",
      "Developed React + TypeScript dashboards and ASP.NET Core backend systems",
      "Integrated SignalR real-time communication for emergency dispatch (zero downtime)",
      "Led team of 4-6 developers — code reviews, mentoring, sprint planning",
    ],
    tags: ["ASP.NET Core", "C#", "React", "TypeScript", "SignalR", "Azure DevOps", "SQL Server"],
    accentColor: "from-orange-500 to-amber-500",
    borderColor: "border-orange-500/40",
    dotColor: "bg-orange-500",
  },
  {
    id: 2,
    company: "Version Systems Pvt. Ltd.",
    role: "Software Engineer",
    period: "Jan 2021 – Jun 2022",
    location: "Rajkot, India",
    highlights: [
      "Built enterprise HR performance management system — 360° feedback, goal tracking, productivity dashboards, SQL reporting",
      "Developed timesheet and project allocation system — replaced manual spreadsheet processes with automated workflows",
    ],
    tags: ["ASP.NET Core", "React", "SQL Server", "REST APIs"],
    accentColor: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/40",
    dotColor: "bg-blue-500",
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-20 px-0 bg-gradient-to-br from-background via-muted/10 to-background"
    >
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
            <Briefcase className="h-4 w-4" />
            Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            5+ years building production enterprise systems — from .NET backends
            and React UIs to CI/CD pipelines and real-time communication.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 border-background ${exp.dotColor} shadow-md hidden sm:block`}
                />

                <div
                  className={`bg-card border ${exp.borderColor} rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300`}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p
                        className={`text-base text-left font-semibold mt-0.5 bg-gradient-to-r ${exp.accentColor} bg-clip-text text-transparent`}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1.5 sm:items-end shrink-0">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
