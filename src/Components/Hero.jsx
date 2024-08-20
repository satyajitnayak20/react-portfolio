import aboutImg from "../assets/about.jpg";
import {motion} from "framer-motion";

const container = (delay) =>({
  hidden : {x: -100, opacity:0},
  visible:{
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay},
  },
})

const Hero = () => {
  return (
  <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
         <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-centre lg:items-start">
                <motion.h1 
                variants = {container(0)}
                initial ="hidden"
                animate ="visible"
              
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-8 lg:text-8xl">
                Satyajit Nayak</motion.h1>
                <motion.span className="bg-gradient-to-r from-pink-300 via-slate-500
                to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                Full Stack Web Developer</motion.span>
                <p className="my-2 max-w-xl py-6 font-light tracj=king-tighter">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, incidunt quos. Voluptate velit et quas vel tempora suscipit reiciendis. Asperiores rerum tempore minus?
                </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
            initial={{x: 100, opacity:0}}
            animate={{x: 0, opacity:1}}
            transition={{duration:1, delay:1.2}}
            src={aboutImg} alt="Satyajit Nayak" />
          </div>
          </div>
     </div>  
</div>
  )
}

export default Hero
