
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import CursorFollower from '@/components/CursorFollower';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Cpu,
  Cog,
  Code,
  Lightbulb,
  Box,
  Layers,
  GraduationCap,
  FileText
} from 'lucide-react';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const nameRef = useRef<HTMLDivElement>(null);
  
  // Helper function for magnetic effect
  const applyMagneticEffect = (e: React.MouseEvent<HTMLElement>, strengthFactor = 0.3) => {
    const element = e.currentTarget;
    const boundingRect = element.getBoundingClientRect();
    
    const centerX = boundingRect.left + boundingRect.width / 2;
    const centerY = boundingRect.top + boundingRect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    element.style.transform = `translate(${distanceX * strengthFactor}px, ${distanceY * strengthFactor}px)`;
  };
  
  const resetPosition = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'translate(0, 0)';
  };
  
  const handleMagneticEffect = (e: React.MouseEvent<HTMLElement>) => {
    applyMagneticEffect(e);
  };
  
  const handleMagneticLeave = (e: React.MouseEvent<HTMLElement>) => {
    resetPosition(e);
  };
  
  useEffect(() => {
    if (!loading) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (nameRef.current) {
          nameRef.current.style.transform = `translateX(${scrollPosition * 0.1}px)`;
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [loading]);
  
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
  
  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }
  
  return (
    <>
      <CursorFollower />
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-10 lg:px-20 overflow-hidden">
          <div className="container mx-auto">
            <motion.p
              className="text-lg md:text-xl mb-4 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi there, I'm
            </motion.p>
            
            <div className="marquee-container">
              <div className="marquee" ref={nameRef}>
                <div className="marquee-content">
                  <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Swaraj Irranki
                  </motion.h1>
                </div>
              </div>
            </div>
            
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-medium my-6 text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Engineering modern solutions with smart technologies
            </motion.h2>
            
            <motion.p
              className="text-lg md:text-xl max-w-2xl mb-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Mechanical engineer specializing in robotics, digital twin technologies,
              additive manufacturing, and automation.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                asChild
                className="btn-primary interactive magnetic-button"
                onMouseMove={handleMagneticEffect}
                onMouseLeave={handleMagneticLeave}
              >
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
              
              <Button
                asChild
                className="btn-secondary interactive magnetic-button"
                onMouseMove={handleMagneticEffect}
                onMouseLeave={handleMagneticLeave}
              >
                <Link to="/contact">Contact Me</Link>
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="py-20 px-6 md:px-10 lg:px-20 bg-card">
          <div className="container mx-auto">
            <h2 className="section-heading">My Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Cpu, title: "Design", text: "Expertise in CAD software including Fusion 360, AutoCAD, and SolidWorks" },
                { icon: Cog, title: "Simulation", text: "Proficient in ANSYS, MATLAB and simulation environments" },
                { icon: Code, title: "AI/ML", text: "Python, ML, OpenCV, Keras, and chatbot development" },
                { icon: Lightbulb, title: "Coding", text: "Strong programming skills including Python, edge computing, and IoT" }
              ].map((skill, i) => (
                <motion.div
                  key={skill.title}
                  className="skill-card"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={variants}
                >
                  <skill.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Projects */}
        <section className="py-20 px-6 md:px-10 lg:px-20">
          <div className="container mx-auto">
            <h2 className="section-heading">Featured Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Robot Dog (MyEquation-ROBOAI)",
                  category: "Robotics",
                  image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1470&auto=format&fit=crop",
                  description: "Advanced robotics project focused on developing a quadruped robot with AI capabilities."
                },
                {
                  title: "Solar-powered Sewage Cleaning Machine",
                  category: "Sustainable Engineering",
                  image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=1000&auto=format&fit=crop",
                  description: "Eco-friendly solution for automated sewage cleaning powered by solar energy."
                },
                {
                  title: "Prosthetic Hand for Stroke Survivors",
                  category: "Biomedical Engineering",
                  image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1000&auto=format&fit=crop",
                  description: "Innovative prosthetic design using 3D printing and scanning technologies."
                },
              ].map((project, i) => (
                <motion.div
                  key={project.title}
                  className="project-card h-[350px] group"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={variants}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="project-card-overlay">
                    <span className="text-sm font-medium text-primary mb-1">{project.category}</span>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="mb-4 text-light/80 line-clamp-2">{project.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="self-start text-light border-light hover:bg-light/10"
                    >
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                asChild 
                className="btn-primary interactive magnetic-button"
                onMouseMove={handleMagneticEffect}
                onMouseLeave={handleMagneticLeave}
              >
                <Link to="/portfolio">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Education & Certifications */}
        <section className="py-20 px-6 md:px-10 lg:px-20 bg-card">
          <div className="container mx-auto">
            <h2 className="section-heading">Education & Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <motion.div
                className="bg-background rounded-xl p-6 shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                custom={0}
              >
                <GraduationCap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Academic Education</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">Mechanical Engineering</p>
                    <p className="text-muted-foreground">Bachelor's Degree</p>
                  </li>
                  <li>
                    <p className="font-medium">Manufacturing & Automation</p>
                    <p className="text-muted-foreground">Specialized Training</p>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                className="bg-background rounded-xl p-6 shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                custom={1}
              >
                <FileText className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">3D Printing & Scanning</p>
                    <p className="text-muted-foreground">Coursera</p>
                  </li>
                  <li>
                    <p className="font-medium">AI/ML in Engineering</p>
                    <p className="text-muted-foreground">MyEquation Academy</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Research & Publications */}
        <section className="py-20 px-6 md:px-10 lg:px-20">
          <div className="container mx-auto">
            <h2 className="section-heading">Research & Publications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: Box,
                  title: "Electric Motorbike Research",
                  publisher: "IRJET Publication",
                  year: "2023"
                },
                {
                  icon: Layers,
                  title: "Digital Twins Overview",
                  publisher: "Technology Review Journal",
                  year: "2022"
                },
                {
                  icon: Cpu,
                  title: "3D Printing & Scanning Integration",
                  publisher: "Engineering Today",
                  year: "2023"
                }
              ].map((paper, i) => (
                <motion.div
                  key={paper.title}
                  className="bg-card rounded-xl p-6 border border-border shadow-md"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={variants}
                  custom={i}
                >
                  <paper.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-1">{paper.title}</h3>
                  <p className="text-muted-foreground mb-4">{paper.publisher}, {paper.year}</p>
                  <Button variant="outline" size="sm">
                    Read Paper <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                asChild 
                className="btn-secondary interactive magnetic-button"
                onMouseMove={handleMagneticEffect}
                onMouseLeave={handleMagneticLeave}
              >
                <Link to="/research">View All Research <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 px-6 md:px-10 lg:px-20 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to collaborate?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Let's discuss how my expertise in mechanical engineering, robotics, and automation can contribute to your project.
            </p>
            <Button 
              asChild 
              className="bg-white text-primary hover:bg-white/90 interactive magnetic-button"
              onMouseMove={handleMagneticEffect}
              onMouseLeave={handleMagneticLeave}
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
