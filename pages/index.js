import Head from 'next/head'
import Link from 'next/link'

export async function getServerSideProps(){
  let response = await fetch("https://kulsumansari.github.io/webpage-data/companyData/data.json");
  let {surfBoardData,rawEngData ,contentStackData} = await response.json();
  // console.log(surfBoardData.bannerData)
  return({
    props:{
      surfboard:{
        companyName: surfBoardData.bannerData.companyName,
        homelink: surfBoardData.navData.navLinks.find((link)=>{
          return link.title==='Home'
        }),
        backgroundImg: surfBoardData.bannerData.bannerImage,
      },
      raweng:{
        companyName: rawEngData.bannerData.companyName,
        homelink: rawEngData.navData.navLinks.find((link)=>{
          return link.title==='Home'
        }),
        backgroundImg: rawEngData.bannerData.bannerImage,
      },
      contentstack:{
        companyName: contentStackData.bannerData.companyName,
        homelink: contentStackData.navData.navLinks.find((link)=>{
          return link.title==='Home'
        }),
        backgroundImg: contentStackData.bannerData.bannerImage,
      },
    }
  })
}

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Server side Rendering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container'>
        <h1>Our Partners</h1>

        <div className='main'>
          {
            Object.entries(props).map(([key,value])=>{
              return<div className='card' style={{backgroundImage:`url(${value.backgroundImg})`}} key={value.homelink.linkId}>
                <h3>{value.companyName}</h3>
                  <Link href={value.homelink.href}>
                      <a className='btn'> Visit Page </a>
                  </Link>
              </div>
              
            })
          }
        </div> 
      </div>
    

      <style jsx global>{`
        html,
        body {
          padding: 0px;
          margin: 0px;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background:#fff4e2;
        }
        .container{
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:space-around;
          margin-top:12vh;
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
