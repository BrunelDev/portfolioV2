"use client"
import { ChevronsUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const element = document.getElementById("top");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex px-20 py-6 justify-between items-center bg-[#252525af] relative">
      <h6>Copyright @2024, Wilson Kinyua. All Rights Reserved</h6>
      <Link
        href={"#top"}
        onClick={(e) => {
          scrollToTop(e);
        }}
      >
        <div className="bg-lime-600 rounded-lg w-[60px] h-[60px] flex justify-center items-center absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <ChevronsUp size={40} />
        </div>
      </Link>

      <ul className="flex space-x-3">
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
    </div>
  );
}
