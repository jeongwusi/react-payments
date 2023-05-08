import { FormEvent } from 'react';
import styles from './AddCardForm.module.css';
import CardNumberInput from '../CardNumberInput/CardNumberInput';
import ExpirationDateInput from '../ExpirationDateInput/ExpirationDateInput';
import CardOwnerName from '../CardOwnerName/CardOwnerName';
import CardSecurityCodeInput from '../CardSecurityCodeInput/CardSecurityCodeInput';
import CardPasswordInput from '../CardPasswordInput/CardPasswordInput';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { useCardStore } from '../../hook/useCardState';

const AddCardForm = () => {
  const navigate = useNavigate();
  const { get } = useCardStore();
  const { cardNumber, expirationDate, securityCode, firstDigit, secondDigit } = get();

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!cardNumber || !expirationDate || !securityCode || !firstDigit || !secondDigit) {
      return;
    }

    navigate('/card-registration-confirmation');
  };

  return (
    <form className={styles.container} aria-label="카드 등록 양식" onSubmit={handleFormSubmit}>
      <CardNumberInput />
      <ExpirationDateInput />
      <CardOwnerName />
      <CardSecurityCodeInput />
      <CardPasswordInput />
      <div className={styles.buttonContainer} role="group" aria-label="다음 단계 버튼">
        <Button type="submit" className={styles.button}>
          다음
        </Button>
      </div>
    </form>
  );
};

export default AddCardForm;
