import RegisterForm from './RegisterForm';
import RegisterImage from './RegisterImage';

import './Register.scss';

const Register = () => {
  return (
    <div className='register'>
      <div className='container'>
        <div className='wrapper'>
          <RegisterImage />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
