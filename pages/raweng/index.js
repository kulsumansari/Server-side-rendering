import Head from 'next/head'
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import { getData } from '../../utils/apiCalls';

export async function getServerSideProps(){
    let {rawEngData} = await getData();
    return({
      props:{ rawEngData }
    })
  
  }
  const themeObject ={
    themeColors:{
      backgroundColor:'#000',
      color:'#fff'
    },
    bannerContentAlign:{
      top:'45%',
      left:'50%',
    }
  }

export default function RawEng({rawEngData}) {
    let {page, navData , bannerData , footerData} = rawEngData;
    return (<>

     <Head>
          <title>{page.title}</title>
          <link rel='icon' href={page.icon} />
     </Head>
     <NavBar data={navData} style={themeObject.themeColors}/>
     <Banner data={bannerData } style={themeObject.bannerContentAlign} />
     <Footer data={footerData} style={themeObject.themeColors}/>

     <style jsx global>{`
        html,
        body {
          padding: 0px;
          margin: 0px;
          margin-top: 6vh;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
    )
}