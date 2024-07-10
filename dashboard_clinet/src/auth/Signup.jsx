import React, { useState } from 'react';
import axios from 'axios';

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errors = formErrors;

    switch (name) {
      case 'email':
        errors.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          ? ''
          : 'Email is invalid';
        break;
      case 'password':
        errors.password = value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/)
          ? ''
          : 'Password must contain at least 8 characters, UPPER/lowercase, number and special character';
        break;
      case 'passwordConfirm':
        errors.passwordConfirm = value === formData.password
          ? ''
          : 'Passwords do not match';
        break;
      default:
        break;
    }

    setFormErrors(errors);
    setFormValid(!Object.values(errors).some(error => error.length > 0));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValid) {
      try {
        const response = await axios.post('/api/signup', formData);
        console.log('Signup successful', response.data);
      } catch (error) {
        console.error('Signup error', error);
      }
    }
  };

  return (
    <div className="container-fluid pb-5">
      <div className="row justify-content-md-center">
        <div className="card-wrapper col-12 col-md-4 mt-5">
          <div className="brand text-center mb-3">
            <a href="/">
              <img src="public/img/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Create new account</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                    id="name"
                    name="name"
                    required
                    autoFocus
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-Mail Address</label>
                  <input
                    id="email"
                    type="email"
                    className={`form-control ${formErrors.email ? 'is-invalid' : formData.email && 'is-valid'}`}
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{formErrors.email}</div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      className={`form-control ${formErrors.password ? 'is-invalid' : formData.password && 'is-valid'}`}
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{formErrors.password}</div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="password-confirm">Confirm Password</label>
                    <input
                      id="password-confirm"
                      type="password"
                      className={`form-control ${formErrors.passwordConfirm ? 'is-invalid' : formData.passwordConfirm && 'is-valid'}`}
                      name="passwordConfirm"
                      required
                      value={formData.passwordConfirm}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{formErrors.passwordConfirm}</div>
                  </div>
                </div>

                <div className="form-group no-margin">
                  <button type="submit" className="btn btn-primary btn-block" disabled={!formValid}>
                    Sign Up
                  </button>
                </div>
                <div className="text-center mt-3 small">
                  Already have an account? <a href="/Login">Sign In</a>
                </div>
              </form>
            </div>
          </div>
          <footer className="footer mt-3">
            <div className="container-fluid">
              <div className="footer-content text-center small">
                <span className="text-muted">
                  &copy; 2019 Graindashboard. All Rights Reserved.
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
