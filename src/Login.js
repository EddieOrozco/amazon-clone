import React from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from 'firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault(); // Stops the refresh
    // do the login logic
    auth.signInWithEmailAndPassword(email, password);
  };

  const register = (event) => {
    event.preventDefault(); // Stops the refresh
    // do the register logic
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login_logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>

      <div className='login_container'>
        <h1>SignIn</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} type='email' />
          <h5>Password</h5>
          <input value={password} type='password' />
          <button onClick={login} type='submit' className='login_signInButton'>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and out Interest-Based Ads
          Notice.'{' '}
        </p>
        <button onClick={register} className='login_registerButton'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
