
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/CursorFollower';

const Expertise = () => {
  const expertiseAreas = [
    {
      category: "CAD Design",
      skills: [
        { name: "Fusion 360", level: 95 },
        { name: "AutoCAD", level: 90 },
        { name: "SolidWorks", level: 85 },
        { name: "3D Modeling", level: 90 },
        { name: "Technical Drawing", level: 80 }
      ],
      description: "Extensive experience with various CAD software to create detailed 3D models, assemblies, and technical drawings for mechanical systems and components.",
      icon: "📐"
    },
    {
      category: "Simulation",
      skills: [
        { name: "ANSYS", level: 80 },
        { name: "MATLAB", level: 85 },
        { name: "Finite Element Analysis", level: 75 },
        { name: "Computational Fluid Dynamics", level: 70 },
        { name: "Structural Analysis", level: 80 }
      ],
      description: "Proficient in simulation environments for testing designs, analyzing performance, and optimizing mechanical systems before physical prototyping.",
      icon: "🔬"
    },
    {
      category: "Robotics & Digital Twins",
      skills: [
        { name: "Copela Sim", level: 85 },
        { name: "Digital Twin Technologies", level: 80 },
        { name: "Robot Kinematics", level: 75 },
        { name: "Sensor Integration", level: 70 },
        { name: "Control Systems", level: 75 }
      ],
      description: "Specialized knowledge in robotics development and implementation of digital twin technologies for real-time monitoring and simulation of physical assets.",
      icon: "🤖"
    },
    {
      category: "Automation & IoT",
      skills: [
        { name: "PLC Programming", level: 80 },
        { name: "SCADA Systems", level: 75 },
        { name: "Industrial Automation", level: 85 },
        { name: "IoT Device Integration", level: 70 },
        { name: "Edge Computing", level: 65 }
      ],
      description: "Experience with automation systems, PLC programming, SCADA integration, and IoT solutions for industrial applications.",
      icon: "⚙️"
    },
    {
      category: "Additive Manufacturing",
      skills: [
        { name: "Meshmixer", level: 90 },
        { name: "NetFabb", level: 85 },
        { name: "3D Printing Technologies", level: 95 },
        { name: "Material Selection", level: 85 },
        { name: "Post-Processing Techniques", level: 80 }
      ],
      description: "Comprehensive knowledge of additive manufacturing processes, 3D printing technologies, and related software tools.",
      icon: "🖨️"
    },
    {
      category: "Software & AI/ML",
      skills: [
        { name: "Python", level: 75 },
        { name: "OpenCV", level: 70 },
        { name: "Keras", level: 65 },
        { name: "Machine Learning", level: 60 },
        { name: "Computer Vision", level: 65 }
      ],
      description: "Programming skills with focus on Python, machine learning applications for engineering, computer vision, and chatbot development.",
      icon: "💻"
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
              My Expertise
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              With a strong foundation in mechanical engineering and specialized training in cutting-edge technologies,
              I offer expertise across several technical domains. Here's a detailed breakdown of my skills and capabilities.
            </motion.p>
          </div>
        </section>
        
        {/* Expertise Areas */}
        <section className="py-16 px-6 md:px-10 lg:px-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {expertiseAreas.map((area, i) => (
                <motion.div
                  key={area.category}
                  className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={variants}
                  custom={i}
                >
                  <div className="mb-6 text-4xl">{area.icon}</div>
                  <h2 className="text-2xl font-semibold mb-4">{area.category}</h2>
                  <p className="text-muted-foreground mb-6">
                    {area.description}
                  </p>
                  
                  <div className="space-y-4">
                    {area.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span>{skill.name}</span>
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
              ))}
            </div>
          </div>
        </section>
        
        {/* Certifications & Training */}
        <section className="py-16 px-6 md:px-10 lg:px-20 bg-card">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-heading">Certifications & Training</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "3D Printing Course",
                  issuer: "Coursera",
                  date: "2022",
                  description: "Comprehensive course on additive manufacturing processes, materials, and applications."
                },
                {
                  title: "Robotics Specialization",
                  issuer: "MyEquation",
                  date: "2023",
                  description: "Advanced training in robotics system design, programming, and implementation."
                },
                {
                  title: "Digital Twin Technologies",
                  issuer: "Academy of Robotics",
                  date: "2022",
                  description: "Specialized training in implementing digital twin solutions for manufacturing."
                },
                {
                  title: "AI for Engineers",
                  issuer: "Tech Learning Platform",
                  date: "2023",
                  description: "Applied AI and ML techniques specifically for engineering applications."
                },
                {
                  title: "AutoCAD Professional",
                  issuer: "Autodesk",
                  date: "2021",
                  description: "Professional certification in AutoCAD design and drafting."
                },
                {
                  title: "EV Simulation",
                  issuer: "Engineering Institute",
                  date: "2022",
                  description: "Electric vehicle design and performance simulation techniques."
                }
              ].map((cert, i) => (
                <motion.div
                  key={cert.title}
                  className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={variants}
                  custom={i}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-primary mb-2">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Technical Approach */}
        <section className="py-16 px-6 md:px-10 lg:px-20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-heading">My Technical Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <motion.div
                className="bg-card rounded-2xl p-8 shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                custom={0}
              >
                <h3 className="text-2xl font-semibold mb-4">Design Philosophy</h3>
                <p className="text-muted-foreground mb-6">
                  I approach design challenges with a focus on functionality, efficiency, and user experience. 
                  Each project begins with thorough requirements gathering, followed by iterative design processes 
                  that incorporate feedback and testing at every stage.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Human-centered design principles
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Iterative prototyping and testing
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Sustainable material selection
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Design for manufacturability
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                className="bg-card rounded-2xl p-8 shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                custom={1}
              >
                <h3 className="text-2xl font-semibold mb-4">Problem-Solving Method</h3>
                <p className="text-muted-foreground mb-6">
                  Complex engineering problems require methodical approaches combined with creative thinking. 
                  My process involves breaking down challenges into manageable components, applying appropriate 
                  analytical tools, and leveraging technology to develop optimal solutions.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Systematic root cause analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Data-driven decision making
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Cross-disciplinary collaboration
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Innovative technology integration
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Expertise;
