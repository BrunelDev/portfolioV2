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
      className={`flex ${
        reversed ? "flex-row-reverse" : "flex-row"
      } justify-between w-full`}
    >
        <Image src={work.image} width={400} height={600} alt="blank PC" />
      <div className="w-1/2 flex flex-col space-y-5 self-center">
        <h6 className="text-lime-600">{work.category}</h6>
        <h1 className="text-3xl">{work.category}</h1>
              <h6>{work.description}</h6>
              <div className="h-14 w-14 flex justify-center items-center rounded-full border hover:animate-pulse duration-75">
        <ArrowUpRight size={30}/>
                  
              </div>
      </div>
    </div>
  );
}
