"use client";

import { useState } from "react";
import boy from "../components/images/boy.jpg";
import fb from "../components/images/facebook.png";
import linkedin from "../components/images/linkedin.png";
import email from "../components/images/email.png";
import Image from "next/image";
import {motion, AnimatePresence, scale, hover, delay} from "framer-motion";
import Link from "next/link";

export default function Team() {

    const [members, setmember] = useState(
        [
            {
                name: "Raman",
                team: "Tech Team",
                linkedin: "www.linkedin.com/A",
                image: boy,
                fb: "www.fb.com/A",
                email: "abc@email.com",
                id: 1
            },
            {
                name: "Shyam",
                team: "Design Team",
                linkedin: "linkedin.com/B",
                image: boy,
                fb: "fb.com/B",
                email: "abc@email.com",
                id: 2
            },
            {
                name: "Dhiraj",
                team: "Events Team",
                linkedin: "linkedin.com/C",
                image: boy,
                fb: "fb.com/C",
                email: "abc@email.com",
                id: 3
            },
            {
                name: "Keshav",
                team: "Sponsorship Team",
                linkedin: "linkedin.com/D",
                image: boy,
                fb: "fb.com/D",
                email: "abc@email.com",
                id: 4
            },
            {
                name: "Raman",
                team: "Tech Team",
                linkedin: "linkedin.com/A",
                image: boy,
                fb: "fb.com/A",
                email: "abc@email.com",
                id: 5
            },
            {
                name: "Dhiraj",
                team: "Events Team",
                linkedin: "linkedin.com/C",
                image: boy,
                fb: "fb.com/C",
                email: "abc@email.com",
                id: 6
            },
            {
                name: "Raman",
                team: "Tech Team",
                linkedin: "linkedin.com/A",
                image: boy,
                fb: "fb.com/A",
                email: "abc@email.com",
                id: 7
            },
            {
                name: "Shyam",
                team: "Design Team",
                linkedin: "linkedin.com/B",
                image: boy,
                fb: "fb.com/B",
                email: "abc@email.com",
                id: 8
            },
            {
                name: "Dhiraj",
                team: "Events Team",
                linkedin: "linkedin.com/C",
                image: boy,
                fb: "fb.com/C",
                email: "abc@email.com",
                id: 9
            },
            {
                name: "Keshav",
                team: "Sponsorship Team",
                linkedin: "linkedin.com/D",
                image: boy,
                fb: "fb.com/D",
                email: "abc@email.com",
                id: 10
            }
        ]
    )

    const [teams, setTeams] = useState(
        ["Tech Team", "Events Team", "Sponsorship Team", "Design Team"]
    )

    return ( 
        <div className="team">
            <h1>Our Team</h1>
            
                {
                    teams.map(team => {
                        const filteredTeam = members.filter((member) => member.team === team);
                        return (
                            <div key={team} className="team-block">
                                <h2 className="event-heading">{team}</h2>
                                <div className="members-grid">
                                {filteredTeam.map((member) => (
                                    <motion.div className="member" key={member.id}
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.8}}
                                    transition={{duration: 0.2}}
                                    >
                                        <div className="member-image-div">
                                            <Image src={member.image} alt="image" />
                                        </div>
                                        <p className="member-name">{member.name}</p>
                                        <div className="member-contact">
                                            <motion.a 
                                            href={member.fb}
                                            whileHover={{scale: 1.1}}
                                            whileTap={{scale: 0.8}}
                                            transition={{duration: 0.2}}
                                            >
                                                <Image src={fb} alt="" />
                                            </motion.a>
                                            <a href={`mailto:${member.email}`}>
                                                <Image src={email} alt="" />
                                            </a>
                                            <a href={member.linkedin}>
                                                <Image src={linkedin} alt="" />
                                            </a>
                                        </div>
                                    </motion.div>                              
                                ))}
                                </div>
                            </div>
                        );
                    })
                }
        </div>
     );
}
