import { useState, useRef, ChangeEvent } from 'react';
import CardInfoInput from '../CardInfoInput/CardInfoInput';
import Input from '../Input/Input';
import { NUMBER_REGEX } from '../../constant/regex';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useCardStore } from '../../hook/useCardState';

const CardPasswordInput = () => {
  const { get, setFirstDigit, setSecondDigit } = useCardStore();
  const firstDigit = get().firstDigit;
  const secondDigit = get().secondDigit;
  const secondDigitRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');

  const updateDigit = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const currentDigit = e.target.value;
    const isNotNumber = NUMBER_REGEX.test(currentDigit);

    setError(isNotNumber ? '0부터 9까지 숫자만 입력이 가능합니다.' : '');
    index === 1 ? setFirstDigit(isNotNumber ? '' : currentDigit) : setSecondDigit(isNotNumber ? '' : currentDigit);

    if (index === 1 && currentDigit.length === 1) {
      secondDigitRef.current?.focus();
    }
  };

  return (
    <section>
      <CardInfoInput title="카드 비밀번호">
        <Input
          type="password"
          width="15%"
          value={firstDigit}
          maxLength={1}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateDigit(1, e)}
          required
        />
        <Input
          type="password"
          width="15%"
          value={secondDigit}
          maxLength={1}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateDigit(2, e)}
          ref={secondDigitRef}
          required
        />
      </CardInfoInput>
      <ErrorMessage>{error}</ErrorMessage>
    </section>
  );
};

export default CardPasswordInput;
