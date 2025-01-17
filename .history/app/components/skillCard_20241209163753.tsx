import Image from "next/image";

export function SkillCard({ skill }: { skill: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full sm:w-[150px] h-[150px] bg-[#3e3d3d98] rounded-md shadow-xl hover:scale-105 transition-transform duration-300">
      <div className="text-2xl sm:text-3xl font-bold text-center">{skill}</div>
    </div>
  );
}
