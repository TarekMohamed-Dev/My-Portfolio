import { useRef, useState } from "react"
import "./contact.scss"
import { motion, useInView } from "framer-motion"
import emailjs from '@emailjs/browser';
const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}

const Contact = () => {

    const ref = useRef()
    const formRef = useRef()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const isInView = useInView(ref, { margin: "-100px" })

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('tarekmohameddev0@gmail.c', 'template_vva9kyg', formRef.current, 'k0PD8_fGcFw7os6Ud')
            .then((result) => {
                setSuccess(true)
            }, (error) => {
                setError(true)
            });
    };
    return (
        <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>tarekmohameddev0@gmail.com</span>
                </motion.div>
                <motion.div className="item">
                    <h2>Address</h2>
                    <span>14 St Mohamed Madian Ain Shams , cairo</span>
                </motion.div>
                <motion.div className="item">
                    <h2>Phone</h2>
                    <span>01094747851</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.div className="phoneSvg" initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 3, duration: 1 }}>
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g data-name="1"><path initial={{ pathLength: 0 }} animate={isInView && { pathLength: 1 }} d="M348.73 450.06a198.63 198.63 0 0 1-46.4-5.85c-52.43-12.65-106.42-44.74-152-90.36s-77.71-99.62-90.36-152c-13.32-55.1-3.82-102.24 26.72-132.78l8.72-8.72a42.2 42.2 0 0 1 59.62 0l50.11 50.1a42.18 42.18 0 0 1 0 59.62l-29.6 29.59c14.19 24.9 33.49 49.82 56.3 72.63s47.75 42.12 72.64 56.31l29.59-29.6a42.15 42.15 0 0 1 59.62 0l50.1 50.1a42.16 42.16 0 0 1 0 59.61l-8.73 8.72c-21.53 21.57-51.33 32.63-86.33 32.63ZM125.22 78a12 12 0 0 0-8.59 3.56l-8.73 8.72c-22.87 22.87-29.55 60-18.81 104.49 11.37 47.13 40.64 96.1 82.41 137.86s90.73 71 137.87 82.41c44.5 10.74 81.61 4.06 104.48-18.81l8.72-8.72a12.16 12.16 0 0 0 0-17.19l-50.09-50.1a12.16 12.16 0 0 0-17.19 0l-37.51 37.51a15 15 0 0 1-17.5 2.72c-30.75-15.9-61.75-39.05-89.65-66.95s-51-58.88-66.94-89.63a15 15 0 0 1 2.71-17.5l37.52-37.51a12.16 12.16 0 0 0 0-17.19l-50.1-50.11a12.07 12.07 0 0 0-8.6-3.56Z" fill="none" class="fill-000000"></path><path d="M364.75 269.73a15 15 0 0 1-15-15 99.37 99.37 0 0 0-99.25-99.26 15 15 0 0 1 0-30c71.27 0 129.25 58 129.25 129.26a15 15 0 0 1-15 15Z" fill="none" class="fill-000000"></path><path d="M428.15 269.73a15 15 0 0 1-15-15c0-89.69-73-162.66-162.65-162.66a15 15 0 0 1 0-30c106.23 0 192.65 86.43 192.65 192.66a15 15 0 0 1-15 15Z" fill="none" class="fill-000000"></path></g></svg>
                </motion.div>
                <motion.form onSubmit={sendEmail} ref={formRef} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }}>
                    <motion.input
                        whileFocus={{ scale: 1.1 }}
                        
                        type="text" required placeholder="Name" name="name" />
                    <motion.input
                        whileFocus={{ scale: 1.1 }}
                        transition={"duration:2"}
                        type="email" required placeholder="Email" name="email" />
                    <motion.textarea
                        whileFocus={{ scale: 1.1 }}
                        transition={"duration:2"}
                        rows={8} placeholder="Message" name="message" />
                    <motion.button
                    whileHover={{scale:1.1}}
                    whileTap={{scale:.9}}
                    transition={{duration:.7}}
                    >Submit</motion.button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact