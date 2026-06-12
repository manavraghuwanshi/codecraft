import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import styles from "./signup.module.css";

export default function Signup() {

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),

    email: Yup.string().email("Invalid email").required("Email is required"),

    password: Yup.string()
      .min(6, "Minimum 6 characters long")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema,

    onSubmit: (values) => {
      console.log(values);
      
      navigate("/login");
    },
  });

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupCard}>
        <h2 className={styles.heading}>Sign Up</h2>

        <form onSubmit={formik.handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Enter Full Name"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.fullName && formik.errors.fullName && (
              <p className={styles.error}>{formik.errors.fullName}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.email && formik.errors.email && (
              <p className={styles.error}>{formik.errors.email}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.password && formik.errors.password && (
              <p className={styles.error}>{formik.errors.password}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className={styles.error}>{formik.errors.confirmPassword}</p>
              )}
          </div>

          <button type="submit" className={styles.signupButton}>
            Sign Up
          </button>
        </form>
        <div className={styles.footerText}>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
