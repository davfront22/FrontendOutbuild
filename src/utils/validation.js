import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required."),
  password: Yup.string()
    .min(6, "Password must have a minimum length of 6.")
    .matches(/[A-Za-z]/, "Password must contain at least one letter.")
    .matches(/[0-9]/, "Password must contain at least one number.")
    .required("Password is required."),
});
