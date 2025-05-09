
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, Send, Github, Linkedin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/CursorFollower';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
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
  
  // Helper function for magnetic effect on social buttons
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
  
  return (
    <>
      <CursorFollower />
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-6 md:px-10 lg:px-20 py-12">
          <div className="container mx-auto max-w-6xl">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Let's Connect
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have a question about my work, interested in collaboration, or want to discuss a project? 
              I'm always open to new opportunities and conversations.
            </motion.p>
          </div>
        </section>
        
        {/* Contact Information & Form */}
        <section className="px-6 md:px-10 lg:px-20 py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                custom={0}
              >
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MailIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:contact@swarajirranki.com" className="text-muted-foreground hover:text-primary transition-colors">
                        contact@swarajirranki.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <PhoneIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        +1 (123) 456-7890
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPinIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        San Francisco Bay Area, California
                      </p>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-semibold mb-6 mt-12">Connect Online</h2>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-12 w-12 flex items-center justify-center rounded-full bg-[#0077B5] text-white hover:bg-[#0077B5]/80 transition-colors magnetic-button"
                    onMouseMove={(e) => applyMagneticEffect(e)}
                    onMouseLeave={resetPosition}
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-12 w-12 flex items-center justify-center rounded-full bg-[#333] text-white hover:bg-[#333]/80 transition-colors magnetic-button"
                    onMouseMove={(e) => applyMagneticEffect(e)}
                    onMouseLeave={resetPosition}
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  
                  <a 
                    href="https://researchgate.net" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-12 w-12 flex items-center justify-center rounded-full bg-[#00CCBB] text-white hover:bg-[#00CCBB]/80 transition-colors magnetic-button"
                    onMouseMove={(e) => applyMagneticEffect(e)}
                    onMouseLeave={resetPosition}
                    aria-label="ResearchGate"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9.148 9.148 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.69 31.69 0 0 0 .014 1.017 9.149 9.149 0 0 0 .05.727 8.36 8.36 0 0 0 .077.53c.029.148.065.292.113.437.245.743.65 1.303 1.214 1.68.565.376 1.255.564 2.073.564.818 0 1.508-.188 2.073-.565.564-.376.97-.936 1.213-1.68.048-.145.084-.29.113-.436.036-.173.06-.347.077-.53.026-.243.042-.484.05-.727.01-.282.014-.621.014-1.017 0-.395-.004-.734-.014-1.016a9.149 9.149 0 0 0-.05-.727 8.36 8.36 0 0 0-.077-.53 3.193 3.193 0 0 0-.113-.437c-.245-.743-.65-1.302-1.213-1.68C21.094.19 20.404 0 19.586 0zm-8.416 0L0 10.286l3.827 5.991 3.872-2.982c.071 1.935.465 3.343 1.179 4.225.713.881 1.688 1.327 2.923 1.327.7 0 1.325-.15 1.874-.45a3.549 3.549 0 0 0 1.31-1.225 5.033 5.033 0 0 0 .7-1.796 9.034 9.034 0 0 0 .197-1.939h-1.5c-.023.9-.142 1.556-.356 1.97-.214.414-.493.621-.84.621-.346 0-.602-.209-.769-.626-.167-.418-.247-1.12-.241-2.103L8.324 8.37V6.751l4.353-3.357V0zm9.193.7c.617 0 1.037.196 1.26.587.222.391.333 1.073.333 2.046 0 .973-.111 1.655-.333 2.046-.223.391-.643.587-1.26.587-.618 0-1.037-.196-1.26-.587-.222-.391-.333-1.073-.333-2.046 0-.973.111-1.655.333-2.046.223-.391.642-.587 1.26-.587zm-9.193 3.358l-4.779 3.717 1.41 2.22 3.369-2.625v-3.312zm3.35 7.536v3.05h-1.34v-.318a1.61 1.61 0 0 1-.514.318 1.537 1.537 0 0 1-.573.105c-.401 0-.733-.15-.995-.451-.263-.301-.394-.756-.394-1.364 0-.573.136-1.016.41-1.328.273-.312.648-.468 1.126-.468.193 0 .365.031.518.094a1.28 1.28 0 0 1 .417.29v-1.258h1.34zm-.125 2.097v-.863c-.06-.12-.147-.21-.262-.272a.845.845 0 0 0-.382-.094c-.199 0-.357.072-.475.216-.118.144-.177.342-.177.595 0 .286.046.502.137.65.092.148.246.221.462.221a.712.712 0 0 0 .387-.11.607.607 0 0 0 .31-.343z"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                custom={1}
                className="bg-card rounded-2xl p-8 shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can I help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="px-6 md:px-10 lg:px-20 py-16 bg-card">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  question: "What types of projects are you interested in collaborating on?",
                  answer: "I'm particularly interested in projects involving robotics, digital twin technologies, additive manufacturing, and automation. I enjoy challenges that combine mechanical engineering with emerging technologies."
                },
                {
                  question: "Are you available for consulting work?",
                  answer: "Yes, I offer consulting services in mechanical engineering design, robotics development, digital twin implementation, and automation systems. Please contact me with details about your project for availability."
                },
                {
                  question: "Do you offer services for 3D printing and prototyping?",
                  answer: "Yes, I can assist with 3D printing services, prototype development, and physical model creation. I specialize in designing parts optimized for additive manufacturing processes."
                },
                {
                  question: "What is your typical process for starting a new project?",
                  answer: "I typically begin with a detailed discovery call to understand your requirements, followed by a project scope document. After agreement on objectives and timeline, I develop an implementation plan and proceed with regular updates throughout the project lifecycle."
                }
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  className="bg-background p-6 rounded-xl shadow-md"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={variants}
                  custom={i}
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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

export default Contact;
