import {ChevronRight, GithubIcon, LinkedinIcon, MailIcon} from "lucide-react";
import {Input} from "./ui/input.tsx";
import {Textarea} from "./ui/textarea";
import {Card} from "./ui/card.tsx";
import {cn} from "./ui/utils.ts";
import {buttonVariants} from "./ui/variants.ts";
import {Page} from "./page.tsx";

export function Contact() {
    return (
        <Page title={"GET IN TOUCH"} subtitle={"INIT_CONTACT"} id={"contact"}
              description={"Ready to build something extraordinary? Have an exiting opportunity? Let's connect."}>

            <Card className="w-full">
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm mb-2 font-mono dark:text-hazard-yellow">
                                NAME
                            </label>
                            <Input
                                className="border-background dark:bg-background/50 dark:border-hazard-yellow/20 focus:ring-international-orange dark:focus:ring-hazard-yellow"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2 font-mono dark:text-hazard-yellow">
                                EMAIL
                            </label>
                            <Input
                                type="email"
                                className="border-background dark:bg-background/50 dark:border-hazard-yellow/20 focus:ring-international-orange dark:focus:ring-hazard-yellow"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm mb-2 font-mono dark:text-hazard-yellow">
                            SUBJECT
                        </label>
                        <Input
                            className="border-background dark:bg-background/50 dark:border-hazard-yellow/20 focus:ring-international-orange dark:focus:ring-hazard-yellow"
                            placeholder="e.g. Full Stack Application"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-2 font-mono dark:text-hazard-yellow">
                            MESSAGE
                        </label>
                        <Textarea
                            className="border-background dark:bg-background/50 dark:border-hazard-yellow/20 focus:ring-international-orange dark:focus:ring-hazard-yellow min-h-[150px]"
                            placeholder="Describe your project..."
                        />
                    </div>

                    <button type="submit"
                            className={cn(
                                buttonVariants({variant: "primary"}),
                                "w-full"
                            )}>
                        TRANSMIT MESSAGE
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                    </button>
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
                                href="#"
                                className="w-10 h-10 border border-background hover:text-foreground dark:border-hazard-yellow/50 flex items-center justify-center hover:bg-background dark:hover:bg-hazard-yellow/50 dark:hover:border-hazard-yellow transition-colors"
                            >
                                <GithubIcon className="w-5 h-5"/>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 border border-background hover:text-foreground dark:border-hazard-yellow/50 flex items-center justify-center hover:bg-background dark:hover:bg-hazard-yellow/50 dark:hover:border-hazard-yellow transition-colors"
                            >
                                <LinkedinIcon className="w-5 h-5"/>
                            </a>
                            <a
                                href="#"
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
