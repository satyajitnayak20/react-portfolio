import aboutImg from "../assets/about.jpg";
import {motion} from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About
      <span className="text-neutral-500">  Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div.motion 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
            
        </div>
        </div.motion>


        <div.motion
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 ">
            <div className="flex justify-center lg:justify-start">
           <p className="my-2 max-w-xl py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quisquam obcaecati fuga libero consequuntur quia quos harum labore id corrupti, ut, incidunt in omnis aut voluptatibus asperiores rerum, excepturi temporibus earum. Dolor atque totam molestiae? Soluta dignissimos beatae quae voluptas. Quasi ducimus, officia, quia quibusdam temporibus ea laborum saepe molestias nisi natus atque sunt!</p>
          </div>
          </div.motion>
      </div>
    </div>
  )
}

export default About
