import {motion} from "motion/react";
import {FaGithub, FaInstagram, FaLinkedin, FaDribbble, FaBehance} from "react-icons/fa";
import {FaBluesky} from "react-icons/fa6";

interface SocialLink {
    name: string;
    icon: React.ReactNode;
    color: string;
}

const socialLinks: SocialLink[] = [
    {
        name: "Instagram",
        icon: <FaInstagram className="w-6 h-6"/>,
        color: "hover:bg-pink-500"
    },
    {
        name: "Bluesky",
        icon: <FaBluesky className="w-6 h-6"/>,
        color: "hover:bg-blue-400"
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin className="w-6 h-6"/>,
        color: "hover:bg-blue-600"
    },
    {
        name: "Dribbble",
        icon: <FaDribbble className="w-6 h-6"/>,
        color: "hover:bg-pink-400"
    },
    {
        name: "Behance",
        icon: <FaBehance className="w-6 h-6"/>,
        color: "hover:bg-blue-500"
    },
    {
        name: "GitHub",
        icon: <FaGithub className="w-6 h-6"/>,
        color: "hover:bg-gray-800"
    }
];

export const SocialLinks = () => {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.2}}
            className="flex flex-col items-center gap-6"
        >
            <h3 className="text-4xl text-neutral-800">
                Social Media Links
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social) => (
                    <motion.div
                        key={social.name}
                        initial={{opacity: 0, scale: 0.5}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.3}}
                        whileHover={{scale: 1.1, y: -5}}
                        whileTap={{scale: 0.95}}
                        className={`
                            bg-white text-neutral-700 p-4 rounded-full shadow-lg
                            transition-colors duration-300 cursor-pointer
                            ${social.color} hover:text-white
                        `}
                    >
                        {social.icon}
                    </motion.div>
                ))}
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-6 justify-center gap-4">
                {socialLinks.map((social) => (
                    <motion.div
                        key={social.name}
                        initial={{opacity: 0, scale: 0.5}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.3}}
                        whileHover={{scale: 1.1, y: -5}}
                        whileTap={{scale: 0.95}}
                        className={`
                            bg-white text-neutral-700 p-4 rounded-lg shadow-lg
                            transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2
                            ${social.color} hover:text-white flex flex-col w-full
                        `}
                    >
                        {social.icon}
                        <p>{social.name}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};