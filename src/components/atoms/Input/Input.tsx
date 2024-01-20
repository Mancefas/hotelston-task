import style from './Input.module.scss';

type InputProps = {
    placeholder: string;
    type: string;
    value: string;
    changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    keydownHandler?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input = ({
    placeholder,
    type,
    value,
    changeValue,
    error,
    keydownHandler,
}: InputProps) => {
    return (
        <input
            className={`${style.input} ${error ? style['input--error'] : ''}`}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={changeValue}
            onKeyDown={keydownHandler}
        />
    );
};

export default Input;
