
import { motion } from 'framer-motion';
import { ArrowDownToLine, ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/CursorFollower';
import { Button } from '@/components/ui/button';

const Research = () => {
  const publications = [
    {
      title: "Electric Motorbike: Design and Performance Optimization",
      journal: "International Research Journal of Engineering and Technology (IRJET)",
      year: "2023",
      abstract: "This paper presents the design and performance optimization of an electric motorbike, focusing on energy efficiency, range optimization, and sustainable manufacturing processes. The study includes detailed simulations and prototype testing results.",
      link: "#",
      image: "https://images.unsplash.com/photo-1558980394-dbb977039a2e?q=80&w=1000&auto=format&fit=crop",
      tags: ["Electric Vehicles", "Sustainable Engineering", "Design Optimization"]
    },
    {
      title: "Digital Twins: A Comprehensive Overview of Implementation in Manufacturing",
      journal: "Engineering Technology Review",
      year: "2022",
      abstract: "This research provides an in-depth analysis of digital twin technology implementation in manufacturing environments. It explores the creation of virtual replicas of physical assets, processes, and systems, and discusses benefits, challenges, and future directions.",
      link: "#",
      image: "https://images.unsplash.com/photo-1581093196277-97e52e362945?q=80&w=1000&auto=format&fit=crop",
      tags: ["Digital Twins", "Industry 4.0", "Manufacturing Technology"]
    },
    {
      title: "Integration of 3D Printing and Scanning Technologies in Biomedical Applications",
      journal: "Additive Manufacturing Journal",
      year: "2023",
      abstract: "This paper examines the integration of 3D printing and scanning technologies in biomedical applications, with a focus on prosthetics, anatomical models, and custom medical devices. It includes case studies and technical considerations for implementation.",
      link: "#",
      image: "https://images.unsplash.com/photo-1581093458791-9dc6be3b8883?q=80&w=1000&auto=format&fit=crop",
      tags: ["3D Printing", "Biomedical Engineering", "Additive Manufacturing"]
    },
    {
      title: "Robotics in Automation: A Case Study of the Robot Dog Platform",
      journal: "Robotics and Automation Systems",
      year: "2023",
      abstract: "This research presents a comprehensive case study of the Robot Dog platform, analyzing its mechanical design, control systems, and AI capabilities. The study highlights applications in industrial inspection, security, and hazardous environment operations.",
      link: "#",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1470&auto=format&fit=crop",
      tags: ["Robotics", "Autonomous Systems", "AI Integration"]
    }
  ];
  
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };
  
  return (
    <>
      <CursorFollower />
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="min-h-[50vh] flex flex-col justify-center px-6 md:px-10 lg:px-20">
          <div className="container mx-auto max-w-6xl">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Research & Publications
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore my research contributions in the fields of mechanical engineering, robotics, 
              digital twin technologies, additive manufacturing, and automation.
            </motion.p>
            
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="https://www.researchgate.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <BookOpen className="mr-2 h-5 w-5" /> 
                Visit my ResearchGate Profile
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>
        
        {/* Publications */}
        <section className="py-16 px-6 md:px-10 lg:px-20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-heading">Publications</h2>
            
            <div className="space-y-12 mt-12">
              {publications.map((pub, i) => (
                <motion.div
                  key={pub.title}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-card rounded-2xl overflow-hidden shadow-md"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={variants}
                  custom={i}
                >
                  <div className="h-full">
                    <img 
                      src={pub.image} 
                      alt={pub.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 md:col-span-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {pub.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-2">{pub.title}</h3>
                    <p className="text-primary mb-4">
                      {pub.journal}, {pub.year}
                    </p>
                    
                    <p className="text-muted-foreground mb-6">
                      {pub.abstract}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button asChild variant="outline">
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          Read Full Paper <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      
                      <Button asChild variant="secondary">
                        <a href={pub.link} download>
                          Download PDF <ArrowDownToLine className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Research Interests */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-card">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-heading">Research Interests</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Digital Twin Technologies",
                  description: "Exploring the implementation and optimization of digital twins for manufacturing and engineering applications, with focus on real-time data integration and predictive maintenance."
                },
                {
                  title: "Robotics & Autonomous Systems",
                  description: "Research in advanced robotics platforms, focusing on navigation algorithms, sensor fusion, and application of AI for autonomous decision-making in complex environments."
                },
                {
                  title: "Additive Manufacturing",
                  description: "Investigating novel approaches in 3D printing technologies, materials science, and applications in various industries, particularly in biomedical and aerospace sectors."
                },
                {
                  title: "Sustainable Engineering",
                  description: "Developing energy-efficient systems, sustainable manufacturing processes, and eco-friendly design methodologies to minimize environmental impact."
                },
                {
                  title: "Human-Machine Interaction",
                  description: "Researching intuitive interfaces for complex machinery and robotics systems, focusing on usability, accessibility, and ergonomics."
                },
                {
                  title: "Industrial Automation",
                  description: "Exploring advanced automation systems for manufacturing, focusing on flexible production lines, collaborative robots, and Industry 4.0 implementation strategies."
                }
              ].map((interest, i) => (
                <motion.div
                  key={interest.title}
                  className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={variants}
                  custom={i}
                >
                  <h3 className="text-xl font-semibold mb-3">{interest.title}</h3>
                  <p className="text-muted-foreground">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Ongoing Research */}
        <section className="py-16 px-6 md:px-10 lg:px-20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-heading">Ongoing Research</h2>
            
            <div className="bg-card rounded-2xl p-8 shadow-md mt-12">
              <h3 className="text-2xl font-semibold mb-4">Current Projects</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h4 className="text-xl font-medium mb-2">Advanced Digital Twin Implementation for Manufacturing Systems</h4>
                  <p className="text-muted-foreground mb-2">
                    Developing comprehensive digital twin architectures that integrate real-time data from multiple sensors, 
                    machine learning for predictive maintenance, and visualization interfaces for enhanced monitoring and control.
                  </p>
                  <p className="text-sm text-primary">In collaboration with MyEquation Research Lab</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h4 className="text-xl font-medium mb-2">Biomedical Applications of Additive Manufacturing</h4>
                  <p className="text-muted-foreground mb-2">
                    Exploring the use of advanced 3D printing technologies for creating customized prosthetics, 
                    anatomical models for surgical planning, and biocompatible implants with improved functionality and integration.
                  </p>
                  <p className="text-sm text-primary">In collaboration with Medical Engineering Institute</p>
                </div>
                
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h4 className="text-xl font-medium mb-2">AI-Enhanced Robotics for Complex Environments</h4>
                  <p className="text-muted-foreground mb-2">
                    Developing advanced robotics systems with AI capabilities for navigation, object recognition, 
                    and autonomous decision-making in complex and dynamic environments. Applications include search and rescue, 
                    industrial inspection, and hazardous material handling.
                  </p>
                  <p className="text-sm text-primary">In collaboration with Academy of Robotics</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button asChild>
                  <a href="#" className="inline-flex items-center">
                    Research Collaboration Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Research;
