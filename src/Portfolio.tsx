import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Box, 
  User, 
  Cpu, 
  Layers, 
  Share2, 
  Mail, 
  Github, 
  Twitter, 
  Instagram, 
  Linkedin,
  Phone,
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hero', href: '#hero', icon: Box },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center glow-border">
            <Box size={18} className="text-black" />
          </div>
          <span className="font-mono font-bold tracking-widest text-xl glow-text uppercase">DHRUVDATT.3D</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-mono text-white/60 hover:text-accent transition-colors flex items-center gap-2"
            >
              <link.icon size={14} />
              {link.name.toUpperCase()}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-mono text-white/70 hover:text-accent flex items-center gap-3"
                >
                  <link.icon size={20} />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ 
          backgroundImage: 'url("https://drive.google.com/thumbnail?id=1scLJdFTUWhu32bcdw0SSYbgtDZBKuhj7&sz=w1920")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505]" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
      
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-mono text-accent tracking-[0.2em] mb-6 uppercase">
            System Online // 3D Visual Artist
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[0.9] tracking-tighter">
            DHRUVDATT KHANKE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 glow-text text-3xl md:text-5xl block mt-6 font-mono tracking-[0.2em]">BLENDER 3D ARTIST</span>
          </h1>
          <p className="max-w-xl mx-auto text-white/50 text-lg mb-10 font-light">
            Pushing the boundaries of 3D art through Blender, cinematic lighting, and futuristic environments.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="px-8 py-4 bg-accent text-black font-bold rounded-sm hover:bg-white transition-all glow-border flex items-center gap-2 group">
              VIEW PROJECTS
              <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 glass-panel text-white font-bold rounded-sm hover:bg-white/10 transition-all flex items-center gap-2">
              GET IN TOUCH
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-panel p-3 relative z-10">
            <img 
              src="https://picsum.photos/seed/dhruvdatt/800/1000" 
              alt="Dhruvdatt Khanke" 
              className="w-full h-full object-cover rounded-2xl opacity-90 grayscale group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-accent/30 rounded-tl-3xl z-0" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent/30 rounded-br-3xl z-0" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-2xl glow-border z-20 hidden lg:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                <Box size={24} />
              </div>
              <div>
                <span className="block text-lg font-bold text-white">3D ARTIST</span>
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Creative Visionary</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase mb-4 block">01 // The Creator</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-2 leading-tight">DHRUVDATT <br /><span className="text-accent">KHANKE</span></h2>
            <div className="w-20 h-1 bg-accent rounded-full mt-4" />
          </div>

          <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
            <p>
              I am a SY B.Tech Electronics student at <span className="text-white font-medium">Walchand College of Engineering, Sangli</span>. My journey into the digital realm began with a fascination for how light interacts with geometry.
            </p>
            <p>
              Specializing in <span className="text-accent">Blender 3D</span>, I transform abstract concepts into cinematic realities. The projects showcased here are just a <span className="text-white font-medium">small part of the extensive work and techniques</span> I've mastered in Blender, from complex modeling to advanced node-based shading.
            </p>
            <p>
              I am actively seeking <span className="text-accent font-medium">internship and professional work opportunities</span> where I can contribute my 3D skills to real-world VFX, CGI, or animation projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="p-6 glass-panel rounded-2xl border-l-4 border-accent">
              <h4 className="font-mono text-accent text-xs mb-2 uppercase tracking-widest">Location</h4>
              <p className="text-lg text-white font-medium">Sangli, India</p>
            </div>
            <div className="p-6 glass-panel rounded-2xl border-l-4 border-blue-500">
              <h4 className="font-mono text-blue-500 text-xs mb-2 uppercase tracking-widest">Expertise</h4>
              <p className="text-lg text-white font-medium">3D / VFX / CGI</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const coreSkills = [
    { name: "3D Modeling", level: "92%" },
    { name: "Animation", level: "85%" },
    { name: "Rendering", level: "88%" },
    { name: "Lighting", level: "90%" },
    { name: "Scene Building", level: "82%" }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4 block">02 // Arsenal</span>
          <h2 className="text-4xl font-bold">TECHNICAL CAPABILITIES</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-3xl border-accent/20"
          >
            <div className="grid gap-8">
              {coreSkills.map((skill, i) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-lg font-bold tracking-wider uppercase">{skill.name}</h3>
                    <span className="font-mono text-accent text-xs">{skill.level}</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-accent to-blue-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "Trailer for ELESA Club",
      category: "Trailer / Animation",
      image: "https://drive.google.com/thumbnail?id=1v9yPhFIHu-s_QdojF_K5EKV7bVj7geif&sz=w1000",
      videoUrl: "https://drive.google.com/file/d/1v9yPhFIHu-s_QdojF_K5EKV7bVj7geif/preview",
      tags: ["First Project", "Beginner", "Sept 18"],
      description: "My first project for an organization. Created as a beginner and launched on Sept 18th."
    },
    {
      title: "Sci-Fi Robot Animation",
      category: "Animation / Sci-Fi",
      image: "https://drive.google.com/thumbnail?id=1xdleoCMpTmfKBC3xJWF6ADPkf6Ml5SV0&sz=w1000",
      videoUrl: "https://drive.google.com/file/d/1xdleoCMpTmfKBC3xJWF6ADPkf6Ml5SV0/preview",
      tags: ["First Animation", "Ryan King", "Blender"],
      description: "My very first 3D animation. Learned the fundamentals from Blender artist Ryan King."
    },
    {
      title: "BMW Cinematic Animation",
      category: "Automotive / CGI",
      image: "https://drive.google.com/thumbnail?id=1Hb-fhfPQD3knMlD8SNPTsnW8DcCEL2tM&sz=w1000",
      videoUrl: "https://drive.google.com/file/d/1Hb-fhfPQD3knMlD8SNPTsnW8DcCEL2tM/preview",
      tags: ["BMW", "Cinematic", "WIP"],
      description: "A cinematic scene featuring a BMW, part of an upcoming showreel. Focused on lighting and automotive rendering."
    },
    {
      title: "Land Cruiser Cinematic Render",
      category: "Automotive / CGI",
      image: "https://drive.google.com/thumbnail?id=1l2E_R9uQbAQo_vSIY8mT4P01N408eM5F&sz=w1000",
      tags: ["Land Cruiser", "Cinematic", "Render"],
      description: "A high-fidelity cinematic shot of a Land Cruiser in a rugged environment, focusing on material realism and environmental lighting."
    },
    {
      title: "Gipsy Danger Animation",
      category: "Animation / Sci-Fi",
      image: "https://drive.google.com/thumbnail?id=1HQy1mh1I8dDYQi49caZA30R_PcltXUAZ&sz=w1000",
      videoUrl: "https://drive.google.com/file/d/1HQy1mh1I8dDYQi49caZA30R_PcltXUAZ/preview",
      tags: ["Pacific Rim", "Gipsy Danger", "Animation"],
      description: "A tribute animation featuring the iconic Gipsy Danger Jaeger from Pacific Rim. Focused on mechanical movement and scale."
    },
    {
      title: "Bold Emperors Title Animation",
      category: "Animation / Gaming",
      image: "https://drive.google.com/thumbnail?id=1GzrcgUMBhbEs7e1pzYNpZtog_3iDzcay&sz=w1000",
      externalUrl: "https://www.instagram.com/reel/DV6r7bXk5_TMkUQw_jEJsiXHDnq7IQDzR1NMuw0/?igsh=NWJnd3A1dmFjZ2th",
      tags: ["Gaming", "Title Animation", "Bold Emperors"],
      description: "A custom title animation created for the 'Bold Emperors' gamer friends group. Focused on high-energy motion graphics."
    },
    {
      title: "The Pirate's Legacy",
      category: "Environment / 3D Modeling",
      image: "https://drive.google.com/thumbnail?id=1Js8TaXUStBy2YtV6QXZAx042VI-02Urj&sz=w1000",
      images: [
        "https://drive.google.com/thumbnail?id=1Js8TaXUStBy2YtV6QXZAx042VI-02Urj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zTBTosK27Oohalw4qVZjGYFsP7-MibgH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tGoWTzZ_2EtKHjk3b2_EevsICwPAe5fN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gBHnOOUf9y4ntOHc3PknCIf2Z5s8SCsH&sz=w1000"
      ],
      tags: ["Long-term Project", "Hard Surface", "Environment"],
      description: "A detailed 3D environment featuring a pirate ship, a passion project I've been refining over a long period. Focused on complex modeling and storytelling through environment design."
    },
    {
      title: "Drone Animation",
      category: "Modeling / Animation",
      image: "https://drive.google.com/thumbnail?id=1pAbxIPWb3jhU4AaFf_4Kv33KBdzfIvtf&sz=w1000",
      videoUrl: "https://drive.google.com/file/d/1pAbxIPWb3jhU4AaFf_4Kv33KBdzfIvtf/preview",
      tags: ["Drone", "Modeling", "Animation"],
      description: "A custom-modeled and animated drone project. Focused on mechanical design and flight dynamics in Blender."
    }
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.images) {
      setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.images) {
      setActiveImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4 block">03 // Archive</span>
          <h2 className="text-4xl md:text-5xl font-bold">SELECTED WORKS</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl glass-panel cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
              <span className="text-accent font-mono text-[10px] uppercase tracking-widest mb-2 block">{project.category}</span>
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-mono px-2 py-1 bg-white/10 rounded-sm">{tag}</span>
                ))}
              </div>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-colors">
                <ExternalLink size={18} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video glass-panel rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>
              
              {selectedProject.videoUrl ? (
                <iframe
                  src={selectedProject.videoUrl}
                  className="w-full h-full border-none"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : selectedProject.externalUrl ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-black p-12 text-center">
                  <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-8">
                    <Instagram size={48} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">View on Instagram</h3>
                  <p className="text-white/60 mb-8 max-w-md">This project is hosted on Instagram. Click the button below to view the full reel.</p>
                  <a 
                    href={selectedProject.externalUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-accent text-black font-bold rounded-full hover:bg-white transition-all flex items-center gap-2"
                  >
                    OPEN REEL <ExternalLink size={18} />
                  </a>
                </div>
              ) : selectedProject.images ? (
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  <img 
                    src={selectedProject.images[activeImageIndex]} 
                    alt={`${selectedProject.title} - ${activeImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 w-12 h-12 glass-panel rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-colors z-20"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 w-12 h-12 glass-panel rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-colors z-20"
                      >
                        <ChevronRight size={24} />
                      </button>
                      
                      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {selectedProject.images.map((_: any, idx: number) => (
                          <div 
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-all ${idx === activeImageIndex ? 'bg-accent w-6' : 'bg-white/30'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
              
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-accent">{selectedProject.title}</h3>
                <p className="text-white/60 text-sm mt-2">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Contact = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "dhruvdattkhanke@gmail.com",
      icon: Mail,
      link: "mailto:dhruvdattkhanke@gmail.com"
    },
    {
      label: "Phone",
      value: "+91 9422826537",
      icon: Phone,
      link: "tel:+919422826537"
    },
    {
      label: "LinkedIn",
      value: "Dhruvdatt Khanke",
      icon: Linkedin,
      link: "https://linkedin.com/in/dhruvdatt-khanke-97812832a"
    },
    {
      label: "Instagram",
      value: "@dkdhruv44",
      icon: Instagram,
      link: "https://www.instagram.com/dkdhruv44?igsh=MTNqZW43cWV6dTgwNQ=="
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4 block">04 // Connectivity</span>
          <h2 className="text-4xl font-bold">GET IN TOUCH</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, i) => (
            <motion.a
              key={info.label}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center gap-4 hover:border-accent/50 transition-all group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <info.icon size={28} />
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">{info.label}</h4>
                <p className="font-bold text-sm">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center">
            <Box size={14} className="text-black" />
          </div>
          <span className="font-mono font-bold tracking-widest text-sm uppercase">DHRUVDATT.3D</span>
        </div>
        <p className="text-white/30 text-xs font-mono">
          &copy; 2026 DHRUVDATT KHANKE. ALL RIGHTS RESERVED. // BUILT WITH AI
        </p>
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/dhruvdatt-khanke-97812832a" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-accent transition-colors"><Linkedin size={18} /></a>
          <a href="https://www.instagram.com/dkdhruv44?igsh=MTNqZW43cWV6dTgwNQ==" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-accent transition-colors"><Instagram size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
