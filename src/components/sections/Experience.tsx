import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { experiences } from "@/data/portfolio";

export const Experience = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section
      id="experience"
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
            <h2 className="section-title gradient-text mb-4">Experience</h2>
            <div className="section-accent" />
            <p className="mt-6 text-lg prose-muted">
              My professional journey in frontend development
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full ring-4 ring-white dark:ring-gray-900 z-10" />

                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <Card className="ml-12 md:ml-0 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <Briefcase className="h-5 w-5 text-blue-600" />
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                              {exp.endDate === "Present"
                                ? "Current Position"
                                : "Previous Role"}
                            </span>
                          </div>
                          <Badge
                            variant={
                              exp.endDate === "Present"
                                ? "default"
                                : "secondary"
                            }
                            className={
                              exp.endDate === "Present"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : ""
                            }
                          >
                            {exp.endDate === "Present" ? "Current" : "Past"}
                          </Badge>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-600 dark:text-gray-300">
                            <Briefcase className="h-4 w-4 mr-2" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-300">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-300">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>
                              {exp.startDate} - {exp.endDate}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6">
                          {exp.description.map((desc, descIndex) => (
                            <div
                              key={descIndex}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {desc}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
