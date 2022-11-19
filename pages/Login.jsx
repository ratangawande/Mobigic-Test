import { useState } from "react";
import "../components/login.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { YupLogin } from "../schemas/loginYup";


export default function Login() {

  return (
    <div>
      <LoginTable />
    </div>
  );
}
const initialValues = {

  email: "",
  password: "",

}

function LoginTable() {

  const navigate =useNavigate();


  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
  useFormik({

    initialValues: initialValues,
    validationSchema: YupLogin,
    onSubmit: (value) => {
      // workUser(value)
      sessionStorage.setItem("uname",values.email);
      sessionStorage.setItem("userid",values.email);
      sessionStorage.setItem("password",values.password);
      console.log(values);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Welcome "+sessionStorage.getItem("uname"),
        showConfirmButton: false,
        timer: 1500,
    });
navigate("/myinfo")
    }


  });
  
  return (
    <div>
      
      <div className="center">
        <h5 className="p-3 text-center bg-info rounded-top bg-gradient text-white">Login</h5>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
         
            />
            <label>Email Id
            {errors.email && touched.email ? (<span className="errors">{errors.email}
              </span>) : null}
            </label>
          </div>
          <div className="txt_field">
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
           
            />
            
            <label>Password
            {errors.password && touched.password ? (<span className="errors">{errors.password}
              </span>) : null}
            </label>
          </div>
          <br/>
          <input
            type="submit"
            value="Login"
          />          
        </form>
      </div>
    </div>
  );
}

