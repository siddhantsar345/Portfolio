import {HERO_CONTENT} from "../index"
import { delay, motion } from "framer-motion";

const container=(delay) =>({
  hidden:{x:-100, opacity:0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay},
  },
});

const Hero=() =>{
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
           <div className="flex flex-col items-center lg:items-start">
            <motion.h1
            variants={container(0)}
            initial="hidden" 
            animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Siddhant Sar</motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden" 
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-50 to-purple-500 bg-clip-text text-xl sm:text-2xl md:text-3xl tracking-tight text-transparent text-center lg:text-left">Full Stack Developer/ Cloud Computing Enthusiast</motion.span>
            <br />
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-4 max-w-lg px-4 py-4 font-light tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
              </motion.p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
