import { motion } from "framer-motion";
import { Download } from "lucide-react"; // added for resume button icon
import { Button } from "@/components/ui/button"; // added button component
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
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-2 gap-10 my-[3rem]"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex flex-col p-5 rounded-xl bg-white/70 dark:bg-gray-800/60 backdrop-blur shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
            >
              {/* Profile Photo Card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 transition-opacity" />
              <div className="relative mx-auto">
                <div className="p-[4px] rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 shadow-inner">
                  <div className="rounded-full overflow-hidden bg-white dark:bg-gray-900">
                    <motion.img
                      variants={itemVariants}
                      src="https://placehold.co/448x448/png?text=Profile" // dummy image
                      alt={personalInfo?.name || "Profile"}
                      className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full select-none"
                      whileHover={{ scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 140,
                        damping: 18,
                      }}
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-60 blur-xl bg-gradient-to-tr from-blue-600/30 via-purple-500/20 to-pink-500/30 transition" />
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex flex-col p-5 pb-24 rounded-xl bg-white/70 dark:bg-gray-800/60 backdrop-blur shadow-sm hover:shadow-md transition-shadow group overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 transition-opacity" />
              <div className="relative z-10 space-y-4 flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg flex items-center gap-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Profile Summary
                  </span>
                </h3>
                <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  I’m a front‑end engineer focused on building elegant,
                  performant interfaces that feel effortless to use. I care
                  deeply about design systems, accessibility, and the small
                  interaction details that make products memorable.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  Right now I craft UI at{" "}
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    Globant
                  </span>
                  , shaping reusable components, refining performance budgets,
                  and championing inclusive standards. Previously I’ve shipped
                  features across startups and large platforms, adapting quickly
                  and shipping with quality.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  Beyond the editor you’ll find me exploring new tooling,
                  reading, riding, or with my wife and our two cats. Feel free
                  to reach out at{" "}
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="underline decoration-dotted hover:decoration-solid text-blue-600 dark:text-blue-400 transition-colors"
                  >
                    {personalInfo.contact.email}
                  </a>
                  .
                </p>
              </div>
              {/* Resume Download Button */}
              <div>
                <Button asChild className="cta-btn cta-primary min-w-[180px]">
                  <a href="/resume.pdf" download aria-label="Download Resume">
                    <Download className="h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500/25 to-purple-500/25 blur-xl opacity-0 group-hover:opacity-60 transition" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
