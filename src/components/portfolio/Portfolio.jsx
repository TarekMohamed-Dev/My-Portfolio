import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "../../../public/ecommerce.png",
        desc: "'Discover a seamless shopping experience with our React-powered online store. Backed by robust backend functionality, enhanced with Material UI's sleek design, and animated charm courtesy of Framer Motion. Immerse yourself in the professional allure, complete with a stylish day and night mode for personalized browsing.'",
        url: "https://ecommerce-38013.web.app/"
    },
    {
        id: 2,
        title: "Ai website",
        img: "../../../public/ai.PNG",
        desc: "GPT-3: Unleashing the future with AI-powered excellence. Elevate your online experience with our React-based website, seamlessly integrating cutting-edge artificial intelligence for unparalleled professionalism and innovation.",
        url: "https://tarekmohamed-dev.github.io/GPT3/"
    },
    {
        id: 3,
        title: "Gericht-Luxury-Restaurant",
        img: "../../../public/restaurant.png",
        desc: "Gericht: A pinnacle of culinary sophistication and opulence. Elevate your dining experience with our luxury restaurant's exquisite website, seamlessly crafted using React and SAS technology, boasting a harmonious blend of elegance and immaculate, organized code.",
        url: "https://gericht-luxury-restaurant.web.app/"
    },
    {
        id: 4,
        title: "Landing page",
        img: "https://www.searchenginejournal.com/wp-content/uploads/2023/08/best-landing-page-examples-64e6080f990bb-sej.png",
        desc: "loremhfghfhfhfghghggh",
        url: "https://ecommerce-38013.web.app/"
    },

]

const Single = ({ item }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, })
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><a href={item.url}>See Demo</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio