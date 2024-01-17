import style from './Input.module.css';

type InputProps = {
    placeholder: string;
    type: string;
};

const Input = ({ placeholder, type }: InputProps) => {
    return (
        <input className={style.input} placeholder={placeholder} type={type} />
    );
};

export default Input;
