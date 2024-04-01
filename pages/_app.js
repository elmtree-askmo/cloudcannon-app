import '@/styles/globals.css'
import mixpanel from 'mixpanel-browser';
import { useEffect, useRef } from 'react'
import { MIXPANEL_ID, SITEMAP } from '../constant/app.constant';
import Header from '../component/header';
import Footer from '../component/footer';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { CloudCannonConnect } from '@cloudcannon/react-connector';

mixpanel.init(MIXPANEL_ID, { debug: false });

export default function App({ Component, pageProps }) {
  const router =useRouter();
  const pathname = router.pathname;
  const isTeacher = ()=>{
    if(pathname.indexOf('teachers') > -1 ){
      return true;
    }else{
      return false;
    }
  }
  const AppComponent = CloudCannonConnect(Component);
  const HeaderComponent = CloudCannonConnect(Header);

  const renderLayout = ()=>(
      <>
        <Head>
          <meta name="keywords" content="QuickTakes, college students, class lectures, recording lectures. AI-generated, Study Guide, Transcript, glossary, practice problems, recommended videos, AI-chatbot, better note taking, studying, university student, professors lectures, college courses, study material, ai assistant, lecture notes, class notes" />
          <meta property="og:description" content="QuickTakes is a AI knowledge app for college students to understand their university lectures better. Record lectures and artificial intelligence auto-generates a Study Guide, Transcript, glossary and practice problems." />
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
        <HeaderComponent role={isTeacher()?"Teacher":"Student"} pageStr={SITEMAP[pathname]} pathname={pathname} />
        <AppComponent {...pageProps} layoutType={isTeacher()?"teachers":"students"} role={isTeacher()?"Teacher":"Student"} pageStr={SITEMAP[pathname]} />
        {/* <Footer /> */}
      </>
    )

  return (
    <>{renderLayout()}</>
  )
}
