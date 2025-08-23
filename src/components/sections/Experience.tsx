import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ExperienceCard } from "@/components/common/ExperienceCard";
import ReactLogo from "@/assets/react.svg";
import { useState, useRef } from "react";

export const Experience = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  // Local dummy data (4 items) per requirements
  const dummy = [
    {
      id: 1,
      company: "React Corp",
      logo: ReactLogo,
      role: "Frontend Engineer",
      duration: "Jan 2023 – Present",
      description:
        "Built scalable UI with React, optimized performance, and collaborated cross‑functionally to ship features.",
    },
    {
      id: 2,
      company: "Hooks Labs",
      logo: ReactLogo,
      role: "UI Developer",
      duration: "Aug 2021 – Dec 2022",
      description:
        "Implemented design systems, component libraries, and accessibility best practices across apps.",
    },
    {
      id: 3,
      company: "Fiber UI",
      logo: ReactLogo,
      role: "Software Engineer",
      duration: "Jan 2020 – Jul 2021",
      description:
        "Delivered high‑quality interfaces with smooth animations and responsive layouts using Tailwind & Framer Motion.",
    },
    // {
    //   id: 4,
    //   company: "XYZ UI",
    //   logo: ReactLogo,
    //   role: "Software Engineer",
    //   duration: "Jan 2020 – Jul 2021",
    //   description:
    //     "Delivered high‑quality interfaces with smooth animations and responsive layouts using Tailwind & Framer Motion.",
    // },
  ];

  const [activeId, setActiveId] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  // Horizontal carousel refs/handlers
  const scrollerRef = useRef<HTMLDivElement>(null);

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
          className="space-y-8"
        >
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="section-title gradient-text mb-4">Experience</h2>
            <div className="section-accent" />
          </motion.div>

          {/* Carousel with 16px gap, snap behavior */}
          <motion.div
            variants={containerVariants}
            className="relative w-full mt-[2rem] p-[1rem]"
          >
            {/* Controls */}

            <div
              ref={scrollerRef}
              className="overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <motion.div
                variants={containerVariants}
                className="flex gap-4 px-1 justify-center justify-items-center"
              >
                {dummy.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={{
                      hidden: {
                        y: 50,
                        opacity: 0,
                        scale: 0.9,
                        rotateY: -15,
                      },
                      visible: {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotateY: 0,
                        transition: {
                          duration: 0.6,
                          delay: index * 0.15,
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                      },
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      transition: { duration: 0.3 },
                    }}
                    data-exp-card
                    className="snap-start p-[1rem] my-[1rem] shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]"
                  >
                    <ExperienceCard
                      companyName={exp.company}
                      companyLogo={exp.logo}
                      role={exp.role}
                      duration={exp.duration}
                      description={exp.description}
                      isActive={activeId === exp.id}
                      onClick={() =>
                        setActiveId((prev) => (prev === exp.id ? null : exp.id))
                      }
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
