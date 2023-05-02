import React from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginContainer = () => {
  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log(data);
      console.log("se envio el formulario");
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("El texto no corresponde a un email")
        .required("Este es campo es obligatorio"),
      password: Yup.string()
        .required("Este es campo es obligatorio")
        .min(6, "la contraseña es muy corta")
        .max(15, "la contraseña es muy larga")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "La contraseña debe tener al menos una minuscula, una mayuscula, un numero y un simbolo",
        }),
    }),
    validateOnChange: false,
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Login
      showPassword={showPassword}
      navigate={navigate}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
      values={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default LoginContainer;
