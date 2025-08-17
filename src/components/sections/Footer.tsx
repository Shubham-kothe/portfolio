import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/hooks/useScrollTo";
import { personalInfo } from "@/data/portfolio";

export const Footer = () => {
  const { scrollToTop } = useScrollTo();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 pt-16 pb-10 surface-gradient border-t border-white/30 dark:border-white/5">
      <div className="absolute inset-0 opacity-40 dark:opacity-30" />
      <div className="section-container">
        <div className="flex flex-col items-center space-y-10">
          {/* Back to top button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Name and title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {personalInfo.title}
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-gray-400 text-sm pt-8 border-t border-gray-800"
          >
            <p className="flex items-center justify-center space-x-1">
              <span>
                © {currentYear} {personalInfo.name}. Made with
              </span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and React.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
