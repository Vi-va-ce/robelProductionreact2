import { useState } from "react";
import { motion } from "framer-motion";
import { group, vector, vector1, vector2, wagwan } from "../assets";

const Hero = () => {
  const [isWagwanHovered, setIsWagwanHovered] = useState(false);

  const handleWagwanHover = () => {
    setIsWagwanHovered(!isWagwanHovered);
  };

  return (
    <section id="home" className="flex md:flex-row flex-col">
      <div className="flex-col xl:px-0 sm:px-16 px-6">
        <motion.div
          animate={{
            y: isWagwanHovered ? 0 : -20,
          }}
          transition={{ duration: 0.5, yoyo: Infinity, ease: "easeInOut" }}
          className="float-image"
        >
          <img src={vector} alt="Rob Production" className="sm:flex hidden mt-2 mb-20 ml-12" />
        </motion.div>
        <motion.div
          animate={{
            y: isWagwanHovered ? 0 : -20,
          }}
          transition={{ duration: 0.5, yoyo: Infinity, ease: "easeInOut" }}
          className="float-image"
        >
          <img src={vector1} alt="Rob Production" className="sm:flex hidden mt-2 mb-20 ml-12" />
        </motion.div>
        <motion.div
          animate={{
            y: isWagwanHovered ? 0 : -20,
          }}
          transition={{ duration: 0.5, yoyo: Infinity, ease: "easeInOut" }}
          className="float-image"
        >
          <img src={group} alt="Rob Production" className="sm:flex hidden mt-2 mb-20 ml-12" />
        </motion.div>
        <motion.div
          animate={{
            y: isWagwanHovered ? 0 : -20,
          }}
          transition={{ duration: 0.5, yoyo: Infinity, ease: "easeInOut" }}
          className="float-image"
        >
          <img src={vector2} alt="Rob Production" className="sm:flex hidden mt-2 mb-20 ml-12" />
        </motion.div>
      </div>
      <motion.p
        animate={{
          x: isWagwanHovered ? -30 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="text-white max-w-[1000px] mt-5 onlyp mt-24 ml-10 float-image"
      >
        Captivating Stories, Cinematic <br /> Excellence: Unleashing the <br /> Power of Visual Narratives!
      </motion.p>
      <div>
        <motion.div
          animate={{
            y: isWagwanHovered ? -30 : 0,
          }}
          transition={{ duration: 0.3 }}
          onMouseEnter={handleWagwanHover}
          onMouseLeave={handleWagwanHover}
          className={isWagwanHovered ? "swap-image" : ""}
        >
          <img src={wagwan} alt="billing" className="ml-8 float-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;