import { ToastContainer } from 'react-toastify';

import 'react-toastify/ReactToastify.css';

const ToasterProvider = () => {
  return <ToastContainer position='bottom-right' autoClose={3000} />;
};

export default ToasterProvider;
