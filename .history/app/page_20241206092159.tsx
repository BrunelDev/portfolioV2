"use client";
import { Footer } from "@/app/components/footer";
import { InputComponent } from "@/app/components/input";
import { Navbar } from "@/app/components/navbar";
import { ServiceComponent } from "@/app/components/serviceComponent";
import { SkillCard } from "@/app/components/skillCard";
import { WorkSection } from "@/app/components/workSection";
import { CircleCheckBig, Globe, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button"

import Image from "next/image";
export default function page() {
  const [, setUserFullName] = useState<string>("");
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern and mobile-ready website that will help you reach all of your marketing goals.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern and mobile-ready website that will help you reach all of your marketing goals.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern and mobile-ready website that will help you reach all of your marketing goals.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern and mobile-ready website that will help you reach all of your marketing goals.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern and mobile-ready website that will help you reach all of your marketing goals.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern and mobile-ready website that will help you reach all of your marketing goals.",
    },
  ];
  const skills: { image: string; title: string; alt: string }[] = [
    { image: "/python.svg", title: "Python", alt: "Python image" },
    { image: "/javascript.svg", title: "Javascript", alt: "Javascript image" },
    { image: "/typescript.svg", title: "Typescript", alt: "Typescript image" },
    { image: "/react.svg", title: "React Js", alt: "React Js image" },
    { image: "/next.svg", title: "Next Js", alt: "Next Js image" },
    {
      image: "/reactNative.svg",
      title: "React Native",
      alt: "React Native image",
    },
    {
      image: "/tailwind.svg",
      title: "Tailwind CSS",
      alt: "Tailwind CSS image",
    },
    { image: "/figma.svg", title: "Figma", alt: "Figma image" },
    { image: "/django.svg", title: "Django", alt: "Django image" },
    { image: "/fastApi.svg", title: "Fast API", alt: "Fast API image" },
    { image: "/wordpress.svg", title: "WordPress", alt: "WordPress image" },
    { image: "/fastApi.svg", title: "Fast API", alt: "Fast API image" },
  ];
  const works: {
    image: string;
    category: string;
    title: string;
    description: string;
  }[] = [
    {
      image: "/blankPc.png",
      category: "Website",
      title: "Mount Kenya Wildlife Conservancy",
      description:
        "A non-profit trust dedicated to preserving the environment and the wildlife within.",
    },
    {
      image: "/blankPc.png",
      category: "Website",
      title: "Mount Kenya Wildlife Conservancy",
      description:
        "A non-profit trust dedicated to preserving the environment and the wildlife within.",
    },
    {
      image: "/blankPc.png",
      category: "Website",
      title: "Mount Kenya Wildlife Conservancy",
      description:
        "A non-profit trust dedicated to preserving the environment and the wildlife within.",
    },
    {
      image: "/blankPc.png",
      category: "Website",
      title: "Mount Kenya Wildlife Conservancy",
      description:
        "A non-profit trust dedicated to preserving the environment and the wildlife within.",
    },
    {
      image: "/blankPc.png",
      category: "Website",
      title: "Mount Kenya Wildlife Conservancy",
      description:
        "A non-profit trust dedicated to preserving the environment and the wildlife within.",
    },
    {
      image: "/blankPc.png",
      category: "Website",
      title: "Mount Kenya Wildlife Conservancy",
      description:
        "A non-profit trust dedicated to preserving the environment and the wildlife within.",
    },
  ];
  return (
    <div>
      <div className="h-[100vh]">
        <div className="mb-24">
          <Navbar />
        </div>
        <div className="px-14">
          <div className="flex justify-between">
            <div className="w-1/2 space-y-8 sm:space-y-12">
              <h6 className="text-sm text-gray-300">HELLO, MY NAME IS</h6>
              <h2 className="text-3xl">
                <span className="text-lime-600">Brunel</span> AHOKPOSSI
              </h2>
              <h6 className="text-lime-300 text-xl font-semibold selection:bg-lime-600">
                Software Engineer
              </h6>
              <p>
                From Nairobi, Kenya. I have rich experience in development cycle
                for dynamic web projects, app development, and I am also
                proficient in UX/UI design.
              </p>
              <div className="flex space-x-4">
                <button className="py-2 px-3 bg-lime-600 rounded-md">
                  Download Resume
                </button>
                <button className="py-2 px-3 border border-lime-600 rounded-md">
                  Contact Me
                </button>
              </div>

              <div>
                <div className="flex space-x-6">
                  {[
                    { img: "/github.svg", alt: "github icon" },
                    { img: "/mail.svg", alt: "mail icon" },
                    { img: "/linkedin.svg", alt: "linkedin icon" },
                    { img: "/twitter.svg", alt: "twitter icon" },
                  ].map((social, i) => {
                    return (
                      <Image
                        src={social.img}
                        alt={social.alt}
                        width={18}
                        height={18}
                        key={i}
                        className="w-fit p-[6px] rounded-md hover:bg-[#bdbaba24] duration-300"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-[40%]">
              <div className="border-4 border-lime-600 w-fit rounded-full relative ">
                <Image
                  src={"/programmer.png"}
                  height={400}
                  width={550}
                  alt="une photo de moi"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-14 mt-20">
        <div className="w-[30%] rounded-full">
        <Image src={"/moi.png"} width={400} height={400} alt="server image" className="rounded-full border-4 border-lime-600"/></div>
        <div className="w-[45%] space-y-5">
          <h6>About me</h6>
          <h2>Driven, innovative Software Engineer</h2>
          <p>
            More than 5 years Experience in the development of software and
            solutions. A conscientious person who pays attention to details.
            Very passionate about software development, always willing and ready
            to learn new things/concepts. Proven leader with the ability to
            streamline development processes to drive the achievement of
            organisational objectives.
          </p>
          {[
            "Develop highly interactive Front end / User Interfaces for the web",
            "Progressive Web Applications ( PWA ) in normal and SPA Stacks",
            "Integration of third party services such as AWS / Digital Ocean",
            "Integration of payment services such as M-Pesa and paypal etc",
          ].map((sentence, i) => {
            return (
              <div key={i} className="flex space-x-4">
                <CircleCheckBig color="#65a30d" />
                <h6>{sentence}</h6>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-20 flex flex-col justify-center items-center space-y-5">
        <h6 className="">I like to make things easy and fun</h6>
        <h3 className="">My Special Services For your Business Development</h3>
        <div className="grid grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceComponent
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <div className="mt-20 flex justify-center items-center">My resume</div>
      <div className="mt-20 px-14 flex flex-col justify-center items-center space-y-5">
        <h6>My Expertise</h6>
        <h3>Professional Skills</h3>
        <div className="grid grid-cols-6 gap-2">
          {skills.map((skill, i) => (
            <SkillCard skill={skill} key={i} />
          ))}
        </div>
        <div className="mt-20 flex flex-col space-y-5 justify-center items-center">
          <h6>Last works</h6>
          <h3>Explore My Popular Projects</h3>
          <div className="w-full space-y-12">
            {works.map((work, i) => (
              <WorkSection work={work} key={i} reversed={i % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20 px-14 flex justify-between">
        <div className="w-1/3 space-y-8 ">
          <h6>Get In Touch</h6>
          <h3>Let&apos;s Talk For your Next Projects</h3>
          <h6>
            Discuss a project or just want to say hi? Connect with me via email
            or through a phone call.
          </h6>
          <div className="space-y-5">
            {[
              "5+ Years of Experience",
              "Professional Web Designer",
              "Mobile Apps Design",
              "Technical Mentor",
              "Fullstack Developer",
            ].map((sentence, i) => {
              return (
                <div key={i} className="flex space-x-4">
                  <CircleCheckBig color="#65a30d" size={20} />
                  <h6>{sentence}</h6>
                </div>
              );
            })}
          </div>
          <div className="flex space-x-6">
            {[
              { img: "/github.svg", alt: "github icon" },
              { img: "/mail.svg", alt: "mail icon" },
              { img: "/linkedin.svg", alt: "linkedin icon" },
              { img: "/twitter.svg", alt: "twitter icon" },
            ].map((social, i) => {
              return (
                <Image
                  src={social.img}
                  alt={social.alt}
                  width={18}
                  height={18}
                  key={i}
                  className="w-fit p-[6px] rounded-md hover:bg-[#bdbaba24] duration-300"
                />
              );
            })}
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-between">
          <div className="flex space-x-5">
            <InputComponent
              placeholder="John Doe"
              label="Full Name"
              handleChange={setUserFullName}
              height="h-[80px]"
            />
            <InputComponent
              placeholder="John Doe"
              label="Full Name"
              handleChange={setUserFullName}
              height="h-[80px]"
            />
          </div>
          <div className="flex space-x-5">
            <InputComponent
              placeholder="John Doe"
              label="Full Name"
              handleChange={setUserFullName}
              height="h-[80px]"
            />
            <InputComponent
              placeholder="John Doe"
              label="Full Name"
              handleChange={setUserFullName}
              height="h-[80px]"
            />
          </div>
          <div className="w-full">
            <InputComponent
              placeholder="John Doe"
              label="Full Name"
              handleChange={setUserFullName}
              height="h-[150px]"
            />
          </div>
          <Button variant={"gooeyLeft"} className="bg-lime-600 w-fit p-6 gap-2">Send Message <Send size={18}/></Button>
        </div>
      </div>
      <footer className="mt-20">
        <Footer />
      </footer>
    </div>
  );
}
