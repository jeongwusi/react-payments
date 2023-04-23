import styles from './NextButton.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit';
  children: string;
}

const NextButton = ({ type, children, ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} type={type} {...rest}>
      {children}
    </button>
  );
};

export default NextButton;
