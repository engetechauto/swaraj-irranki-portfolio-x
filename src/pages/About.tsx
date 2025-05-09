
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/CursorFollower';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Tool, Star, BookOpen } from 'lucide-react';

const About = () => {
  const [loading, setLoading] = useState(false);
  
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
        <section className="min-h-[60vh] flex flex-col justify-center px-6 md:px-10 lg:px-20">
          <div className="container mx-auto max-w-6xl">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-lg mb-6 text-muted-foreground">
                  Hello! I'm Swaraj Irranki, a mechanical engineer with a passion for pushing the boundaries of what's possible through innovative technologies.
                </p>
                
                <p className="text-lg mb-6 text-muted-foreground">
                  My journey in engineering has been guided by curiosity and a desire to create meaningful solutions. I specialize in robotics, digital twin technologies, additive manufacturing, and automation – areas that are transforming industries and creating new possibilities.
                </p>
                
                <p className="text-lg mb-8 text-muted-foreground">
                  With a strong foundation in mechanical engineering and specialized training in manufacturing and automation, I bring a multidisciplinary approach to every project I undertake.
                </p>
                
                <Button 
                  asChild
                  className="flex items-center space-x-2"
                >
                  <a href="#" className="inline-flex items-center">
                    <Download className="mr-2 h-5 w-5" /> Download Resume
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
                    alt="Swaraj Irranki" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Education & Experience */}
        <section className="py-20 px-6 md:px-10 lg:px-20 bg-card">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-heading">Education & Experience</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              {/* Education */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                custom={0}
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <BookOpen className="mr-3 h-6 w-6 text-primary" />
                  Education
                </h3>
                
                <div className="space-y-8">
                  {[
                    {
                      degree: "Bachelor's in Mechanical Engineering",
                      institution: "Engineering University",
                      years: "2018 - 2022",
                      description: "Focused on robotics, manufacturing processes, and design optimization."
                    },
                    {
                      degree: "Specialized Training in Manufacturing & Automation",
                      institution: "Tech Institute",
                      years: "2022",
                      description: "Advanced training in automation systems, PLCs, and industrial robotics."
                    }
                  ].map((edu, i) => (
                    <div key={i} className="border-l-4 border-primary pl-4 py-1">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-primary">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mb-2">{edu.years}</p>
                      <p>{edu.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Experience */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                custom={1}
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Star className="mr-3 h-6 w-6 text-primary" />
                  Experience
                </h3>
                
                <div className="space-y-8">
                  {[
                    {
                      position: "Research Intern",
                      company: "MyEquation",
                      years: "2023 - Present",
                      description: "Working on Robot Dog (ROBOAI) project, implementing digital twin technologies."
                    },
                    {
                      position: "Engineering Intern",
                      company: "HPCL",
                      years: "2022",
                      description: "Worked on automation systems and process optimization."
                    },
                    {
                      position: "Research Assistant",
                      company: "BITS Hyderabad",
                      years: "2021 - 2022",
                      description: "Assisted in research on additive manufacturing techniques and applications."
                    },
                    {
                      position: "Intern",
                      company: "Academy of Robotics",
                      years: "2021",
                      description: "Contributed to robotics projects and automation systems development."
                    }
                  ].map((exp, i) => (
                    <div key={i} className="border-l-4 border-primary pl-4 py-1">
                      <h4 className="font-semibold text-lg">{exp.position}</h4>
                      <p className="text-primary">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-2">{exp.years}</p>
                      <p>{exp.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Skills & Tools */}
        <section className="py-20 px-6 md:px-10 lg:px-20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-heading">Skills & Tools</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              {/* Technical Skills */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                custom={0}
              >
                <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
                
                <div className="space-y-4">
                  {[
                    { skill: "CAD Design", level: 90 },
                    { skill: "Robotics & Automation", level: 85 },
                    { skill: "Digital Twin Technologies", level: 80 },
                    { skill: "3D Printing & Scanning", level: 95 },
                    { skill: "Python Programming", level: 70 },
                    { skill: "AI/ML Applications", level: 65 },
                  ].map((skill) => (
                    <div key={skill.skill}>
                      <div className="flex justify-between mb-1">
                        <span>{skill.skill}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Tools & Software */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                custom={1}
              >
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Tool className="mr-2 h-5 w-5 text-primary" />
                  Tools & Software
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Fusion 360",
                    "AutoCAD",
                    "SolidWorks",
                    "ANSYS",
                    "MATLAB",
                    "Copela Sim",
                    "PLC Programming",
                    "SCADA Systems",
                    "Meshmixer",
                    "NetFabb",
                    "Python",
                    "OpenCV"
                  ].map((tool) => (
                    <div 
                      key={tool} 
                      className="bg-muted p-3 rounded-lg text-center hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 px-6 md:px-10 lg:px-20 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's work together</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              If you're interested in learning more or discussing potential collaborations, I'd love to connect with you!
            </p>
            <Button 
              asChild 
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
