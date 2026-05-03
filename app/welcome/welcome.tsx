"use client";

import Footer from "~/components/footer";
import Header from "~/components/header";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion, progress } from "framer-motion";

export default function Welcome() {
  const Projects = [
    {
      title: "Wander Surigao del Sur (My Thesis, Web App)",
      description: "",
      stacks: [
        "Laravel",
        "Inertia",
        "React",
        "Python",
        "OpenStreetMap",
        "LeafletMap",
      ],
      type: "Thesis",
      image: "/assets/WANDERSDS.png",
      progress: ["Passed", "Done"],
    },
    {
      title: "SchedAI (Web App)",
      description: "",
      stacks: ["Laravel", "Inertia", "React", "Python"],
      type: "Capstone",
      image: "/assets/SCHEDAI.png",
      progress: ["Passed", "Done"],
    },
    {
      title: "SWMIS (Web App)",
      description: "",
      stacks: ["Laravel", "Inertia", "React", "Python", "LeafletMap"],
      type: "Capstone",
      image: "/assets/SWMIS.png",
      progress: ["Passed", "Done"],
    },
    {
      title: "Acadench (Web App)",
      description: "",
      stacks: ["Laravel", "Inertia", "React", "Python"],
      type: "Capstone",
      image: "",
      progress: ["Passed", "Done"],
    },
    {
      title: "Consumo (Web App + Mobile App)",
      description: "",
      stacks: ["Laravel", "Inertia", "React", "Flutter", "Python"],
      type: "Thesis",
      image: "/assets/Consumo.png",
      progress: ["Passed", "Done"],
    },
    {
      title: "Meritos (Web App)",
      description: "",
      stacks: ["Laravel", "NextJS", "Python"],
      type: "Saas",
      image: "",
      progress: ["Ongoiing"],
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-black border-x border-white max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* Left Side - Sticky */}
          <div className="lg:sticky lg:top-[65px] h-[calc(100vh-2rem)] lg:border-r lg:border-white flex items-center justify-center max-sm:border-b max-sm:border-white  md:border-b md:border-white">
            <div className="text-left">
              <h1 className="text-6xl md:text-8xl lg:text-8xl text-white mb-4">
                Errol <br />
                Sabanal
              </h1>
              <p className="text-gray-400">Full Stack Developer</p>
              <div className="mt-8 flex gap-4 justify-start">
                <a
                  href="https://github.com/ankei1026"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <p className="text-white">|</p>
                <a
                  href="https://linkedin.com/in/errol-sabanal-1a8bba372"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Scrollable content */}
          <div className="py-4">
            <div className="space-y-16">
              <section className="border-b border-white">
                <div className="flex flex-col justify-center items-center h-[calc(100vh-5rem)] px-4 py-20">
                  <h1 className="mb-4 text-5xl md:text-7xl lg:text-7xl">
                    Get in touch
                  </h1>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-400 leading-relaxed">
                      sabanal.errol@gmail.com
                    </p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=sabanal.errol@gmail.com"
                      target="_blank"
                    >
                      <ArrowUpRight className="w-6 h-6 text-gray-300 hover:text-white hover:cursor-pointer" />
                    </a>
                  </div>
                  <div className="flex flex-col justify-center items-center mt-20">
                    <p className="text-gray-400">Scroll for more</p>
                    <motion.div
                      animate={{ y: [0, 20, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "easeInOut",
                      }}
                      onAnimationStart={() => console.log("Animation started")}
                      onAnimationComplete={() =>
                        console.log("Animation completed")
                      }
                    >
                      <ArrowDown className="text-gray-200 w-8 h-8" />
                    </motion.div>
                  </div>
                </div>
              </section>

              <section id="about-me" className="border-white scroll-mt-[130px]">
                <div className="flex flex-col items-start justify-center border-b px-10 pb-8">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    About Me
                  </h2>

                  <div className="bg-gray-300 rounded-lg mb-6 overflow-hidden ">
                    <img
                      src="/assets/Errol.png"
                      alt="Profile"
                      className="h-64 w-64 grayscale hover:grayscale-0 transition-all duration-300 object-cover rounded-lg hover:scale-105"
                    />
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    I specialize in helping businesses and students build web
                    applications for their needs - whether it's a thesis
                    project, capstone requirement, or business tool. I love
                    creating elegant solutions that make a real difference for
                    the people I work with.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Education
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-white font-medium">
                          Bachelor of Science in Computer Science
                        </p>
                        <p className="text-gray-400">
                          North Eastern Mindanao State University | 2021 - 2025
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                          Graduated with Academic Awardee
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="projects"
                className="border-white border-b scroll-mt-[130px]"
              >
                <div className="px-10 pb-4">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Projects
                  </h2>

                  <div className="space-y-12">
                    {Projects.map((project, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-800 pb-8 last:border-0"
                      >
                        {/* Project Image with Grayscale on Hover */}
                        <div className="mb-4 overflow-hidden rounded-lg">
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                              <span className="text-gray-500">
                                Project Preview
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Project Info */}
                        <div>
                          <div className="flex flex-wrap justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white">
                              {project.title}
                            </h3>
                            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded">
                              {project.type}
                            </span>
                          </div>

                          <p className="text-gray-400 text-sm mb-3">
                            {project.description ||
                              "A web application built with modern technologies."}
                          </p>

                          {/* Tech Stacks */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-[10px] text-gray-400 items-center">
                              Stack Used:{" "}
                            </span>

                            {project.stacks.map(
                              (stack, idx) =>
                                stack && (
                                  <span
                                    key={idx}
                                    className="text-xs px-2 py-1 bg-gray-900 text-gray-300 rounded"
                                  >
                                    {stack}
                                  </span>
                                ),
                            )}
                          </div>

                          {/* Progress/Status */}
                          <div className="flex gap-2">
                            <span className="text-[10px] text-gray-400 items-center">
                              Progress:{" "}
                            </span>
                            {project.progress.map((status, idx) => (
                              <span
                                key={idx}
                                className={`text-xs px-2 py-1 rounded ${
                                  status === "Ongoing"
                                    ? "bg-yellow-900/50 text-yellow-400"
                                    : "bg-green-900/50 text-green-400"
                                }`}
                              >
                                {status}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="tech-stacks" className="scroll-mt-[130px]">
                <div className="px-10 flex flex-col items-start pb-8">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Tech Stacks
                  </h2>
                  <div className="flex flex-wrap gap-3 w-full">
                    {[
                      "HTML5",
                      "CSS3",
                      "JavaScript",
                      "PHP",
                      "Python",
                      "Laravel",
                      "Next.js",
                      "React",
                      "TypeScript",
                      "Flutter",
                      "Tailwind",
                      "LeafletMap",
                      "Git",
                      "GitHub",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-900 rounded-full border border-gray-800 text-gray-300 text-sm hover:border-gray-600 hover:bg-gray-800 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
