import styles from './Button.module.scss';

type ButtonProps = {
    text: string;
    secondary?: boolean;
    clickHandler: () => void;
    disabled?: boolean;
};

const Button = ({ text, secondary, clickHandler, disabled }: ButtonProps) => {
    return (
        <button
            disabled={disabled}
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
