// import { useRouter } from 'next/router';
import Head from "next/head";

export default function Custom404({statusCode, originalUrl}) {
  // const router = useRouter();
  // const { pathname } = router; // it doesn't work on CloudCannon

  return <>
    <Head>
      <meta name="robots" content={`noindex`} />
      <meta name="googlebot" content={`noindex`} />
      <script dangerouslySetInnerHTML={{__html: "if(window && window.location && window.location.href.indexOf(`/questions/undefined/learn/`)!==-1) window.onload = function(){ window.location.replace(`${window.location.href.split(`/learn/`)[0]}/learn/${window.location.href.split(`/questions/undefined/learn/`)[1].replace(/\\/$/, ``)}`) }"}}/>
      <title>QuickTakes | AI Study Sidekick | College Learning Tools</title>
    </Head>
    <div style={{"background": "#000", "color": "#fff"}}>
      <div style={{"fontFamily": "systemUi, Segoe UI, Roboto, Helvetica, Arial, sansSerif, Apple Color Emoji, Segoe UI Emoji", "height": "100vh", "textAlign": "center", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center"}}>
        <div style={{"lineHeight": "48px", "display": "flex"}}>
          <div>
            <h1 style={{"borderRight": "1px solid rgba(255,255,255,.3)", "display": "inlineBlock", "margin": "0px 20px 0px 0px", "paddingRight": "23px", "fontSize": "24px", "fontWeight": "500", "verticalAlign": "top"}}>
              404
            </h1>
          </div>
          <div style={{"display": "inlineBlock"}}>
          <h2 style={{"fontSize": "14px", "fontWeight": "400", "lineHeight": "28px"}}>
            This page could not be found.
          </h2>
          </div>
        </div>
      </div>
    </div>
  </>;
}
