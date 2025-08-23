import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";

export interface ExperienceCardProps {
  companyName: string;
  companyLogo?: string; // URL or path to the logo
  role: string;
  className?: string;
  duration?: string; // Optional duration of the experience
  description?: string; // Optional description of the experience
  // New controlled expansion props
  isActive?: boolean;
  onClick?: () => void;
}

export const ExperienceCard = ({
  companyName,
  companyLogo,
  role,
  className,
  duration,
  description,
  isActive = false,
  onClick,
}: ExperienceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        // Only call onClick if isActive and click is outside
        onClick?.();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, onClick]);

  return (
    <motion.div layout onClick={onClick} className="w-full" ref={cardRef}>
      <Card
        className={cn(
          "min-w-[70px] min-h-[50px] p-[1rem] cursor-pointer",
          "relative overflow-hidden rounded-[0.5rem] focus-visible:outline-none",
          "bg-white/60 dark:bg-slate-800/70 backdrop-blur-xl",
          "border border-[rgba(99,102,241,0.25)] dark:border-[rgba(99,102,241,0.4)] hover:border-[rgba(99,102,241,0.35)] dark:hover:border-[rgba(99,102,241,0.5)]",
          "shadow-[0_6px_20px_-8px_rgba(15,23,42,0.18)] dark:shadow-[0_8px_24px_-10px_rgba(0,0,0,0.65)] transition-all duration-500",
          "hover:shadow-xl",
          isActive
            ? "border-[rgba(99,102,241,0.45)] dark:border-[rgba(99,102,241,0.55)] ring-.5 ring-indigo-500/25 scale-[1.01]"
            : "ring-0",
          className
        )}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] opacity-35 bg-[linear-gradient(140deg,rgba(255,255,255,0.45),rgba(255,255,255,0))] dark:bg-[linear-gradient(140deg,rgba(30,41,59,0.5),rgba(30,41,59,0.0))]" />

        <CardContent className="relative z-10 p-6 md:p-7">
          <div className="flex items-center justify-center">
            <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-pink-500 ring-[1.5px] ring-transparent outline-1 outline-transparent shadow-lg shadow-indigo-600/20 overflow-hidden flex items-center justify-center">
              {companyLogo ? (
                <img
                  src={companyLogo}
                  alt={`${companyName} logo`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Briefcase className="h-7 w-7 text-white" />
              )}
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.6),transparent_70%)]" />
            </div>
          </div>

          <div className="mt-4 text-center grid gap-2">
            <CardTitle className="text-3xl md:text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-[linear-gradient(120deg,#0f172a,#6366f1_45%,#ec4899)] dark:bg-[linear-gradient(120deg,#f8fafc,#a5b4fc_50%,#f9a8d4)]">
              {companyName}
            </CardTitle>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm">
              <span className="text-slate-600 dark:text-slate-300">{role}</span>
              {duration && (
                <>
                  <span className="hidden sm:inline text-slate-400 dark:text-slate-500">
                    •
                  </span>
                  <span className="rounded-full bg-slate-100/70 dark:bg-slate-700/30 text-slate-600 dark:text-slate-300 text-[11px] px-2 py-0.5 font-medium">
                    {duration}
                  </span>
                </>
              )}
            </div>
          </div>

          <AnimatePresence initial={false}>
            {isActive && description && (
              <motion.div
                key="desc"
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 text-center"
              >
                {description}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;
