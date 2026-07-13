import * as Yup from 'yup';
import { useFormik } from "formik";
import users from "../data/users";
import styles from "./login.module.css";
import { useNavigate } from 'react-router-dom';

function LoginForm({onLoginSuccess}) {
    const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: validationSchema,

    onSubmit: (values) => {

      const loggedInUser = users.find((user) => {
        return (
          user.email === values.email &&
          user.password === values.password
        );
      });

      console.log(loggedInUser);

      if (loggedInUser) {
        onLoginSuccess();
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }

    }
  });


  // const [email,setEmail] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <h2 className={styles.title}>Login Form</h2>

      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </label>

      {formik.touched.email && formik.errors.email && (
        <p className={styles.error}>{formik.errors.email}</p>
      )}
      <br />  

      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </label>

      {formik.touched.password && formik.errors.password && (
        <p className={styles.error}>{formik.errors.password}</p>
      )}
      <br />  

      <button className={styles.button} type="submit">
        Login
      </button>
    </form>
  );
}
export default LoginForm;