import type { FadeInProps } from "./FadeIn.types";
import styles from './FadeIn.module.scss';

export const FadeIn = ({children}: FadeInProps) => {
    return <div className={styles.fadeIn}>{children}</div>
}