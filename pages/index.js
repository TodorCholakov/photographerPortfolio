import { Inter } from "next/font/google";
import { easeOut, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const titleAnimation =  {
    show:{ opacity: 1, transition:{ duration: 1} },
    hidden:{ opacity: 0 },
   
  };
  const container = {
    hidden: {y:300},
    show:{y:0, transition:{ duration: 1}, ease:easeOut}
  }


  return (
    <motion.div   className="w-50 mt-20 flex"  variants={container} initial="hidden" animate="show">
      <motion.h1
       variants = {titleAnimation} initial="hidden" animate="show"
        className="font-primary text-7xl"
      >
        Hey
      </motion.h1>
      <motion.h1
         variants={titleAnimation}
       
        className="font-primary text-7xl"
      >
        do you have a 
      </motion.h1>
      <motion.h1
      
        className="font-primary text-9xl"
      >
        CV
      </motion.h1>
      <button className="btn btn-outline">YES</button>
      <button className="btn btn-outline">No</button>
    </motion.div>
  );
}
