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



const Projects =() => {
    return(

        <div className="pb-24">

                <motion.h2 
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}                
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl">
                    Projects
                </motion.h2>
                <motion.div>
                        <div className="card ">
                                <a href="https://www.productivitysaas.amarkumarshaw.com/"  target="_blank">
                                <div className="max-w-xs w-full bg-black/70 rounded-lg shadow-2xl shadow-white/50 overflow-hidden 
                                mx-auto
                                ">
                                    <div>
                                        <img src="landing.png" />
                                       <div className="p-4">
                                       <h3 className="text-lg py-2 text-center">Productivity SaaS Landing Page</h3>
                                        <p className="text-sm text-gray-400 px-2 py-1 text-center">
                                        Maximize your efficiency with our all-in-one productivity platform. 
                                        </p>
                                       </div>
                                    </div>

                                </div>
                                </a>
                        </div>
                </motion.div>
                
                

        </div>
    )
}

export default Projects;