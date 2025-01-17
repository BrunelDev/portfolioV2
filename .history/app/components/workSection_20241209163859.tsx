import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function WorkSection({
  work,
  reversed,
}: {
  work: { image: string; category: string; title: string; description: string };
  reversed: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${
        reversed ? "sm:flex-row-reverse" : "sm:flex-row"
      } justify-between w-full gap-8 sm:gap-12`}
    >
      <div className="w-full sm:w-1/2">
        <Image 
          src={work.image} 
          width={400} 
          height={600} 
          alt="blank PC"
          className="w-full h-auto object-cover rounded-lg" 
        />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col space-y-4 sm:space-y-5 self-center">
        <h6 className="text-lime-600 text-sm sm:text-base">{work.category}</h6>
        <h1 className="text-2xl sm:text-3xl font-bold">{work.title}</h1>
        <h6 className="text-sm sm:text-base">{work.description}</h6>
        <div className="h-12 w-12 sm:h-14 sm:w-14 flex justify-center items-center rounded-full border hover:animate-pulse duration-75 cursor-pointer">
          <ArrowUpRight size={24} className="sm:w-[30px] sm:h-[30px]"/>
        </div>
      </div>
    </div>
  );
}
