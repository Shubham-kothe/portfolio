import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface EducationItem {
  id: string;
  institute: string;
  course: string;
  logo: "bits" | "ghr";
  accent: string;
  period?: string;
  location?: string;
}

const education: EducationItem[] = [
  {
    id: "bits",
    institute: "BITS Pilani",
    course: "Artificial Intelligence & Machine Learning",
    logo: "bits",
    accent: "from-indigo-500 via-purple-500 to-pink-500",
    period: "2023 - Present",
    location: "Pilani, India",
  },
  {
    id: "ghr",
    institute: "G.H. Raisoni, Nagpur",
    course: "Computer Science & Engineering",
    logo: "ghr",
    accent: "from-blue-600 via-violet-500 to-fuchsia-500",
    period: "2019 - 2023",
    location: "Nagpur, India",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.92 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export const Education = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.25,
  });

  return (
    <section
      id="education"
      ref={elementRef}
      className="section-padding relative"
    >
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="space-y-14"
        >
          <motion.div
            variants={cardVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="section-title gradient-text mb-4">Education</h2>
            <div className="section-accent" />
            <p className="mt-6 text-lg prose-muted">
              Academic journey that shaped my engineering and AI foundations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {education.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="relative group"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/25 via-purple-500/25 to-pink-500/25 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative h-full rounded-2xl p-1 bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-800/70 dark:to-slate-800/30 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_30px_-8px_rgba(99,102,241,0.35)]">
                  <div className="rounded-xl h-full bg-white/70 dark:bg-slate-900/70 p-6 flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <div
                        className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white shadow-lg overflow-hidden`}
                      >
                        {item.logo === "bits" ? (
                          <BrainCircuit className="w-9 h-9" />
                        ) : (
                          <GraduationCap className="w-9 h-9" />
                        )}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.6),rgba(255,255,255,0)_70%)] mix-blend-overlay" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                          {item.institute}
                        </h3>
                        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300 mt-1">
                          {item.course}
                        </p>
                      </div>
                    </div>
                    <div className="mt-auto flex items-center justify-between text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-medium">
                      <span>{item.period}</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
