import Link from 'next/link';
import styles from'./Banner.module.scss';

function Banner(props){
    let {companyName, tagline,cta,bannerImage} = props.data;

    return(
        <div className={styles.banner}>
            <img src={bannerImage} alt='Banner Image' />

            <div className={styles.section} style={props.style}>
                <h1>{companyName}</h1>
                <h4>{tagline}</h4>
                <Link href={cta.href}>
                    <a className={styles.btn}>{cta.link}</a>
                </Link>
            </div>
        </div>
    )
}
export default Banner;