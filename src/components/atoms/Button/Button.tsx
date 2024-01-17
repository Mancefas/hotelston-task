import styles from './Button.module.css';

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
                secondary ? styles.buttonSecondary : styles.buttonMain
            }`}
        >
            {text}
        </button>
    );
};

export default Button;
