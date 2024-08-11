import { z }  from "zod"

export const userValidation = z.object({
    firstName: z.string().min(1,{ message: "First name is required" }),
    lastName: z.string().min(1,{ message: "Last name is required" }),
    email: z.string().min(1,{ message: "Email is required" }).email({ message: "Invalid email address" }),
    contactNumber: z.string().min(1, { message: "Contact No is required" }).regex(/^\d{10}$/, { message: "Invalid number" }),
    description: z.string().min(1,{ message: "Message is required" })
})
