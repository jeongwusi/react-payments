import { PropsWithChildren } from 'react';
import styles from './CardInfoInput.module.css';

type CardInfoInputProps = {
  title: string;
  numberOfLetter?: number[];
};

const CardInfoInput = ({ title, numberOfLetter, children }: PropsWithChildren<CardInfoInputProps>) => {
  return (
    <div>
      <div className={styles.info}>
        <div>{title}</div>
        {numberOfLetter && (
          <div>
            {numberOfLetter[0]}/{numberOfLetter[1]}
          </div>
        )}
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default CardInfoInput;
