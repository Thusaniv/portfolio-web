import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    <div
      className={cn(
        "mt-4 group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 p-2 rounded-lg border border-blue-400/10 bg-[#3b4b69]/40 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-shadow",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        
        <div
          className="mt-1 mb-1 font-sans font-bold text-neutral-200">
          {title}
        </div>
        <div
          className="font-sans text-xs mb-1 font-normal text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
