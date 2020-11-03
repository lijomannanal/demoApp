import React, { useState } from 'react';
import { AuthenticationService } from '../services/AuthService';
import './Login.css';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    AuthenticationService.login({ email: email.value, password: password.value })
    .then(response => {
      setLoading(false);
      props.history.push('/');
    }).catch(error => {
      setLoading(false);
      setError(error || "Something went wrong. Please try again later.");
    });
  }

  return (
    <div className="login-form">
      <div className="form-input">
        Email<br />
        <input type="text" {...email}/>
      </div>
      <div className="form-input">
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <React.Fragment><span className="error-span">{error}</span><br /></React.Fragment>}<br />
      <div className="input-button">
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
      </div>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;