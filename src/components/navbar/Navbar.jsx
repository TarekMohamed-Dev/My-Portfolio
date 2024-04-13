import { motion } from "framer-motion"
import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span className="logo"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    TarekDevStudio
                </motion.span>
                <div className="social">
                    <motion.a
                        initial={{ y: -30 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 2,
                            type: "spring",
                            stiffness: 200,
                            mass: 0.5,
                            damping: 5
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://www.linkedin.com/in/tarek-mohamed-881a57297/">
                        <img src="./in.png" alt="facebook" />
                    </motion.a>
                    <motion.a
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 2,
                            type: "spring",
                            stiffness: 200,
                            mass: 0.5,
                            damping: 5
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://github.com/TarekMohamed-Dev">
                        <img src="./g.gif" alt="github" />
                    </motion.a>
                    <motion.a
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 2.5,
                            type: "spring",
                            stiffness: 200,
                            mass: 0.5,
                            damping: 5
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://www.facebook.com/tarek.algazer">
                        <img src="./facebook.png" alt="facebook" />
                    </motion.a>
                    <motion.a
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 3,
                            type: "spring",
                            stiffness: 200,
                            mass: 0.5,
                            damping: 5
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://wa.me/+201094747851?text=Send20%a20%quote">
                        <img src="./w.png" alt="whatsapp" />
                    </motion.a>
                    <motion.a
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 3,
                            type: "spring",
                            stiffness: 200,
                            mass: 0.5,
                            damping: 5
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href="https://t.me/+201094747851">
                        <img src="./telegram.png" alt="telegram" />
                    </motion.a>
                </div>
            </div>
        </div>
    )
}

export default Navbar