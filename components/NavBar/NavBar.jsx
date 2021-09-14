import Link from 'next/link'
import styles from './NavBar.module.scss';
import Logo from '../Logo/Logo';

function NavBar(props){
    let {logo, navLinks} = props.data;
    return(
         <div className={styles.navigation} style={props.style}>

             <div className={styles.companyLogo}>
                <Logo data={logo} />
             </div>                             
            {/* <div className={styles.hamburgerMenu}>
                <i className='fa fa-bars'></i>
            </div> */}
            
            <ul className={styles.navContainer}> 
                {
                    navLinks.map((link)=>{
                        return <li key={link.linkId} className={styles.navItem}>
                            { 
                                <Link href={link.href}>
                                    <a className={styles.navLink+ (link.isCta? ` ${styles.btn}`:'') }
                                     style={{color:props.style.color}}>
                                        {link.title}
                                    </a>
                                </Link>
                            }
                        </li>
                    })
                }
        </ul>
      </div>
    )
}
export default NavBar;