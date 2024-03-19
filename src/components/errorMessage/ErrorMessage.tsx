import './ErrorMessage.scss';

const ErrorMessage = ({ message }: { message: string }) => {
  return <span className='errorMessage'>{message}</span>;
};

export default ErrorMessage;
