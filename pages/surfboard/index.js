import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

export async function getServerSideProps(){
    let response = await fetch("https://kulsumansari.github.io/webpage-data/companyData/data.json");
    let {surfBoardData} = await response.json();
    return({
        props:{ surfBoardData }
    })
  }

const themeObject ={
  themeColors:{
    color:'#000',
  },
  bannerContentAlign:{
    display:'flex',
    alignItems:'flex-start',
    top:'60%',
    left:'60%',
  }
}

export default function SurfBoard({surfBoardData}) {
    let {page, navData,bannerData,footerData} = surfBoardData
    return (<>
        <Head>
          <title>{page.title}</title>
          <link rel='icon' href={page.icon} />
        </Head>
            <NavBar data={navData} style={themeObject.themeColors}/>
            <Banner data={bannerData} style={themeObject.bannerContentAlign}/>
            <Footer data={footerData}/>

        <style jsx global>{`
        html,
        body {
          padding: 0px;
          margin: 0px;
          
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