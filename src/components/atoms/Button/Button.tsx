import styles from './Button.module.scss';

type ButtonProps = {
    text: string;
    secondary?: boolean;
    clickHandler: () => void;
};

const Button = ({ text, secondary, clickHandler }: ButtonProps) => {
    return (
        <button
            onClick={clickHandler}
            className={`${styles.button} ${
                secondary ? styles['button--secondary'] : ''
            }`}
        >
            {text}
        </button>
    );
};

export default Button;
