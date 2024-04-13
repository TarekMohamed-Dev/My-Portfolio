import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
const items = [
    {
        id: 1,
        title: "Easy Learn",
        img: "./Easy-Learn-MarketPlace.png",
        desc: "'Easy Learn offers dynamic shopping with light/dark modes for all. Seamless browsing, responsive design, and Stripe-powered checkout ensure smooth purchases. With Next.js and Tailwind CSS, elevate your store for top performance and satisfaction.'",
        url: "https://github.com/TarekMohamed-Dev/Easy-Learn-MarketPlace"
    },
    {
        id: 2,
        title: "Amazon Clone",
        img: "./amazon.png",
        desc: "This is a Amazon Shopping Site's clone version created using ReactJs. Here we can able to add your items to the cart and also able to purchase the products using your card via stripe payment method",
        url: "https://clone-b2d87.web.app/"
    },
    {
        id: 3,
        title: "GPT-3",
        img: "./ai.png",
        desc: "GPT-3: Unleashing the future with AI-powered excellence. Elevate your online experience with our React-based website, seamlessly integrating cutting-edge artificial intelligence for unparalleled professionalism and innovation.",
        url: "https://tarekmohamed-dev.github.io/GPT3/"
    },
    {
        id: 4,
        title: "Gericht-Luxury-Restaurant",
        img: "./restaurant.png",
        desc: "Gericht: A pinnacle of culinary sophistication and opulence. Elevate your dining experience with our luxury restaurant's exquisite website, seamlessly crafted using React and SAS technology, boasting a harmonious blend of elegance and immaculate, organized code.",
        url: "https://gericht-luxury-restaurant.web.app/"
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
                        <a href={item.url}>See Demo</a>
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