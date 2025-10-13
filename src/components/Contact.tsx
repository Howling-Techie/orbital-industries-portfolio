import {ChevronRight, GithubIcon, LinkedinIcon, MailIcon} from "lucide-react";
import {Input} from "./ui/input.tsx";
import {Textarea} from "./ui/textarea";
import {Card} from "./ui/card.tsx";
import {cn} from "./ui/utils.ts";
import {buttonVariants} from "./ui/variants.ts";
import {Page} from "./page.tsx";
import emailjs from "@emailjs/browser";
import React, {useState} from "react";

export function Contact() {
    const [emailSent, setEmailSent] = useState(false);
    const [responseMessage, setResponseMessage] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmailSent(true);
        const form = e.currentTarget;
        console.log(form);
        emailjs
            .sendForm("service_kfaxchr", "template_xrbeelo", form, {
                publicKey: "sRNq1oZPTynwJlCeX",
            })
            .then(
                () => {
                    setResponseMessage("Email sent successfully!");
                },
                (error) => {
                    setResponseMessage(`Failed to send email. Please try again later.\nError: ${error.text}`);
                },
            );
    };
    return (
        <Page title={"GET IN TOUCH"} subtitle={"INIT_CONTACT"} id={"contact"}
              description={"Ready to build something extraordinary? Have an exiting opportunity? Let's connect."}>

            <Card className="w-full">
                <form className="space-y-6" onSubmit={sendEmail}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm mb-2 font-mono dark:text-hazard-yellow">
                                NAME
                            </label>
                            <Input name="name"
                                   required
                                   placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2 font-mono dark:text-hazard-yellow">
                                EMAIL
                            </label>
                            <Input
                                type="email"
                                name="email"
                                required
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm mb-2 font-mono dark:text-hazard-yellow">
                            SUBJECT
                        </label>
                        <Input
                            name="title"
                            required
                            placeholder="e.g. Full Stack Application"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-2 font-mono dark:text-hazard-yellow">
                            MESSAGE
                        </label>
                        <Textarea
                            name="message"
                            required
                            className="min-h-[150px]"
                            placeholder="Describe your project..."
                        />
                    </div>

                    <button type="submit"
                            className={cn(
                                buttonVariants({variant: "primary"}),
                                "w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 h-10 inline-flex items-center justify-center"
                            )}
                            disabled={emailSent}>
                        TRANSMIT MESSAGE
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                    </button>
                    {responseMessage && (
                        <div className="mt-4 text-sm text-international-orange dark:text-hazard-yellow">
                            {responseMessage}
                        </div>
                    )}
                </form>

                <div className="pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <div className="text-sm mb-1">
                                DIRECT COMM CHANNEL
                            </div>
                            <a
                                href="mailto:contact@orbital.industries"
                                className="font-mono"
                            >
                                contact@orbital.industries
                            </a>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Howling-Techie"
                                className="w-10 h-10 border border-background hover:text-foreground dark:border-hazard-yellow/50 flex items-center justify-center hover:bg-background dark:hover:bg-hazard-yellow/50 dark:hover:border-hazard-yellow transition-colors"
                            >
                                <GithubIcon className="w-5 h-5"/>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/matthew-berry-68a718a8/"
                                className="w-10 h-10 border border-background hover:text-foreground dark:border-hazard-yellow/50 flex items-center justify-center hover:bg-background dark:hover:bg-hazard-yellow/50 dark:hover:border-hazard-yellow transition-colors"
                            >
                                <LinkedinIcon className="w-5 h-5"/>
                            </a>
                            <a
                                href="mailto:contact@orbital.industries"
                                className="w-10 h-10 border border-background hover:text-foreground dark:border-hazard-yellow/50 flex items-center justify-center hover:bg-background dark:hover:bg-hazard-yellow/50 dark:hover:border-hazard-yellow transition-colors"
                            >
                                <MailIcon className="w-5 h-5"/>
                            </a>
                        </div>
                    </div>
                </div>
            </Card>
        </Page>
    );
}
