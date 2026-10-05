import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode, HTMLAttributes } from "react";

interface GridPatternCardProps {
  children: ReactNode;
  className?: string;
  patternClassName?: string;
  gradientClassName?: string;
  solidBrackets?: "none" | "top" | "bottom";
}

function TopBrackets() {
  return (
    <>
      <div className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-[3px] border-l-[3px] border-foreground pointer-events-none z-10" />
      <div className="absolute top-[-2px] right-[-2px] w-4 h-4 border-t-[3px] border-r-[3px] border-foreground pointer-events-none z-10" />
    </>
  );
}

function BottomBrackets() {
  return (
    <>
      {/* T-junction left (sits on the top border of the bottom card) */}
      <div className="absolute top-[-2px] left-[-2px] -translate-y-1/2 w-4 h-5 border-transparent pointer-events-none z-10">
         <div className="absolute top-0 left-0 w-[3px] h-full bg-foreground" />
         <div className="absolute top-1/2 left-0 w-4 h-[3px] -translate-y-1/2 bg-foreground" />
      </div>

      {/* T-junction right */}
      <div className="absolute top-[-2px] right-[-2px] -translate-y-1/2 w-4 h-5 border-transparent pointer-events-none z-10">
         <div className="absolute top-0 right-0 w-[3px] h-full bg-foreground" />
         <div className="absolute top-1/2 right-0 w-4 h-[3px] -translate-y-1/2 bg-foreground" />
      </div>

      {/* Bottom brackets */}
      <div className="absolute bottom-[-2px] left-[-2px] w-4 h-4 border-b-[3px] border-l-[3px] border-foreground pointer-events-none z-10" />
      <div className="absolute bottom-[-2px] right-[-2px] w-4 h-4 border-b-[3px] border-r-[3px] border-foreground pointer-events-none z-10" />
    </>
  );
}

export function GridPatternCard({
  children,
  className,
  patternClassName,
  gradientClassName,
  solidBrackets = "none",
}: GridPatternCardProps) {
  return (
    <motion.div
      className={cn(
        "w-full relative",
        "bg-background",
        solidBrackets === "none" && "border border-border rounded-md overflow-hidden",
        solidBrackets !== "none" && "border-dashed border-border border-2",
        solidBrackets === "top" && "border-b-0",
        "p-3",
        className,
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {solidBrackets === "top" && <TopBrackets />}
      {solidBrackets === "bottom" && <BottomBrackets />}
      <div
        className={cn(
          "size-full bg-repeat bg-[length:30px_30px]",
          "bg-grid-pattern-light dark:bg-grid-pattern",
          patternClassName,
        )}
      >
        <div
          className={cn(
            "size-full bg-gradient-to-tr",
            "from-background/90 via-background/40 to-background/10",
            gradientClassName,
          )}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export function GridPatternCardBody({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-left p-4 md:p-6", className)} {...props} />;
}
