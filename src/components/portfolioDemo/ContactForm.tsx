import {useState} from "react";
import {motion} from "motion/react";
import {Send, Mail, User, MessageSquare, CheckCircle} from "lucide-react";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitted(true);
        setIsSubmitting(false);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({name: "", email: "", subject: "", message: ""});
        }, 3000);
    };

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
        >
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-neutral-800 mb-3">
                    Get In Touch
                </h2>
                <p className="text-neutral-600">
                    This is an example contact form. You can replace it with your own form or integrate with a
                    third-party service. This is just a placeholder and does not actually send any messages.
                </p>
            </div>

            {isSubmitted ? (
                <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    className="flex flex-col items-center justify-center py-12"
                >
                    <CheckCircle className="w-20 h-20 text-green-500 mb-4"/>
                    <h3 className="text-2xl font-semibold text-neutral-800 mb-2">
                        Message Sent!
                    </h3>
                    <p className="text-neutral-600">
                        Thank you for reaching out. I'll get back to you soon.
                    </p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Input */}
                        <div className="relative">
                            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                                Your Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"/>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all"
                                    placeholder="Ryan Elbertson"
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                                Your Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"/>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all"
                                    placeholder="email@example.com"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Subject Input */}
                    <div className="relative">
                        <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                            Subject
                        </label>
                        <div className="relative">
                            <MessageSquare
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"/>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all"
                                placeholder="Project Inquiry"
                            />
                        </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="relative">
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none transition-all resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                        className={`
                            w-full py-4 px-6 rounded-lg font-semibold text-white
                            bg-gradient-to-r from-emerald-400 to-cyan-400
                            hover:from-emerald-500 hover:to-cyan-500
                            focus:ring-4 focus:ring-emerald-300
                            transition-all duration-300
                            flex items-center justify-center gap-2
                            ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}
                        `}
                    >
                        {isSubmitting ? (
                            <>
                                <motion.div
                                    animate={{rotate: 360}}
                                    transition={{duration: 1, repeat: Infinity, ease: "linear"}}
                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5"/>
                                Send Message
                            </>
                        )}
                    </motion.button>
                </form>
            )}
        </motion.div>
    );
};