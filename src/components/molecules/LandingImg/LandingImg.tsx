import styles from './LandingImg.module.scss';

type LandingImgProps = {
    children: React.ReactNode;
};

const LandingImg = ({ children }: LandingImgProps) => {
    return (
        <>
            <div className={styles['landingImg__img-container']}>
                {children}
            </div>
            <div className={styles['landingImg__space-container']}></div>
        </>
    );
};

export default LandingImg;
