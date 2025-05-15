"use client";
import nssclogo from "../components/images/nssc.webp";
import iitlogo from "../components/images/iit.png";
import "./global.css"
import Link from "next/link";
import Image from "next/image";
import {motion, AnimatePresence, maxGeneratorDuration} from "framer-motion";
import {useState} from "react";
import { usePathname } from "next/navigation";
// import {House, } from "lucide-react";

export default function MainLayout({children}){
    const tabs = [
        {title: "Home", link: "./", icon: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  fill="#fff"><path d="M240-200h147.69v-235.38h184.62V-200H720v-360L480-741.54 240-560v360Zm-40 40v-420l280-211.54L760-580v420H532.31v-235.38H427.69V-160H200Zm280-310.77Z"/></svg>},
        {title: "Schedule", link: "./schedule", icon: () => <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#fff"><path d="M218.46-120q-24.58 0-41.52-16.94Q160-153.88 160-178.46v-529.23q0-24.58 16.94-41.52 16.94-16.94 41.52-16.94h78.72v-83.08h38.2v83.08h292.31v-83.08h35.64v83.08h78.21q24.58 0 41.52 16.94Q800-732.27 800-707.69v529.23q0 24.58-16.94 41.52Q766.12-120 741.54-120H218.46Zm0-33.85h523.08q9.23 0 16.92-7.69 7.69-7.69 7.69-16.92v-360h-572.3v360q0 9.23 7.69 16.92 7.69 7.69 16.92 7.69Zm-24.61-418.46h572.3v-135.38q0-9.23-7.69-16.93-7.69-7.69-16.92-7.69H218.46q-9.23 0-16.92 7.69-7.69 7.7-7.69 16.93v135.38Zm0 0v-160 160ZM300-426.15V-460h360v33.85H300ZM300-260v-33.85h239.85V-260H300Z"/></svg>},
        {title: "Team", link: "./teams", icon: () => <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#fff"><path d="M40-256.92v-31.46q0-35.43 38.49-58.91 38.48-23.48 99.45-23.48 8.6 0 19.06.89 10.46.88 21.72 2.65-6.93 15.49-10.52 31.06-3.58 15.57-3.58 31.17v48.08H40Zm240 0v-45q0-24.18 14.04-44.21 14.04-20.02 41.42-34.64 27.39-14.61 63.81-21.92 36.42-7.31 80.42-7.31 44.85 0 81.27 7.31 36.42 7.31 63.81 21.92 27.38 14.62 41.31 34.64Q680-326.1 680-301.92v45H280Zm475.38 0v-47.85q0-17.1-3.21-32.71-3.22-15.62-10.32-29.7 12.53-1.82 22.53-2.7 10-.89 18.7-.89 61.05 0 98.98 23.14Q920-324.49 920-288.38v31.46H755.38Zm-441.66-33.85h332.64v-10.41q.77-33.64-44.86-54.31-45.63-20.66-121.5-20.66-75.36 0-121.24 20.66-45.89 20.67-45.04 54.46v10.26ZM177.2-405.38q-22.15 0-37.75-15.79-15.6-15.79-15.6-38.06 0-21.95 15.78-37.51 15.79-15.57 38.06-15.57 21.95 0 37.9 15.57 15.95 15.56 15.95 38.03 0 21.35-15.53 37.34-15.53 15.99-38.81 15.99Zm605.59 0q-21.58 0-37.57-16.03-15.99-16.03-15.99-37.59 0-22.18 16.03-37.74 16.03-15.57 37.97-15.57 22.57 0 38.13 15.57 15.56 15.56 15.56 37.8 0 22.06-15.46 37.81-15.47 15.75-38.67 15.75ZM480.27-440q-36.42 0-62.19-25.58-25.77-25.57-25.77-62.11 0-37.27 25.57-62.48 25.58-25.22 62.12-25.22 37.27 0 62.48 25.14 25.21 25.13 25.21 62.29 0 36.42-25.13 62.19Q517.43-440 480.27-440Zm.35-33.85q22.38 0 37.8-15.78 15.43-15.79 15.43-38.68 0-22.38-15.43-37.81-15.43-15.42-38.19-15.42-22.31 0-38.19 15.43-15.89 15.42-15.89 38.18 0 22.31 15.79 38.2 15.78 15.88 38.68 15.88Zm-.54 183.08ZM480-527.69Z"/></svg>}
    ]

    const [selectedIndex, setSelectedIndex] = useState(-1);
    const handleClick = (index) => {
        setSelectedIndex(index);
    }

    const buttonvariants = {
        initial: {
            gap: 0,
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem"
        },
        animate: (custom) => ({
            gap: custom? "0.5rem" : "0",
            paddingLeft: custom? "1rem" : "0.5rem",
            paddingRight: custom? "1rem" : "0.5rem"
        })
    }

    const spanvariants = {
        initial : {width : 0, opacity: 0},
        animate: {width: "auto", opacity: 1},
        exit: {width: 0, opacity: 0}
    }

    const transition = {
        delay: 0,
        type: "spring",
        bounce: 0,
        duration: 0.6
    }

    console.log(selectedIndex)
    

  return(
    <html>
      <body>
        
      
      <header className="header">
            <div className="header-div">

                <div className="logo-div">
                    <div className="nssclogo-div">
                        <Image 
                        src={nssclogo} 
                        alt="NSSC Logo"
                        style={{
                            height: "50px",
                            width: "50px"
                        }}     
                        priority = {true}                    
                        />
                    </div>
                    <div className="iitlogo-div">
                        <Image 
                        src={iitlogo} 
                        alt="NSSC Logo" 
                        style={{
                            height: "50px",
                            width: "50px"
                        }}   
                        />
                    </div>                    
                </div>

                <nav>
                    {tabs.map((tab, index) => {
                        const Icon = tab.icon;
                        const isSelected = selectedIndex == index;
                        const path = usePathname();
                        const isActive = path==tab.link;
                        console.log(path)
                        console.log(isActive)
                        return (
                            <motion.a
                            key = {tab.title}
                            href={tab.link}
                            variants={buttonvariants}
                            initial={false}
                            custom={selectedIndex == index}
                            animate={buttonvariants.animate(isSelected)}
                            transition={transition}
                            onClick={() => handleClick(index)}
                            className = {
                                selectedIndex == index | isActive ? "selectedTab": "notSelectedTab"
                            }
                            >
                                <div className="icon">
                                    <Icon />
                                </div>
                                <AnimatePresence
                                // mode = "wait"
                                initial = {false}
                                >
                                    {selectedIndex == index && (
                                        <motion.span
                                        variants = {spanvariants}
                                        initial = "initial"
                                        animate = "animate"
                                        exit = "exit"
                                        transition = {transition}>
                                            {tab.title}
                                        </motion.span>
                                    )}
                                </AnimatePresence>

                            </motion.a>
                        )
                    })}
                </nav>

                <div className='login-icon'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#fff"><path d="M479.23-160v-40h256.15q9.24 0 16.93-7.69 7.69-7.69 7.69-16.93v-510.76q0-9.24-7.69-16.93-7.69-7.69-16.93-7.69H479.23v-40h256.15q27.62 0 46.12 18.5Q800-763 800-735.38v510.76q0 27.62-18.5 46.12Q763-160 735.38-160H479.23Zm-28.46-178.46-28.08-28.77L515.46-460H160v-40h355.46l-92.77-92.77 28.08-28.77L592.31-480 450.77-338.46Z"/></svg>
                        <Link href="/Login">  
                            <span className='title'>Login</span>
                        </Link>
                    </div>
                </div>

            </div>
        </header>
        {children}
      </body>
    </html>
  )
}

