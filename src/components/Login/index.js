import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './index.scss'
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const initialValues = {
      email: '',
      password: '',
    };
  
    const onSubmit = (values) => {
    //   console.log(values);
    alert("hii")
    };
  
    const validateForm = (values) => {
      const errors = {};
  
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
      .test(values.email)) {
        errors.email = 'Invalid email address';
      }
  
      if (!values.password) {
        errors.password = 'Password is required';
      }
  
      return errors;
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    return (
        <div className="container">
        <div className="center-container">
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={onSubmit}
      >
        <Form>
        <div className="card">
      <div className="card-body">
      <h2 className="form-title">Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
  
          <div className="form-group">
            <label htmlFor="password">Password</label>
            {/* <Field type="password" id="password" name="password" className="form-control"/> */}
            <Field
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="form-control"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="password-toggle"
              onClick={togglePasswordVisibility}
            />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
  
          <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          </div>
        </Form>
      </Formik>
      </div>
          </div>
    );
  };
  export default Login;
  