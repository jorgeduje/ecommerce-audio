import Checkout from "./Checkout"
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutContainer = () => {
    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
          name: "",  
          email: "",
          phone: "",
          address: "",
          zipCode: "",
          city: "",
          country: "",
        },
        onSubmit: (data) => {
          const userData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            zipCode: data.zipCode,
            city: data.city,
            country: data.country,
          };
          console.log(userData);
        },
        validationSchema: Yup.object().shape({
          name:   Yup.string().required("Este es campo es obligatorio"),
          email: Yup.string()
            .email("El texto no corresponde a un email")
            .required("Este es campo es obligatorio"),
          phone: Yup.number().required("Este es campo es obligatorio"),
          address: Yup.string().required("Este es campo es obligatorio"),
          zipCode: Yup.string().required("Este es campo es obligatorio"),
          city: Yup.string().required("Este es campo es obligatorio"),
          country: Yup.string().required("Este es campo es obligatorio"),
            
        }),
        validateOnChange: false,
      });
    
      const navigate = useNavigate();
    
      return (
        <Checkout
          navigate={navigate}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      );
}

export default CheckoutContainer