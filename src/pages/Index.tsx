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
        {/* Hero Section - Updated with modern UI */}
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-10 lg:px-20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl -z-10"></div>
          
          <div className="container mx-auto z-10">
            <motion.p
              className="text-lg md:text-xl mb-6 text-primary font-inter font-light uppercase tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Engineering the Future
            </motion.p>
            
            <div className="mb-6">
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Swaraj <span className="text-primary">Irranki</span>
              </motion.h1>
            </div>
            
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-medium my-6 text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Smart Technologies, Modern Solutions
            </motion.h2>
            
            <div className="max-w-2xl h-[1px] bg-gradient-to-r from-primary/80 to-background my-8"></div>
            
            <motion.p
              className="text-lg md:text-xl max-w-2xl mb-12 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Mechanical engineer specializing in robotics, digital twin technologies,
              additive manufacturing, and automation. Building innovative solutions for tomorrow's challenges.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300"
                onMouseMove={handleMagneticEffect}
                onMouseLeave={handleMagneticLeave}
              >
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-lg bg-transparent text-primary px-8 py-6 rounded-lg hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300"
                onMouseMove={handleMagneticEffect}
                onMouseLeave={handleMagneticLeave}
              >
                <Link to="/contact">Contact Me</Link>
              </Button>
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <p className="text-muted-foreground mb-2 text-sm">Scroll to explore</p>
              <div className="w-[2px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
            </motion.div>
          </div>
        </section>
        
        {/* Skills Section - Modern UI update */}
        <section className="py-28 px-6 md:px-10 lg:px-20 bg-card relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
          <div className="container mx-auto">
            <h2 className="section-heading relative z-10 inline-block">
              <span className="text-primary">#</span> My Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {[
                { icon: Cpu, title: "Design", text: "Expertise in CAD software including Fusion 360, AutoCAD, and SolidWorks" },
                { icon: Cog, title: "Simulation", text: "Proficient in ANSYS, MATLAB and simulation environments" },
                { icon: Code, title: "AI/ML", text: "Python, ML, OpenCV, Keras, and chatbot development" },
                { icon: Lightbulb, title: "Coding", text: "Strong programming skills including Python, edge computing, and IoT" }
              ].map((skill, i) => (
                <motion.div
                  key={skill.title}
                  className="bg-background/60 backdrop-blur-sm rounded-xl p-8 border border-border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={variants}
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <skill.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Projects - Keep and modernize */}
        <section className="py-28 px-6 md:px-10 lg:px-20 relative">
          <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl -z-10"></div>
          <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl -z-10"></div>
          
          <div className="container mx-auto">
            <h2 className="section-heading">
              <span className="text-primary">#</span> Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
                  className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={variants}
                >
                  <div className="absolute inset-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>
                  </div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-light opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-inter uppercase tracking-wider text-secondary mb-2">{project.category}</span>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="mb-6 text-light/80 line-clamp-2 font-inter">{project.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="self-start text-light border-light hover:bg-light/10 transition-all duration-300 w-fit"
                    >
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Button 
                asChild 
                size="lg"
                className="bg-primary text-primary-foreground text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300"
                onMouseMove={handleMagneticEffect}
                onMouseLeave={handleMagneticLeave}
              >
                <Link to="/portfolio">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Education & Certifications - Modern update */}
        <section className="py-28 px-6 md:px-10 lg:px-20 bg-card relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
          <div className="container mx-auto">
            <h2 className="section-heading">
              <span className="text-primary">#</span> Education & Certifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <motion.div
                className="bg-background/60 backdrop-blur-sm rounded-xl p-8 border border-border shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                custom={0}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-6">Academic Education</h3>
                <ul className="space-y-6">
                  <li className="border-l-2 border-primary pl-6 py-1">
                    <p className="font-bold text-xl">Mechanical Engineering</p>
                    <p className="text-muted-foreground">Bachelor's Degree</p>
                  </li>
                  <li className="border-l-2 border-primary pl-6 py-1">
                    <p className="font-bold text-xl">Manufacturing & Automation</p>
                    <p className="text-muted-foreground">Specialized Training</p>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                className="bg-background/60 backdrop-blur-sm rounded-xl p-8 border border-border shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                custom={1}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
                <ul className="space-y-6">
                  <li className="border-l-2 border-secondary pl-6 py-1">
                    <p className="font-bold text-xl">3D Printing & Scanning</p>
                    <p className="text-muted-foreground">Coursera</p>
                  </li>
                  <li className="border-l-2 border-secondary pl-6 py-1">
                    <p className="font-bold text-xl">AI/ML in Engineering</p>
                    <p className="text-muted-foreground">MyEquation Academy</p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Research & Publications - Modern update */}
        <section className="py-28 px-6 md:px-10 lg:px-20 relative">
          <div className="absolute top-40 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10"></div>
          <div className="container mx-auto">
            <h2 className="section-heading">
              <span className="text-primary">#</span> Research & Publications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
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
                  className="bg-background/60 backdrop-blur-sm rounded-xl p-8 border border-border shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={variants}
                  custom={i}
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <paper.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{paper.title}</h3>
                  <p className="text-muted-foreground mb-6">{paper.publisher}, {paper.year}</p>
                  <Button variant="outline" size="sm">
                    Read Paper <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-2 border-primary text-lg bg-transparent text-primary px-8 py-6 rounded-lg hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300"
                onMouseMove={handleMagneticEffect}
                onMouseLeave={handleMagneticLeave}
              >
                <Link to="/research">View All Research <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Call to Action - Modern UI */}
        <section className="py-28 px-6 md:px-10 lg:px-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to collaborate?</h2>
              <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
              <p className="text-xl max-w-2xl mx-auto mb-10 opacity-90">
                Let's discuss how my expertise in mechanical engineering, robotics, and automation can contribute to your project.
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 interactive magnetic-button text-lg px-8 py-6 rounded-lg shadow-lg hover:-translate-y-1 transition-all duration-300"
                onMouseMove={handleMagneticEffect}
                onMouseLeave={handleMagneticLeave}
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
