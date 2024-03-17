import LoginForm from './LoginForm';
import LoginImage from './LoginImage';

import './Login.scss';

const Login = () => {
  return (
    <div className='login'>
      <div className='container'>
        <div className='wrapper'>
          <LoginImage />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
