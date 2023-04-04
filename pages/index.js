import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import {getSortedPostsData} from "../Lib/posts"



export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    }
  }
}


export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <p><Link href="/posts/first-post" className={utilStyles.links}>First Post</Link></p>
      <section className={utilStyles.headingMd}>
        <p>Hello, I am Fortune, A full stack software developer based off Lagos.
           I am currently working for Uniflow as a front end developer. You can reach me on <a href="https://www.linkedin.com/in/fortunatus-ihedoro/" target="blank" className={utilStyles.links}>linkedin</a></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn" className={utilStyles.links}>our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}