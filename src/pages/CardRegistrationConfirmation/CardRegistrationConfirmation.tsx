import CardPreview from '../../components/CardPreview/CardPreview';
import { useCardInfoContext } from '../../context/CardInfoContext';
import styles from './CardRegistrationConfirmation.module.css';
import CardNicknameInput from '../../components/CardNickname/CardNicknameInput';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { CardInfo } from '../../types';

type CardRegistrationConfirmationProps = {
  registerNewCard: (cardInfo: CardInfo) => void;
};

const CardRegistrationConfirmation = ({ registerNewCard }: CardRegistrationConfirmationProps) => {
  const navigate = useNavigate();
  const { cardNumber, cardOwnerName, expirationDate, selectedCard, cardNickName } = useCardInfoContext();

  const handleCardInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cardInfo: CardInfo = {
      cardNumber: cardNumber,
      expirationDate: expirationDate,
      cardOwnerName: cardOwnerName,
      selectedCard: selectedCard,
      cardNickName: cardNickName,
    };

    registerNewCard(cardInfo);

    navigate('/');
  };

  return (
    <section className={styles.container}>
      <article className={styles.box}>
        <h2 className={styles.registrationLetter}>카드등록이 완료되었습니다.</h2>
        <CardPreview
          cardNumber={cardNumber}
          cardOwnerName={cardOwnerName}
          expirationDate={expirationDate}
          selectedCard={selectedCard}
        />
        <CardNicknameInput />
        <Button type="button" className={styles.confirmButton} onClick={handleCardInfo}>
          확인
        </Button>
      </article>
    </section>
  );
};

export default CardRegistrationConfirmation;
