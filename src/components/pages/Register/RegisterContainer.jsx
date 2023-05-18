import { useState } from "react";
import { useFormik } from "formik";
import Register from "./Register";
import { useNavigate } from "react-router";
import * as Yup from "yup";

const RegisterContainer = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (data) => {
      console.log(data);
      console.log("se envio el formulario");
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("This field is required")
        .min(3, "The name should have a minimum of 3 letters."),
      lastName: Yup.string().required("This field is required"),
      email: Yup.string()
        .email("The entered text doesnt match with an email acount")
        .required("This field is required"),
      password: Yup.string()
        .required("This field is required")
        .min(
          6,
          "The password is too short, it should have a minimum of 6 characters"
        )
        .max(
          15,
          "The password is too long, it should have a maximum of 15 characters"
        )
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "The password field should have a lower case, a upper case, a spacial character, and a number",
        }),
      confirmPassword: Yup.string()
        .required("This field is required")
        .oneOf(
          [Yup.ref("password"), null],
          "The entered text doesnt match the password"
        ),
      phone: Yup.number()
        .required("This field is required")
        .min(7, "Cellphone number field should have at least 7 numbers"),
    }),

    validateOnChange: false,
  });
  const navigate = useNavigate();
  return (
    <Register
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
      values={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      navigate={navigate}
    />
  );
};

export default RegisterContainer;
