import style from './Input.module.css';

type InputProps = {
    placeholder: string;
    type: string;
    value: string;
    changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, type, value, changeValue }: InputProps) => {
    return (
        <input
            className={style.input}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={changeValue}
        />
    );
};

export default Input;
