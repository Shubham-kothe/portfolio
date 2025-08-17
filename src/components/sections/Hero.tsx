import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useScrollTo } from "@/hooks/useScrollTo";
import { personalInfo } from "@/data/portfolio";

export const Hero = () => {
  const { scrollToSection } = useScrollTo();

  // pointer gradient tracking
  if (typeof window !== 'undefined') {
    document.onmousemove = (e) => {
      document.documentElement.style.setProperty('--pointer-x', e.clientX + 'px');
      document.documentElement.style.setProperty('--pointer-y', e.clientY + 'px');
    };
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="pointer-gradient" aria-hidden />
      <div className="absolute inset-0 surface-gradient opacity-90" />
      <div className="hero-ring" />
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(140deg,#6366f1 0%,#8b5cf6 50%,#ec4899 100%)",
            opacity: 0.15,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(140deg,#ec4899 0%,#8b5cf6 50%,#6366f1 100%)",
            opacity: 0.18,
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="relative z-10 section-container pb-28 pt-48 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12 max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative">
              <div className="hero-avatar-ring" />
              <Avatar className="w-36 h-36 ring-4 ring-white/60 dark:ring-white/10 shadow-elevate gradient-border">
                <AvatarImage
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  {personalInfo.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="hero-heading">
              <span className="gradient-text">
                {personalInfo.name}
              </span>
            </h1>
            <p className="hero-subheading">
              {personalInfo.title}
            </p>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="hero-paragraph prose-muted"
          >
            {personalInfo.bio}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-5"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="btn-gradient rounded-full px-10 py-7 text-base font-semibold"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="ghost"
              size="lg"
              className="btn-outline-gradient rounded-full px-10 py-7 text-base font-semibold"
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="glass-pill hero-social-bar">
              {personalInfo.contact.github && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
              )}
              {personalInfo.contact.linkedin && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              )}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={`mailto:${personalInfo.contact.email}`}
                className="icon-btn"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="pt-4">
            <motion.button
              onClick={() => scrollToSection("about")}
              className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-8 w-8" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
