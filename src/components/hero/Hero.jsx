import './hero.scss'
import { motion } from "framer-motion"
import { FaCloudDownloadAlt } from "react-icons/fa"
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
}

const imgVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}

const Hero = () => {
  return (
     <div className='hero'>
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Greetings, my name is</motion.h2>
            <motion.span variants={textVariants} className='my-name'>Tarek Mohamed</motion.span>
          <motion.span variants={textVariants}>Front-end Developer</motion.span>
          <motion.div className='desc' variants={textVariants}>
          A skilled front-end developer with extensive experience in JavaScript, and I specialize in frameworks like React.js and Next.js. My expertise lies in delivering high-quality, optimized code that caters to clients' needs and exceeds their expectations.
          </motion.div>
          <motion.div variants={textVariants} className="buttons">
            <motion.a href='#Portfolio' variants={textVariants}>See The Latest works</motion.a>
            <motion.a href='#Contact' className='Contact' variants={textVariants}>Contact Me</motion.a>
            <motion.a variants={textVariants} href='./Tarek-resume.pdf' className='resume' download>
              <FaCloudDownloadAlt style={{ width: "35px", height: "35px" }} />
              <h6>Resume</h6>
            </motion.a>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="scroll" />
        </motion.div>
        <motion.div className="imageContainer" variants={imgVariants} initial="initial" animate="animate">
          <motion.img variants={imgVariants} src="./hero0.png" alt="hero" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Creative Developer Designer
      </motion.div>
    </div>
  )
}

export default Hero