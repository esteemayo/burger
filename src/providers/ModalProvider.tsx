import AccountModal from '@/components/accountModal/AccountModal';
import RecipientModal from '@/components/recipientModal/RecipientModal';
import ProductModal from '@/components/productModal/ProductModal';

const ModalProvider = () => {
  return (
    <>
      <AccountModal />
      <ProductModal />
      <RecipientModal />
    </>
  );
};

export default ModalProvider;
