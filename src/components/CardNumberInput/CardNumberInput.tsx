import { useState } from 'react';
import CardInfoInput from '../CardInfoInput/CardInfoInput';
import Input from '../Input/Input';
import { NUMBER_REGEX, ONE_TO_FOUR_NUMBER_REGEX } from '../../constant/regex';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useCardStore } from '../../hook/useCardState';

const CardNumberInput = () => {
  const { get, setCardNumber } = useCardStore();
  const [error, setError] = useState('');
  const cardNumber = get().cardNumber;

  const addHyphensInCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cardNumber = e.target.value;
    if (NUMBER_REGEX.test(e.target.value)) {
      setError('0부터 9까지 숫자만 입력 가능합니다.');
      return;
    }
    const hyphenRemovedCardNumber = cardNumber.replaceAll('-', '');
    const cardNumberWithHyphens = (hyphenRemovedCardNumber.match(ONE_TO_FOUR_NUMBER_REGEX) || []).join('-');
    setCardNumber(cardNumberWithHyphens);
    setError('');
  };

  return (
    <section>
      <CardInfoInput title="카드 번호">
        <Input
          width="100%"
          onChange={addHyphensInCardNumber}
          maxLength={19}
          name="cardNumber"
          value={cardNumber}
          required
        />
      </CardInfoInput>
      <ErrorMessage>{error}</ErrorMessage>
    </section>
  );
};

export default CardNumberInput;
