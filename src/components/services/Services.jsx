import { useRef } from "react"
import "./services.scss"
import { motion, useInView } from "framer-motion"
const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
}
const Services = () => {
    const ref = useRef()
    const isInView = useInView(ref, { margin: "-100px" })
    return (
        <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={"animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>i focuse on helping your brand grow
                    <br /> and move forward</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="./people.webp" alt="" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business</h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h4>Interactive UI Design</h4>
                    <p>
                        Elevate your online presence with captivating interactive interfaces. We craft immersive designs for lasting impact and visually stunning user experiences.</p>
                    <img class="filter-ora" src="./ui.svg" alt="" />
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h4>Performance Optimization</h4>
                    <p>
                        Optimize website performance with advanced techniques like lazy loading and image compression for a swift user experience.</p>
                    <img class="filter-ora" src="./speed.svg" alt="" />
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h4>Inclusive Web Design</h4>
                    <p>Create inclusive websites with accessible design for screen readers and keyboard navigation. Demonstrate social responsibility, broadening audience reach through thoughtful color contrast.</p>
                    <img class="filter-ora" src="./des.svg" alt="" />
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h4>Cross-Platform Web Development</h4>
                    <p>Achieve cross-device success with our compatibility service. Deliver consistent user experiences on all devices through responsive design, positioning your brand for digital success</p>
                    <img class="filter-ora" src="./cros.svg" alt="" />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services