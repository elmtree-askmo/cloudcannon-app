import Head from "next/head"

export default function Test({content, title, description}){
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />  
            </Head>
            <div>{content}</div>
        </>
    )
}

export async function getStaticProps (){
    return {
        props:{
            content:"test page",
            title:"test page title",
            description:"test page description"
        }
    }
}