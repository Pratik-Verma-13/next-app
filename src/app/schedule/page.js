"use client";
import { useState } from "react";
import Image from "next/image";
import eventIcon from "../components/images/event-icon.png"
import locationIcon from "../components/images/map.png";
import clock from "../components/images/clock.png";
import {motion} from "framer-motion";
import Link from "next/link";

const Schedule = () => {

    const [day0, setday0] = useState(
        [
            {title : "Inauguration Ceremony", description: "This is Inauguration ceremony", location: "Kalidas", time: "6 PM", id: 1},
            {title : "star gazing", description: "this is star gazing", location: "Tata Steel", time : "8 PM", id : 2}
        ]
    )

    const [day1, setday1] = useState(
        [
            {title:"Hoverpod", description: "This is hoverpod", location:"Vikramshila", time:"2 PM", id:1},
            {title: "Liftoff", description: "This is liftoff", location:"MG Ground", time:"5 PM", id:2},
            {title: "Eggstravaganza", description: "This is Eggstravaganza", location:"GymK", time:"6 PM", id:3}
        ]
    );

    const [day2, setday2] = useState(
        [
            {title: "CosmoMath", description: "This is CosmoMath", location:"CIC", time:"3 PM", id:1},
            {title: "Case Study", description: "This is Case Study", location:"Gargi", time:"4 PM", id:2},
            {title: "Paper Presentation", description: "This is paper presentation", location: "Maitryee", time:"5 PM", id:3}           
        ]
    )

    const [currentDay, setCurrentDay] = useState(day0);
    const Location = () => <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480.14-490.77q26.71 0 45.59-19.02 18.89-19.02 18.89-45.73 0-26.71-19.03-45.6Q506.57-620 479.86-620q-26.71 0-45.59 19.02-18.89 19.02-18.89 45.73 0 26.71 19.03 45.6 19.02 18.88 45.73 18.88ZM480-172.92q112.77-98.16 178.31-199.66t65.54-175.57q0-109.77-69.5-181.2-69.5-71.42-174.35-71.42t-174.35 71.42q-69.5 71.43-69.5 181.2 0 74.07 65.54 175.57T480-172.92Zm0 53.69Q339-243.92 267.58-351.81q-71.43-107.88-71.43-196.34 0-126.93 82.66-209.39Q361.46-840 480-840q118.54 0 201.19 82.46 82.66 82.46 82.66 209.39 0 88.46-71.43 196.34Q621-243.92 480-119.23Zm0-436.15Z"/></svg>

    return (  
        <div className="schedule">
            <h1 className="schedule-heading">Schedule</h1>
            <div className="day-header">
                <div className="day-display">
                    <div onClick={() => setCurrentDay(day0)}>
                        <span className="day-num">0</span>
                        <span className="day-date">1 Aug</span>
                    </div>
                </div>
                <div className="day-display">
                    <div onClick={() => setCurrentDay(day1)}>
                        <span className="day-num">1</span>
                        <span className="day-date">2 Aug</span>
                    </div>
                </div>
                <div className="day-display">
                    <div onClick={() => setCurrentDay(day2)}>
                        <span className="day-num">2</span>
                        <span className="day-date">3 Aug</span>
                    </div>
                </div>
            </div>
            <div className="event-list">
                {currentDay.map((event) => (
                    <div className={[
                        event.id%2 == 1? "left-card":"right-card"
                    ]} key={event.id}>
                        <Link
                        className="event"
                        href={{
                            pathname: '/events',
                            query: {
                                title: event.title,
                                description: event.description,
                                location: event.location,
                                time: event.time
                            }
                        }}
                        >
                            <div className="event-icon">
                                <Image
                                    src={eventIcon}
                                />
                            </div>
                            <div className="event-details">
                                <p className="event-title">{event.title}</p>
                                <div className="location-info"
                                    
                                >
                                    <motion.div className="location-icon"
                                    whileHover={{scale: 1.1, pointer: "cursor"}}
                                    >
                                        <Image
                                            src={locationIcon}

                                        />
                                    </motion.div>
                                    <div className="location-name">
                                        <p>{event.location}</p>
                                    </div>
                                </div>
                                <div className="time-info">
                                    <div className="time-icon">
                                        <Image
                                            src={clock}
                                        />
                                    </div>
                                    <div className="time">
                                        <p>{event.time}</p>
                                    </div>
                                </div>
                            </div>

                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Schedule;