import {RiReactjsLine} from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { SiStrapi } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import {motion} from "framer-motion"



const iconVariants =  (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"

            
        }
    }
})



const Technologies =() => {
    return(

        <div className="pb-24">

                <motion.h2 
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}                
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl">
                    Technologies
                </motion.h2>
                <motion.div 
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}                
                transition={{duration:1.5}} 
                className="flex flex-wrap items-center justify-center gap-4 ">

                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        className="flex flex-col items-center"
                        >
                            
                            <RiReactjsLine className=" p-2 text-5xl md:text-7xl lg:text-8xl text-cyan-400"/>
                            <p className="text-base text-stone-500">React.js</p>
                        </motion.div>
                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(5)}
                        className="flex flex-col items-center"
                        >
                            <RiNextjsFill className=" p-2 text-5xl md:text-7xl lg:text-8xl text-white"/>
                            <p className="text-base text-stone-500">Next.js</p>
                        </motion.div>
                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(3)}
                        className="flex flex-col items-center"
                        >
                            <IoLogoJavascript className=" p-2 text-5xl md:text-7xl lg:text-8xl text-yellow-400"/>
                            <p className="text-base text-stone-500">JavaScript</p>
                        </motion.div>
                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(6)}
                        className="flex flex-col items-center"
                        >
                            <TbBrandRedux  className=" p-2 text-5xl md:text-7xl lg:text-8xl text-purple-600"/>
                            <p className="text-base text-stone-500">Redux</p>
                        </motion.div>
                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2)}
                        className="flex flex-col items-center"
                        >
                            <RiTailwindCssFill  className=" p-2 text-5xl md:text-7xl lg:text-8xl text-cyan-400"/>
                            <p className="text-base text-stone-500">Tailwind CSS</p>
                        </motion.div>
                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        className="flex flex-col items-center"
                        >
                            <SiTypescript className=" p-2 text-5xl md:text-7xl lg:text-8xl text-blue-500"/>
                            <p className="text-base text-stone-500">TypeScript</p>
                        </motion.div>
                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(6)}
                        className="flex flex-col items-center"
                        >
                            <SiMui  className="p-2 text-5xl md:text-7xl lg:text-8xl text-cyan-400" />
                            <p className="text-base text-stone-500">MUI</p>
                               
                                
                        </motion.div>
                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2)}
                        className="flex flex-col items-center"
                        >
                            <BiLogoPostgresql className="p-2 text-5xl md:text-7xl lg:text-8xl text-blue-400" />
                            <p className="text-base text-stone-500">Postgres SQL</p>
                               
                                
                        </motion.div>
                        
                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(4)}
                        className="flex flex-col items-center"
                        >
                            <SiStrapi className="p-2 text-5xl md:text-7xl lg:text-8xl text-blue-500" />
                            <p className="text-base text-stone-500">Strapi</p>
                               
                                
                        </motion.div>

                        <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(1)}
                        className="flex flex-col items-center"
                        >
                            <SiVite className="p-2 text-4xl md:text-7xl lg:text-8xl text-white" />
                            <p className="text-base text-stone-500">Vite</p>
                               
                                
                        </motion.div>
                      
                </motion.div>

        </div>
    )
}

export default Technologies;