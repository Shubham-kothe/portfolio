import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { skills } from "@/data/portfolio";
import type { Skill } from "@/types";

const categoryIcons: Record<Skill["category"], string> = {
  Frontend: "🎨",
  Backend: "⚙️",
  Database: "🗄️",
  Tools: "🛠️",
  Other: "📦",
};

const levelColors: Record<Skill["level"], string> = {
  Beginner:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Intermediate: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Advanced:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  Expert: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
};

export const Skills = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section
      id="skills"
      ref={elementRef}
      className="section-padding bg-transparent relative"
    >
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
            <h2 className="section-title gradient-text mb-4">
              Skills & Technologies
            </h2>
            <div className="section-accent" />
            <p className="mt-6 text-lg prose-muted">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsByCategory).map(
              ([category, categorySkills]) => (
                <motion.div key={category} variants={itemVariants}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xl">
                            {categoryIcons[category as Skill["category"]]}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {category}
                        </h3>
                      </div>

                      <div className="space-y-4">
                        {categorySkills.map((skill) => (
                          <motion.div
                            key={skill.name}
                            whileHover={{ x: 5 }}
                            className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                          >
                            <span className="font-medium text-gray-900 dark:text-white">
                              {skill.name}
                            </span>
                            <Badge className={levelColors[skill.level]}>
                              {skill.level}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            )}
          </div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Skill Level Distribution
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {Object.entries(levelColors).map(([level, colorClass]) => {
                    const count = skills.filter(
                      (skill) => skill.level === level
                    ).length;
                    return (
                      <div key={level} className="text-center">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          {count}
                        </div>
                        <Badge className={colorClass}>{level}</Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technologies Grid */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  All Technologies
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="outline"
                        className="px-4 py-2 text-sm bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 dark:border-gray-600 cursor-pointer transition-colors"
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
