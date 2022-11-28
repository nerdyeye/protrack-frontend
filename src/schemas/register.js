import * as yup from "yup";

const emailRules = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{6,}$/;
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .matches(emailRules, { message: "Please input a valid email" })
    .required("Required"),
  fullname: yup.string().required("Required"),
  phoneNo: yup.number().integer().required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
});
