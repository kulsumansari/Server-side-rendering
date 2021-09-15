import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer'
import { getData } from '../utils/apiCalls';

export async function getServerSideProps(){
  let {ssrData} =await getData();
  return({
    props:{ ssrData}
  })   
}

const themeObject ={
  themeColors:{
    backgroundColor:'#343434',
    color:'#fff'
  },
}

export default function Home(props) {
  let {page, navData,partnersData,footerData} = props.ssrData;
  return (
    <div>
      <Head>
        <title>{page.title}</title>
        <link rel="icon" href={page.icon} />
      </Head>
      <NavBar data={navData} style={themeObject.themeColors}/>
      <div className='container'>
        <h1>{partnersData.title}</h1>

        <div className='main'>
          { 
            partnersData.partners.map((partner)=>{
              return(
              <div className='card' key={partner.partnerId} style={{backgroundImage:`url(${partner.backgroundImg})`}} >
                <h3>{partner.companyName}</h3>
                  <Link href={partner.href}>
                      <a className='btn'> Visit Page </a>
                  </Link>
              </div>)
            })
            
          }
        </div> 
      </div>
      <Footer data={footerData} style={themeObject.themeColors}/>


      <style jsx global>{`
        html,
        body {
          padding: 0px;
          margin: 0px;
          margin-top:6vh;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background:#f4f7ce;
        }
        .container{
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:space-around;
          margin:10vh auto;
          min-height:60vh;

        }
        .main{
          width:100%;
          display:flex;
          alignt-items:center;
          justify-content:center;
          flex-wrap:wrap;
        }
        .card{
          margin:10px;
          width:400px;
          height:280px;
          padding:30px 10px;
          box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
          font-size:1.8rem;
          text-align:center;
          border-radius:5px;
          background-size: cover;
        }
        .btn{
          font-size:1.4rem;
          text-decoration: none;
          color: #fff;
          background-color: #000000cc;
          padding: 5px 15px;
          border-radius: 8px;
      }
      .btn:hover{
          color:#000;
          background-color: unset;
          border:2px solid #000;
      }
        * {
          box-sizing: border-box;
        }

      `}</style>
    </div>
  )
}
