import AccountModal from '@/components/accountModal/AccountModal';
import ProductModal from '@/components/productModal/ProductModal';
import AddressModal from '@/components/addressModal/AddressModal';
import RecipientModal from '@/components/recipientModal/RecipientModal';

const ModalProvider = () => {
  return (
    <>
      <AccountModal />
      <ProductModal />
      <RecipientModal />
      <AddressModal />
    </>
  );
};

export default ModalProvider;
