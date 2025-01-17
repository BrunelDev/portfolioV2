import { LucideIcon } from "lucide-react";

export function ServiceComponent({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col space-y-4 p-4 w-full sm:w-[280px] min-h-[220px] justify-center items-center bg-[#3e3d3d98] rounded-md shadow-xl hover:scale-105 transition-transform duration-300">
      <Icon color="#65a30d" className="w-8 h-8 sm:w-10 sm:h-10"/>
      <h2 className="text-xl sm:text-2xl font-bold text-center">{title}</h2>
      <p className="text-center text-xs sm:text-sm">{description}</p>
    </div>
  );
}
