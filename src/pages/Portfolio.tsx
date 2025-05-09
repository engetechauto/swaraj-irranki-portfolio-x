
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/CursorFollower';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Robot Dog (MyEquation-ROBOAI)",
      category: "robotics",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1470&auto=format&fit=crop",
      description: "Advanced robotics project focused on developing a quadruped robot with AI capabilities. Features include terrain adaptation, obstacle avoidance, and autonomous navigation.",
      technologies: ["Robotics", "AI", "Sensor Integration", "Python"]
    },
    {
      id: 2,
      title: "Solar-powered Sewage Cleaning Machine",
      category: "automation",
      image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=1000&auto=format&fit=crop",
      description: "Eco-friendly solution for automated sewage cleaning powered by solar energy. The system uses sensors to detect blockages and automates the cleaning process.",
      technologies: ["Sustainable Engineering", "Solar Power", "Automation", "IoT"]
    },
    {
      id: 3,
      title: "Electric Motorbike",
      category: "design",
      image: "https://images.unsplash.com/photo-1558980394-dbb977039a2e?q=80&w=1000&auto=format&fit=crop",
      description: "Design and simulation of an electric motorbike with improved efficiency and range. Published in IRJET publication.",
      technologies: ["CAD Design", "Electric Vehicles", "Simulation", "Energy Efficiency"]
    },
    {
      id: 4,
      title: "Biomedical Prosthetics",
      category: "manufacturing",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1000&auto=format&fit=crop",
      description: "Customized prosthetic solutions using 3D printing and scanning technologies. Created for affordability and better anatomical fit.",
      technologies: ["3D Printing", "3D Scanning", "Biomedical Engineering", "Custom Design"]
    },
    {
      id: 5,
      title: "Face Detection App",
      category: "software",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
      description: "Real-time face detection application built with Python and OpenCV. Features include facial landmark detection and expression analysis.",
      technologies: ["Python", "OpenCV", "Computer Vision", "AI/ML"]
    },
    {
      id: 6,
      title: "Prosthetic Hand for Stroke Survivors",
      category: "manufacturing",
      image: "https://images.unsplash.com/photo-1573496773905-f5b17e717f05?q=80&w=1000&auto=format&fit=crop",
      description: "Capstone project: A prosthetic hand designed specifically for stroke survivors, combining mechanical engineering and medical considerations.",
      technologies: ["Prosthetics", "Medical Devices", "Rehabilitation Engineering", "3D Printing"]
    },
    {
      id: 7,
      title: "Digital Twin Schematic Research",
      category: "research",
      image: "https://images.unsplash.com/photo-1581093196277-97e52e362945?q=80&w=1000&auto=format&fit=crop",
      description: "Research on implementation of digital twins for manufacturing systems, creating virtual replicas of physical assets.",
      technologies: ["Digital Twins", "IoT", "Data Modeling", "Industry 4.0"]
    },
    {
      id: 8,
      title: "3D Printing & Scanning Research",
      category: "research",
      image: "https://images.unsplash.com/photo-1581093458791-9dc6be3b8883?q=80&w=1000&auto=format&fit=crop",
      description: "Comprehensive research on advancements in 3D printing and scanning technologies and their industrial applications.",
      technologies: ["Additive Manufacturing", "3D Scanning", "Material Science", "Research"]
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'robotics', label: 'Robotics' },
    { value: 'automation', label: 'Automation' },
    { value: 'design', label: 'Design' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'software', label: 'Software' },
    { value: 'research', label: 'Research' }
  ];
  
  return (
    <>
      <CursorFollower />
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-6 md:px-10 lg:px-20 py-12">
          <div className="container mx-auto">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore my projects across robotics, automation, design, manufacturing, and software development.
            </motion.p>
          </div>
        </section>
        
        {/* Filters */}
        <section className="px-6 md:px-10 lg:px-20 pb-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={filter === category.value ? "default" : "outline"}
                  onClick={() => setFilter(category.value)}
                  className="transition-all duration-300"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="px-6 md:px-10 lg:px-20 pb-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  className="project-card h-[400px] group rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="project-card-overlay">
                    <span className="text-sm font-medium text-primary mb-1 capitalize">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="mb-4 text-light/80 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs bg-light/10 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="self-start text-light border-light hover:bg-light/10"
                    >
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Portfolio;
