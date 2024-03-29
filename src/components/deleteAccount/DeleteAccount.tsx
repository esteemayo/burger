import './DeleteAccount.scss';

const DeleteAccount = () => {
  return (
    <div className='deleteAccount'>
      <p
        className='deleteAccountText'
        style={{ fontSize: '1.3rem', color: '#00000059' }}
      >
        Deleting your account will remove all of your information from our
        database. This cannot be undone.
      </p>
    </div>
  );
};

export default DeleteAccount;
