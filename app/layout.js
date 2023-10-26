import GlobalLayout from './layout/global-layout'

import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Quicktakes',
  description: 'QuickTakes is a AI knowledge app for college students to understand their university lectures better. Record lectures and artificial intelligence auto-generates a Study Guide, Transcript, glossary and practice problems.',
  keywords: ["QuickTakes", "college students", "class lectures", "recording lectures", "AI-generated", "Study Guide", "Transcript", "glossary", "practice problems", "recommended videos", "AI-chatbot", "better note taking", "studying", "university student", "professors lectures", "college courses", "study material", "ai assistant", "lecture notes", "class notes"]
}


export default function RootLayout({ children }) {
  return (
    <>
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
      <html lang="en">
        <body >
          <GlobalLayout children={children} />
        </body>
      </html>
    </>
  )
}
