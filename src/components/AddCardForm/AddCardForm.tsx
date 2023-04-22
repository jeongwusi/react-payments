import styles from './AddCardForm.module.css';
import NextButton from '../NextButton/NextButton';
import CardNumberInput from '../CardNumberInput/CardNumberInput';
import ExpirationDateInput from '../ExpirationDateInput/ExpirationDateInput';
import CardOwnerName from '../CardOwnerName/CardOwnerName';
import CardSecurityCodeInput from '../CardSecurityCodeInput/CardSecurityCodeInput';
import CardPasswordInput from '../CardPasswordInput/CardPasswordInput';
import { useNavigate } from 'react-router-dom';
import type { CardInfo } from '../../types';

type AddCardFormProps = {
  updateCardNumber: (cardNumber: string) => void;
  updateExpirationDate: (expirationDate: string) => void;
  updateCardOwnerName: (cardOwnerName: string) => void;
  registerNewCard: (cardInfo: CardInfo) => void;
};

const AddCardForm = ({
  updateCardNumber,
  updateExpirationDate,
  updateCardOwnerName,
  registerNewCard,
}: AddCardFormProps) => {
  const navigate = useNavigate();

  const handleCardInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cardNumberInput = e.currentTarget.elements.namedItem('cardNumber');
    const expirationDateInput = e.currentTarget.elements.namedItem('expirationDate');
    const cardOwnerNameInput = e.currentTarget.elements.namedItem('cardOwnerName');

    if (
      !(
        cardNumberInput instanceof HTMLInputElement &&
        expirationDateInput instanceof HTMLInputElement &&
        cardOwnerNameInput instanceof HTMLInputElement
      )
    ) {
      alert('폼 전송에 실패했습니다.');
      return;
    }

    const cardInfo: CardInfo = {
      cardNumber: cardNumberInput.value,
      cardExpirationDate: expirationDateInput.value,
      cardOwnerName: cardOwnerNameInput.value,
    };

    registerNewCard(cardInfo);

    navigate('/');
  };

  return (
    <form onSubmit={handleCardInfo} className={styles.container}>
      <CardNumberInput updateCardNumber={updateCardNumber} />
      <ExpirationDateInput updateExpirationDate={updateExpirationDate} />
      <CardOwnerName updateCardOwnerName={updateCardOwnerName} />
      <CardSecurityCodeInput />
      <CardPasswordInput />
      <div className={styles.button}>
        <NextButton />
      </div>
    </form>
  );
};

export default AddCardForm;
