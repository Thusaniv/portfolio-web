"use client";
import { useState } from 'react';
import { Github, ExternalLink, Code2, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const categories = ["All", "Systems & Web", "Mobile"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Petroleum Station Management System",
      description: "Enterprise web application for fuel station logistics. Features an interactive 3D dashboard for real-time fuel tank monitoring using Three.js, pricing, inventory, and customer credit logs.",
      category: "Systems & Web",
      tags: ["React", "Node.js", "Express", "MySQL", "Three.js", "Recharts", "Tailwind CSS"],
      githubUrl: "https://github.com/Thusaniv/Petroleum",
      liveUrl: null,
      date: "Mar 2026",
      featured: true,
      domain: "petro-monitor.io",
      gradient: "from-blue-900/20 via-blue-800/10 to-indigo-900/30",
    },
    {
      title: "Container Yard Management System",
      description: "Logistics monitoring system for container yards featuring automated gate tracking, container placement charts, billing, and reefer container temperature logging with auto power calculations.",
      category: "Systems & Web",
      tags: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "Radix UI"],
      githubUrl: "https://github.com/Thusaniv/CYMS",
      liveUrl: null,
      date: "Feb 2026",
      featured: true,
      domain: "cyms-yard.com",
      gradient: "from-indigo-900/20 via-slate-800/10 to-blue-900/30",
    },
    {
      title: "Movie Explorer Web Application",
      description: "Modern movie catalog dashboard utilizing TMDB API to display real-time trending movies, user lists, detailed search indexes, and custom movie rating reviews.",
      category: "Systems & Web",
      tags: ["React.js", "TMDb API", "Material UI", "Vercel"],
      githubUrl: "https://github.com/movieexplorer",
      liveUrl: null,
      date: "Jun 2025",
      domain: "movie-explorer.net",
      gradient: "from-slate-900/30 via-blue-950/20 to-indigo-950/30",
    },
    {
      title: "Blood Bank Management System",
      description: "Full-stack web application designed for automated donor registry tracking, blood units collection logs, real-time demand matching, and analytical reports for blood banks.",
      category: "Systems & Web",
      tags: ["React", "Node.js", "Supabase", "Tailwind CSS"],
      githubUrl: "https://github.com/SAYANISHAN98/bbmsweb",
      liveUrl: "https://bbmsweb.vercel.app/",
      date: "Nov 2023 — Dec 2024",
      domain: "bbmsweb.vercel.app",
      gradient: "from-red-950/10 via-slate-900/20 to-red-900/10",
    },
    {
      title: "Blood Donation Mobile App",
      description: "Cross-platform mobile application matching local blood donors directly with nearby medical centers, utilizing real-time push alerts and geographical matching.",
      category: "Mobile",
      tags: ["React Native", "Supabase", "Firebase", "Expo"],
      githubUrl: "https://github.com/sivavithu/bbmsmobilefinal",
      liveUrl: null,
      date: "Nov 2023 — Dec 2024",
      domain: "blooddonation-app",
      gradient: "from-indigo-950/20 via-blue-900/10 to-red-950/10",
    },
    {
      title: "Job Vacancy System",
      description: "Portal for university students to search and apply for local part-time job opportunities, with resumes upload tools and recruiters dashboards.",
      category: "Systems & Web",
      tags: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL"],
      githubUrl: "https://github.com/Ravindudeshitha/UOJ-web-project-Jobwavelk",
      liveUrl: null,
      date: "Aug 2023",
      domain: "jobwave.lk",
      gradient: "from-blue-950/10 via-slate-900/20 to-blue-900/20",
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="text-white" id="projects">
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-8">
        <div className="flex flex-col space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold font-sans bg-gradient-to-b from-white to-blue-500 text-transparent bg-clip-text mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-blue-200/60">
              Explore my recent development projects spanning web systems, mobile applications, and 3D visualization dashboards.
            </p>
          </div>
          
          {/* Custom Tabs */}
          <div className="flex justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-xl font-semibold border transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    : "border-white/10 text-blue-200/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.title}
                >
                  <Card className="glass-panel overflow-hidden transition-all duration-300 border-white/5 hover:border-blue-500/30 flex flex-col justify-between h-full group shadow-2xl relative p-4 rounded-2xl">
                    
                    {/* Visual Browser Mockup (as in Reference Screenshot) */}
                    <div className="relative w-full aspect-video rounded-xl bg-slate-950/40 border border-white/10 overflow-hidden mb-4 group-hover:border-blue-500/30 transition-colors duration-300">
                      {/* Browser Top bar */}
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/80 border-b border-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                        <div className="ml-2 bg-white/5 rounded px-2.5 py-0.5 text-[8px] font-mono text-white/40 truncate w-32">
                          {project.domain}
                        </div>
                      </div>
                      {/* Browser content rendering visual representation */}
                      <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center relative overflow-hidden`}>
                        {/* Orbiting rings decor */}
                        <div className="absolute w-24 h-24 bg-blue-500/5 rounded-full filter blur-xl animate-pulse-glow" />
                        <div className="absolute w-36 h-36 border border-blue-500/5 rounded-full animate-spin" style={{ animationDuration: "12s" }} />
                        
                        <div className="z-10 flex flex-col items-center text-center p-4">
                          <Code2 className="w-8 h-8 text-blue-400 mb-2 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                          <span className="text-[10px] font-mono font-bold tracking-wider text-blue-300 uppercase">{project.category}</span>
                        </div>
                      </div>
                    </div>

                    <CardHeader className="p-0 mb-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-mono text-blue-400 font-bold">{project.date}</span>
                        {project.featured && (
                          <span className="bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-blue-400">
                            Featured
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-white text-xl font-bold leading-tight group-hover:text-blue-300 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="text-[11px] px-2.5 py-0.5 bg-blue-950/60 border border-blue-500/10 rounded-md font-mono text-blue-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-0 flex-grow mb-6">
                      <CardDescription className="text-blue-100/70 text-sm leading-relaxed text-justify">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                    
                    <CardFooter className="p-0 border-t border-white/5 pt-4 flex justify-between items-center">
                      <div className="flex gap-4">
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-1.5 text-xs font-semibold text-blue-200/50 hover:text-white transition-colors duration-200"
                          >
                            <Github className="h-4 w-4" />
                            <span>Code</span>
                          </a>
                        )}
                        {project.liveUrl ? (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200"
                          >
                            <Globe className="h-4 w-4" />
                            <span>Live</span>
                          </a>
                        ) : (
                          <span className="text-xs font-mono text-white/20 italic">Local System</span>
                        )}
                      </div>
                      
                      <span className="text-[10px] font-mono text-blue-200/40 uppercase">
                        {project.category}
                      </span>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


