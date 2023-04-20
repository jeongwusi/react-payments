import { useState } from 'react';
import AddCardForm from '../components/AddCardForm/AddCardForm';
import ArrowHeader from '../components/ArrowHeader/ArrowHeader';
import CardPreview from '../components/CardPreview/CardPreview';
import type { CardInfo } from '../types';

type CardRegistrationProps = {
  registerNewCard: (cardInfo: CardInfo) => void;
};

const CardRegistration = ({ registerNewCard }: CardRegistrationProps) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardOwnerName, setCardOwnerName] = useState('');
  const [cardExpirationDate, setCardExpirationDate] = useState('');

  const updateCardNumber = (newCardNumber: string) => {
    setCardNumber(newCardNumber);
  };

  const updateCardOwnerName = (newCardOwnerName: string) => {
    setCardOwnerName(newCardOwnerName);
  };

  const updateCardExpirationDate = (newCardExpirationDate: string) => {
    setCardExpirationDate(newCardExpirationDate);
  };

  return (
    <>
      <ArrowHeader />
      <CardPreview cardNumber={cardNumber} cardOwnerName={cardOwnerName} cardExpirationDate={cardExpirationDate} />
      <AddCardForm
        updateCardNumber={updateCardNumber}
        updateExpirationDate={updateCardExpirationDate}
        updateCardOwnerName={updateCardOwnerName}
        registerNewCard={registerNewCard}
      />
    </>
  );
};

export default CardRegistration;
