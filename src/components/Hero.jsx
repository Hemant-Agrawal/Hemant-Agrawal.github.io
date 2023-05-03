import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-96 md:h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Hemant</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {/* Harnessing the power of ReactJS <br className="hidden sm:block" />
            for lightning-fast and responsive
            <br className="hidden sm:block" />
            web development. */}
            Crafting dynamic web experiences with
            <br className="hidden sm:block" />
            Next.js and React.js for responsive and performant 
            <br className="hidden sm:block" />
            applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute bottom-0 flex items-center justify-center w-full md:bottom-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 mb-1 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
