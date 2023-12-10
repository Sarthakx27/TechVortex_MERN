const { z } = require("zod");

//object schema

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name atlease of 3 characters" })
    .max(30, { message: "Name cannot exceed 30 characters" }),
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid Email"})
    .min(3, { message: "Email atlease of 3 characters" })
    .max(30, { message: "Email cannot exceed 30 characters" }),
  phone: z
    .string({ required_error: "Phone is Required" })
    .min(10, { message: "Phone atlease of 10 characters" })
    .max(13, { message: "Phone cannot exceed 13 characters" }),  
  password: z
    .string({ required_error: "Password is Required" })
    .min(7, { message: "Password atlease of 7 characters" })
    .max(30, { message: "Password cannot exceed 30 characters" }),  
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid Email"})
    .min(3, { message: "Email atlease of 3 characters" })
    .max(30, { message: "Email cannot exceed 30 characters" }),
  password: z 
    .string({ required_error: "Password is Required" })
    .min(7, { message: "Password atlease of 7 characters" })
    .max(30, { message: "Password cannot exceed 30 characters" })
}) 

module.exports = { signupSchema, loginSchema };
