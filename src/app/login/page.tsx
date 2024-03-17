import Link from 'next/link';

import Logo from '@/components/logo/Logo';

import './Login.scss';

const Login = () => {
  return (
    <div className='login'>
      <div className='container'>
        <div className='wrapper'>
          <div className='imgWrap'>Image</div>
          <div className='formWrap'>
            <Logo />
            <div className='headingWrap'>
              <h1>
                Hey there! <br /> Welcome back <span>Burger</span>
              </h1>
            </div>
            <form className='lognForm'>
              <div className='formGroup'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter your email address'
                />
              </div>
              <div className='formGroup'>
                <label htmlFor='pasword'>Password</label>
                <input
                  type='email'
                  name='password'
                  id='password'
                  placeholder='Password'
                />
              </div>
              <div className='rememberWrap'>
                <div className='remember'>
                  <input type='checkbox' name='rememberMe' id='rememberMe' />
                  <label htmlFor='rememberMe'>Remember for 30 days</label>
                </div>
                <Link href='#'>Forgot password</Link>
              </div>
              <div className='buttonWrap'>
                <button type='submit' className='loginBtn'>
                  Sign in
                </button>
                <button type='button' className='googleBtn'>
                  Continue with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
