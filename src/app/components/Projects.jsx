"use client";
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const categories = ["All", "Web", "Mobile", "Design"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Blood Donation Mobile App",
      description: "A mobile app connecting donors with hospitals, enabling real-time donation requests with push notifications.",
      image: "/mobile.png",
      category: "Mobile",
      tags: ["React Native", "Supabase", "Firebase"],
      githubUrl: "https://github.com/sivavithu/bbmsmobilefinal",
      liveUrl: null,
    },
    {
      title: "Blood Bank Management System",
      description: "A web-based system for efficient blood bank management, improving donor-recipient coordination and analytics.",
      image:"/bloodweb.png",
      category: "Web",
      tags: ["React", "Node.js", "Supabase", "Tailwind CSS"],
      githubUrl: "https://github.com/SAYANISHAN98/bbmsweb",
      liveUrl: "https://bbmsweb.vercel.app/"
    },
    {
      title: "Job Vacancy System",
      description: "A web-based system to connect students with part-time job opportunities.",
      image: "/job.jpg",
      category: "Web",
      tags: ["PHP", "JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/Ravindudeshitha/UOJ-web-project-Jobwavelk",
      liveUrl: null,
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my projects, skills, and achievements with a modern design.",
      image: "/portfolio.png",
      category: "Web",
      tags: ["React", "Tailwind CSS", "Next.js"],
      githubUrl: "https://github.com/Thusaniv",
      liveUrl: "https://thusani.vercel.app"
    }
  ];
  

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
      <section className="text-white" id="projects">
      <div className="container mx-auto px-4 md:px-6 pt-24">
        <div className="flex flex-col space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-5xl font-extrabold font-sans bg-gradient-to-b from-white to-secondary text-transparent bg-clip-text mb-6">
            My Projects
    </h2>
            <p className="text-lg text-muted-foreground">
              Explore some of my recent work across different areas.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden transition-all hover:shadow-lg group"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/80">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="icon" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="outline" size="icon" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live preview">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                  <Button variant="link" asChild className="text-primary">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Details
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
