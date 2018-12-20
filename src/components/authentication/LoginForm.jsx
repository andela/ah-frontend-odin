import React from 'react';
import PropTypes from 'prop-types';
import Form from 'forms';
import Input from 'forms/Input';
import SocialButtons from './SocialButtons';

const LoginForm = ({ successSubmit, handleAuthentication, showResetPassword }) => (
  <Form
    name="login-form"
    button={{ className: 'btn-primary btn-block', text: 'Login' }}
    action="/users/login/"
    beforeSubmit={data => ({ user: data })}
    successSubmit={successSubmit}
    slot={
      <div>
        <hr />
        <button type="button" onClick={showResetPassword} className="btn-link">
          Forgot Password?
        </button>
        <div className="text-center">
          <p>Or signup with</p>
          <div className="offset-5">
            <SocialButtons handleAuthentication={handleAuthentication} />
          </div>
        </div>
      </div>
    }
  >
    <Input name="email" type="email" label="Email" />
    <Input name="password" type="password" label="Password" />
  </Form>
);

LoginForm.propTypes = {
  successSubmit: PropTypes.func.isRequired,
  handleAuthentication: PropTypes.func.isRequired,
  showResetPassword: PropTypes.func.isRequired,
};

export default LoginForm;
