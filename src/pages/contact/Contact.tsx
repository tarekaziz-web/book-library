
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";




const formSchema = z.object({
    full_name: z
        .string()
        .min(2, { message: "Full name is required and must be at least 2 characters long." })
        .max(50, { message: "Full name must be less than 50 characters." })
        .regex(/^[a-zA-Z\s'.-]+$/, {
            message: "Full name can only contain letters, spaces, apostrophes, dots, and hyphens.",
        }),
    message: z
        .string()
        .min(2, { message: "Message is required and must be at least 2 characters long." })
        .max(50, { message: "Message must be less than 50 characters." })
        .regex(/^[a-zA-Z\s'.-]+$/, {
            message: "Message can only contain letters, spaces, apostrophes, dots, and hyphens.",
        }),

    email: z
        .string()
        .nonempty({ message: "Email is required." })
        .min(5, { message: "Email must be at least 5 characters long." })
        .max(50, { message: "Email must be less than 50 characters." })
        .email({ message: "Please enter a valid email address." }),

    phone: z
        .string()
        .nonempty({ message: "Phone number is required." })
        .min(7, { message: "Phone number must be at least 7 digits long." })
        .max(20, { message: "Phone number must be no more than 15 digits long." })
        .regex(/^\+?[0-9]{7,15}$/, {
            message: "Phone number must contain only digits and may start with +.",
        }),
})




const Contact = () => {

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            full_name: "",
            email: "",
            phone: "",
            message: "",
        },
    })


    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values)

        toast.success("Thank you for your message")

        form.reset()
    }
    return (
        <>
            <div className=" w-full flex flex-col gap-16 items-center justify-center px-6 pt-18">
                <div className="text-center max-w-3xl">
                    <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-6xl md:leading-[1.2] font-semibold tracking-tighter">
                        Contact Us </h1>
                </div>
            </div>
            <div className=" max-w-screen-md mx-auto my-16 bg-accent px-6 py-10 rounded-2xl ">
                <Form  {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="full_name"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="full name" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input placeholder="phone" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel>Your message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="your message" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className=" w-full " type="submit">Submit</Button>
                    </form>
                </Form>
            </div>

        </>
    );
};

export default Contact;