import AccountModal from '@/components/accountModal/AccountModal';
import StatusModal from '@/components/statusModal/StatusModal';
import ProductModal from '@/components/productModal/ProductModal';
import RecipientModal from '@/components/recipientModal/RecipientModal';
import AddressModal from '@/components/addressModal/AddressModal';

const ModalProvider = () => {
  return (
    <>
      <AccountModal />
      <ProductModal />
      <RecipientModal />
      <AddressModal />
      <StatusModal />
    </>
  );
};

export default ModalProvider;
