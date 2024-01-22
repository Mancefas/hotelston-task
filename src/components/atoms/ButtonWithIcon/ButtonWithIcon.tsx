import styles from './ButtonWithIcon.module.scss';

type ButtonWithIconProps = {
    a11y?: string;
    testid?: string;
    icon: React.ReactNode;
    onClick: () => void;
};

const ButtonWithIcon = ({
    a11y,
    testid,
    icon,
    onClick,
}: ButtonWithIconProps) => {
    return (
        <button
            data-testid={testid}
            aria-label={a11y}
            onClick={onClick}
            className={styles['button-with-icon']}
        >
            {icon}
        </button>
    );
};

export default ButtonWithIcon;
