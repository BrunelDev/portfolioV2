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
    <div className="flex flex-col space-y-4 p-4 w-[280px] h-[220px] justify-center items-center bg-[#3e3d3d98] rounded-md shadow-xl ">
      <Icon color="#65a30d"/>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-center text-sm">{description}</p>
    </div>
  );
}
