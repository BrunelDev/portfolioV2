import {
  BriefcaseBusiness,
  Contact,
  FileText,
  House,
  Layers,
  PencilRuler,
  UserRoundSearch,
} from "lucide-react";
import { Button } from "@/components/ui/button"
export function Navbar() {
  return (
    <div className="w-[90%] m-auto flex justify-between my-6" id="top">
      <h6>
        <span className="text-lime-600">A</span>HOKPOSSI{" "}
        <span className="text-lime-600">B</span>runel
      </h6>
      <ul className="flex space-x-3 p-4 rounded-xl bg-gray-900">
        <li className="hover:text-lime-600 duration-300">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-lime-600 duration-300">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-lime-600 duration-300">
          <a href="#contact">Contact</a>
        </li>
        <li className="hover:text-lime-600 duration-300">
          <a href="#services">Services</a>
        </li>
        <li className="hover:text-lime-600 duration-300">
          <a href="#blog">Resume</a>
        </li>
        <li className="hover:text-lime-600 duration-300">
          <a href="#login">Skills</a>
        </li>
        <li className="hover:text-lime-600 duration-300">
          <a href="#logout">Projects</a>
        </li>
      </ul>
      <Button variant="gooeyLeft" className=" bg-lime-600 rounded-md px-4 py-1 hover:bg-lime-900 hover:scale-105 duration-300 h-fit">
        Hire Me
      </Button>
    </div>
  );
}

export function FloatingNavBar() {
  return (
    <div className="w-[250px] md:w-1/3 fixed left-1/2 -translate-x-1/2 bottom-10 bg-[#4d4d4ea1] rounded-lg p-4 flex justify-around">
      <House />
      <UserRoundSearch />
      <Contact />
      <BriefcaseBusiness />
      <FileText />
      <PencilRuler />
      <Layers />
    </div>
  );
}
