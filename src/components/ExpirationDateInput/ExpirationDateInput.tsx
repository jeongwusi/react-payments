import { useState } from 'react';
import CardInfoInput from '../CardInfoInput/CardInfoInput';
import Input from '../Input/Input';
import { NUMBER_REGEX, ONE_TO_TWO_NUMBER_REGEX, VALID_EXPIRATION_MONTH_REGEX } from '../../constant/regex';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useCardStore } from '../../hook/useCardState';

const ExpirationDateInput = () => {
  const { get, setExpirationDate } = useCardStore();
  const expirationDate = get().expirationDate;
  const [error, setError] = useState('');

  const addSlashInExpirationDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const expirationDate = e.target.value;
    const slashRemovedExpirationDate = expirationDate.replaceAll('/', '');
    const month = slashRemovedExpirationDate.substring(0, 2);

    if (NUMBER_REGEX.test(slashRemovedExpirationDate)) {
      setError('0부터 9까지 숫자만 입력이 가능합니다.');
      return;
    }

    if (!VALID_EXPIRATION_MONTH_REGEX.test(month)) {
      setError('올바른 월을 입력해주세요.');
      return;
    }
    const expirationDateWithSlash = (slashRemovedExpirationDate.match(ONE_TO_TWO_NUMBER_REGEX) || []).join('/');
    setExpirationDate(expirationDateWithSlash);
    setError('');
  };

  return (
    <section>
      <CardInfoInput title="만료일">
        <Input
          width="40%"
          onChange={addSlashInExpirationDate}
          value={expirationDate}
          maxLength={5}
          name="expirationDate"
          required
        />
      </CardInfoInput>
      <ErrorMessage>{error}</ErrorMessage>
    </section>
  );
};

export default ExpirationDateInput;
