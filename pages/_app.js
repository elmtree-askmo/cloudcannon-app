import '@/styles/globals.css'
import mixpanel from 'mixpanel-browser';
import { MIXPANEL_ID } from '../constant/app.constant';
import Header from '../component/header';
import Footer from '../component/footer';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { CloudCannonConnect } from '@cloudcannon/react-connector';
import Hotjar from '@hotjar/browser';
import { useEffect, useState } from 'react';

mixpanel.init(MIXPANEL_ID, { debug: false });
const siteId = process.env.NEXT_PUBLIC_HOTJARID;
const hotjarVersion = process.env.NEXT_PUBLIC_HOTJAR_VERSION;
if(process.env.NEXT_PUBLIC_HOTJAR_ENABLE === "true") Hotjar.init(siteId, hotjarVersion);

export default function App({ Component, pageProps }) {
  const router =useRouter();
  const pathname = router.pathname;
  const lightThemeArr = ['/institutions']
  const theme = ()=>{
    return lightThemeArr.includes(pathname)? 'b2b' : 'b2c';
  }
  const [language, setLanguage] = useState('en');
  const AppComponent = CloudCannonConnect(Component);
  const HeaderComponent = CloudCannonConnect(Header);
  const [utmParams, setUtmParams] = useState(null);

  useEffect(()=>{
    const lang = localStorage.getItem('language')
    if(lang){
      setLanguage(lang)
    }else{
      setLanguage('en');
    }
  },[])

  useEffect(()=>{
    if(!router.isReady) return;
    const { query } = router;
    console.log('query test', query)
    if (Object.keys(query).length > 0){
      setUtmParams(query)
    }
  },[router.isReady, router.query])

  const renderLayout = ()=>(
      <>
        <Head>
          <meta name="keywords" property="og:keywords" key="keywords" content="QuickTakes, QuickTakes AI, College AI Tool, College Study Tool, AI Learning Tool, AI in Education, AI Tutor, Study Tool, AI Help, Smart Learning, Study Assistant, Study Sidekick, AI-Enhanced Learning, AI Study Buddy, AI Notetaker, AI Study Guide, College Resources, University Resources, Lecture Notes, Note Taking Service, Interactive Learning, Lecture Transcription, Academic Performance, ADHD, Learning Disability " />
        </Head>
        {/* <!-- Google Tag Manager --> */}
        <Script>
          {
          `(function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TQ4CMXKH');`
          }
        </Script>
        {/* <!-- End Google Tag Manager --> */}
        <Script>
          {
          `document.addEventListener('DOMContentLoaded',function(){
            var noscript = document.createElement('noscript');
            var iframe = document.createElement('iframe');
            iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-TQ4CMXKH";
            iframe.height = 0;
            iframe.width = 0;
            iframe.style.display = "none";
            iframe.style.visibility = "hidden";
            noscript.appendChild(iframe);
            var startComment = document.createComment('Google Tag Manager (noscript)');
            var endComment = document.createComment('End Google Tag Manager (noscript)');
            var firstChild = document.body.firstChild;
            
            document.body.insertBefore(startComment, firstChild);
            document.body.insertBefore(noscript, firstChild); 
            document.body.insertBefore(endComment, firstChild);
          })`
          }
        </Script>
        <Script src="https://www.googleoptimize.com/optimize.js?id=OPT-KQRJT68"></Script>
        <div>
          <HeaderComponent pathname={pathname} theme={theme()} setLanguage={setLanguage} language={language}  utmParams={utmParams} />
          <AppComponent {...pageProps} setLanguage={setLanguage} language={language} utmParams={utmParams} />
          <Footer theme={theme()} language={language}  utmParams={utmParams} />
        </div>
      </>
    )

  

  return (
    <>{renderLayout()}</>
  )
}
