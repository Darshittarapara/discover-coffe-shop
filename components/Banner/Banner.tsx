import { Strings } from "@/ContentText/Strings"
import Button from "../Button/Button";
import styles from './Banner.module.css';
import { BannerProps } from "@/Modal/Modal";
const Banner: React.FC<BannerProps> = ({
    buttonText,
    handlerOnClick
}) => {
    const splitBannerTitle = Strings.coffeeConnoisseur.split(" ");
    console.log(splitBannerTitle);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>{splitBannerTitle[0]}</span>
                <span className={styles.title2}>{splitBannerTitle[1]}</span>
            </h1>
            <p className={styles.subTitle}>{Strings.discoverYourLocalCoffeShop}</p>
            <div className={styles.buttonWrapper}>
                <Button className={styles.button} onClick={handlerOnClick}>
                    {buttonText}
                </Button>
            </div>
        </div>
    )
}

export default Banner