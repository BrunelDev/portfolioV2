import Image from "next/image";

export function SkillCard({
  skill,
}: {
  skill: { image: string; title: string };
}) {
  return (
    <div className="#1E1E1E flex flex-col justify-center items-center w-[120px] h-[120px] space-y-5 bg-[#1E1E1E]">
      <Image src={skill.image} alt={skill.title} width={40} height={50} />
      <h3>{skill.title}</h3>
    </div>
  );
}
