import Filer from "@cloudcannon/filer";
import Head from "next/head";
import styles from '../../styles/blog.module.css';
import Link from "next/link";
import moment from 'moment';
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

const filer = new Filer({ path: 'content' });
export default function Post({page, language}){
    useEffect(() => {
        mixpanel.track("MarketingPage_Article", { title: page.data.title });
      }, [])

    
    return (
        <>
            <Head>
                <title>{page.data.seo.title || page.data.title}</title>
                <meta name="description" property="og:description" key="description" content={page.data.seo.page_description || page.data.description} />
                {
                    page.data.seo.page_keywords &&
                    <meta name="keywords" property="og:keywords" key="keywords" content={page.data.seo.page_keywords} />
                }
            </Head>
            <div className={styles['blog-content-container']}>
                <div className={styles['blog-content-center-container']}>
                    <h2 className={styles["blog-content-title"]}>
                        <Link href="/blog" className={styles["blog-back-btn"]} ><img src="/backIcon.svg" /></Link>
                        {page.data.title}
                    </h2>
                    <p className={styles["blog-content-description"]}>{page.data.description}</p>
                    <span className={styles["blog-content-date"]}>Posted on {moment(page.data?.date).format('MMM DD, YYYY')}</span>
                    <div className={styles["blog-featured-image"]}><img src={page.data.featuredImg.image} /></div>
                </div>
            </div>
            <div className={styles['blog-content-article-container']}>
                <div className={styles['blog-content-article-center-container']}>
                    <div className={styles["blog-content-editor-container"]} dangerouslySetInnerHTML={{__html:page.content_html}}></div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
	const slugs = (await filer.listItemSlugs('posts')).map((slug) => ({ params: { slug } }));
	const ignored = {
	};
	return {
		paths: slugs.filter(({ params }) => !ignored[params.slug]),
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const page = await filer.getItem(`${params.slug}.md`, { folder: 'posts' });

	return {
		props: {
			page: JSON.parse(JSON.stringify(page))
		}
	};
}