import Head from 'next/head'
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

export async function getServerSideProps(){
    let response = await fetch("https://kulsumansari.github.io/webpage-data/companyData/data.json");
    let {contentStackData} = await response.json();
    return({
      props:{contentStackData}
    })
  }

const themeObject ={
  themeColors:{
    backgroundColor:'#5a20b9',
    color:'#fff'
  },
  bannerContentAlign:{
    color:'#fff',
    display:'flex',
    alignItems:'flex-start',
    top:'40%',
    left:'30%',
  }
}

export default function ContentStack({contentStackData}) {
    let {page, navData , bannerData , footerData} = contentStackData;

    return (<>
     <Head>
        <title>{page.title}</title>
        <link rel='icon' href={page.icon} />
     </Head>
     <NavBar data={navData} style={themeObject.themeColors}/>
     <Banner data={bannerData} style={themeObject.bannerContentAlign}/> 
     <Footer data={footerData} style={themeObject.themeColors}/>
     
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