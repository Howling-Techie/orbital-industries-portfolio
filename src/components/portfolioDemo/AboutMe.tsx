import {motion} from "motion/react";
import {User} from "lucide-react";

export const AboutMe = () => {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
        >
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Profile Image Placeholder */}
                <div className="flex-shrink-0">
                    <div
                        className="w-48 h-48 rounded-full bg-gradient-to-br from-emerald-300 to-cyan-300 flex items-center justify-center shadow-lg">
                        <User className="w-24 h-24 text-white"/>
                    </div>
                </div>

                {/* About Content */}
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                        About Me
                    </h2>
                    <div className="space-y-4 text-neutral-600 leading-relaxed">
                        <p>
                            Here is a section where you can introduce yourself and your expertise. You can include a
                            brief bio, your interests, and your goals. Really sell yourself!
                        </p>
                    </div>

                    {/* Skills/Expertise */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-neutral-800 mb-3">Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Digital Art", "Photography", "Illustration", "Design", "Creative Direction"].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-cyan-100 text-neutral-700 rounded-full text-sm font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};