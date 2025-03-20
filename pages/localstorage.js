import Head from "next/head";

export default function LocalStorage({}) {
  return <>
    <Head>
      <script dangerouslySetInnerHTML={{__html: "window.addEventListener(`message`,function(event){const data = JSON.stringify(JSON.parse(event.data)); localStorage.setItem(`appData`, data);}, false);"}}/>
      <title>QuickTakes | AI Study Sidekick | College Learning Tools</title>
    </Head>
  </>;
}
