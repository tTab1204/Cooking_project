import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { loginUser } from '_actions/user_actions';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Icon, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';

function LoginPage(props) {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem('rememberMe') ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [rememberMe] = useState(rememberMeChecked);

  const initialEmail = localStorage.getItem('rememberMe')
    ? localStorage.getItem('rememberMe')
    : '';

  return (
    <Formik
      initialValues={{
        email: initialEmail,
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password,
          };

          dispatch(loginUser(dataToSubmit))
            .then(response => {
              if (response.payload.loginSuccess) {
                props.history.push('/');
              } else {
                setFormErrorMessage('Check out your Account or Password again');
              }
            })
            .catch(err => {
              setFormErrorMessage('Check out your Account or Password again');
              setTimeout(() => {
                setFormErrorMessage('');
              }, 3000);
            });
          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          //  dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          //   handleReset,
        } = props;
        return (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <form
                onSubmit={handleSubmit}
                style={{ width: '350px', marginTop: '100px' }}
              >
                <Form.Item required label="Email">
                  <Input
                    id="email"
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="Enter your email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                </Form.Item>

                <Form.Item required label="Password">
                  <Input
                    id="password"
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="Enter your password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.password && touched.password
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}
                </Form.Item>

                {formErrorMessage && (
                  <label>
                    <p
                      style={{
                        color: '#ff0000bf',
                        fontSize: '0.7rem',
                        border: '1px solid',
                        padding: '1rem',
                        borderRadius: '10px',
                      }}
                    >
                      {formErrorMessage}
                    </p>
                  </label>
                )}

                <Form.Item>
                  {/* <Checkbox
                  id="rememberMe"
                  onChange={handleRememberMe}
                  checked={rememberMe}
                >
                  Remember me
                </Checkbox> */}
                  <div>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      style={{ minWidth: '100%' }}
                      disabled={isSubmitting}
                      onSubmit={handleSubmit}
                    >
                      Log in
                    </Button>
                  </div>
                  <div>
                    <Link className="login-form-forgot">Forgot password?</Link>
                  </div>
                  Or <Link to="/register">Register Now!</Link>
                </Form.Item>
              </form>
            </div>
          </>
        );
      }}
    </Formik>
  );
}

export default withRouter(LoginPage);
