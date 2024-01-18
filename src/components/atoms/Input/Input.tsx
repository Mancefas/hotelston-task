import style from './Input.module.scss';

type InputProps = {
    placeholder: string;
    type: string;
    value: string;
    changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
};

const Input = ({
    placeholder,
    type,
    value,
    changeValue,
    error,
}: InputProps) => {
    return (
        <input
            className={`${style.input} ${error && style['input--error']}`}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={changeValue}
        />
    );
};

export default Input;
