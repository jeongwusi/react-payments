import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { CardInfoContextType } from '../types';

export const CardInfoContext = createContext<CardInfoContextType | undefined>(undefined);

export const useCardInfoContext = () => {
  const context = useContext(CardInfoContext);
  if (!context) {
    throw new Error('useCardInfoContext는 CardInfoProvider 안에서 사용해야 합니다.');
  }
  return context;
};

export const CardInfoProvider = ({ children }: PropsWithChildren) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cardOwnerName, setCardOwnerName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [firstDigit, setFirstDigit] = useState('');
  const [secondDigit, setSecondDigit] = useState('');
  const [selectedCard, setSelectedCard] = useState('');
  const [cardNickName, setCardNickName] = useState('');

  const contextValue = {
    cardNumber,
    setCardNumber,
    expirationDate,
    setExpirationDate,
    cardOwnerName,
    setCardOwnerName,
    securityCode,
    setSecurityCode,
    firstDigit,
    setFirstDigit,
    secondDigit,
    setSecondDigit,
    selectedCard,
    setSelectedCard,
    cardNickName,
    setCardNickName,
  };

  return <CardInfoContext.Provider value={contextValue}>{children}</CardInfoContext.Provider>;
};
