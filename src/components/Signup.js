import React from 'react';
import { Formik, Form } from 'formik';

import * as Yup from 'yup';
import TextField from './TextField';

function Signup() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <button className="btn btn-dark mt-3" type="submit">
              Register
            </button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Signup;
