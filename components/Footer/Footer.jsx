import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"

import styles from './Footer.module.scss'
import Logo from '../Logo/Logo'

function Footer(props){
    let {footerLogo,footerLinkHead , footerLinks}= props.data;
        return(
        <footer className={styles.footer} style={props.style}>
            <div className={styles.companyLogo}>
                <Logo data={footerLogo} />
            </div>
            <div>
                <p className={styles.footerLinkHead}>{footerLinkHead}</p>
                <div className={styles.footerLink}>
                    {footerLinks.map((link)=>{
                        return (
                        <a
                            key={link.linkId}
                            href={link.href}
                            style={{color:props.style.color}}
                            >
                            {link.linkTitle}
                        </a>)
                    })}
                </div>
            </div>
            <div>
                <p className={styles.footerLinkHead}>Follow Us On</p>
                <div className={styles.socialMediaLink}>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
            </div>
            
            {/* <div >
                <p className={styles.footerLinkHead}>{footerLinkHead} </p>
                {footerLinks.map((link)=>{
                    return <FontAwesomeIcon icon={faInstagram} style={{color:'black'}} key={link.linkId}/>
                })}
            </div> */}
        </footer>
    )
}

export default Footer;
