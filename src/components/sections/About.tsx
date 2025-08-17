import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { personalInfo } from "@/data/portfolio";

export const About = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
      id="about"
      ref={elementRef}
      className="section-padding bg-white/60 dark:bg-gray-900/30 relative"
    >
      <div className="absolute inset-0 -z-10 surface-gradient opacity-40 dark:opacity-30" />
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="section-title gradient-text mb-4">About Me</h2>
            <div className="section-accent" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="border-0 shadow-lg bg-white dark:bg-gray-900">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    My Journey
                  </h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      I'm a passionate frontend developer with a love for
                      creating beautiful, functional, and user-centered digital
                      experiences. My journey in web development started with
                      curiosity about how websites work, and it has evolved into
                      a career focused on building modern, accessible
                      applications.
                    </p>
                    <p>
                      I specialize in React and TypeScript, with a strong
                      emphasis on writing clean, maintainable code and following
                      best practices. I'm constantly learning new technologies
                      and techniques to stay current in this ever-evolving
                      field.
                    </p>
                    <p>
                      When I'm not coding, you can find me exploring new design
                      trends, contributing to open-source projects, or sharing
                      knowledge with the developer community.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="border-0 shadow-lg bg-white dark:bg-gray-900">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Quick Facts
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {personalInfo.contact.location}
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-5 w-5 bg-green-500 rounded-full mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">
                        Available for new opportunities
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-5 w-5 bg-purple-500 rounded-full mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">
                        Open to remote work and collaboration
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  What I Bring to the Table
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-white font-bold text-lg">💻</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Clean Code
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Well-structured, maintainable code following industry best
                      practices
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-white font-bold text-lg">🎨</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      UI/UX Focus
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      User-centered design approach with attention to detail
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-white font-bold text-lg">⚡</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Performance
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Optimized applications for speed and scalability
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
