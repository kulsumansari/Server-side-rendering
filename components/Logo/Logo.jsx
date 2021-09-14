import styles from './Logo.module.scss';

export default function Logo(props){
    let {imgSrc , alt} = props.data
    return(
        // <div  className={styles.logoContainer}>
            <img src={imgSrc} alt={alt} className={styles.logo} />
    
    )
}