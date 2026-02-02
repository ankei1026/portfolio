"use client";

import GridPattern from "~/components/ui/grid-pattern";
import { ArrowRight } from "lucide-react";
import { motion, useAnimation, useInView } from "motion/react";
import Header from "~/components/ui/header";
import { useEffect, useRef } from "react";

export default function Welcome() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [isInView, controls]);

  return (
    <>
      <Header />
      <main className="min-h-[80vh] w-full bg-white dark:bg-black flex flex-col items-center justify-start dark:text-white">
        <section className="mt-10 max-w-300">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="w-full flex items-center justify-center">
              <motion.h1
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                className="font-quicksand text-9xl tracking-wider scroll-section text-justify mb-4"
              >
                WEB DEVELOPER
              </motion.h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full gap-4 px-8 mx-auto">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="font-lora lg:col-span-2"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus beatae quia corrupti, at cumque cum temporibus
                enim consequuntur nihil.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="font-lora lg:col-span-2"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus beatae quia corrupti, at cumque cum temporibus
                enim consequuntur nihil.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-row items-center justify-end gap-2"
              >
                <a href="" className="font-lora hover:underline">
                  GET IN TOUCH
                </a>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="h-100 grid grid-cols-5 max-w-360 w-full mt-10">
          <div className="bg-black h-full col-span-4 rounded-r-full grid grid-cols-3 relative dark:bg-white">
            <GridPattern className="rounded-r-full " />

            <div className="relative w-full">
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 12 }}
                transition={{ type: "spring", delay: 0.5 }}
                className="absolute h-64 w-64 left-10 -top-6"
              >
                <img src="/assets/Immortal.png" alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: -12 }}
                transition={{ type: "spring", delay: 0.6 }}
                className="absolute h-26 w-26 left-10 top-48"
              >
                <img src="/assets/github.svg" alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 24 }}
                transition={{ type: "spring", delay: 0.7 }}
                className="absolute h-26 w-26 right-5 top-36"
              >
                <img src="/assets/laravel-.svg" alt="" />
              </motion.div>
            </div>

            <div>
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                src="/assets/Errol.png"
                alt="Errol"
                className="w-84 h-84 absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
              />
            </div>
            <div className="relative w-full">
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: -10 }}
                transition={{ type: "spring", delay: 0.9 }}
                className="absolute h-28 w-28 left-10 -top-2.5"
              >
                <img src="/assets/vscode.png" alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: -12 }}
                transition={{ type: "spring", delay: 1.0 }}
                className="absolute h-36 w-36 left-2 top-36"
              >
                <img src="/assets/react logo.png" alt="" />
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: "spring", delay: 1.1 }}
                className="absolute h-36 w-36 -right-5 top-24"
              >
                <img src="/assets/tailwind.png" alt="" />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
