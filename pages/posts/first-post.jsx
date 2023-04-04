import React from "react";
import Link from "next/link";
import Image from "next/image";
import profileImage from "../../public/images/profile.jpeg";
import Head from "next/head";
import styles from "../../styles/firstPost.module.css"
import Script from "next/script";

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
        <Script src="https://connect.facebook.net/en_US/sdk.js" 
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
        />
      </Head>
      <div className={styles.container}>

      <h1>First Post</h1>
      <div>

      <Image src={profileImage} alt="profile picture" />
      </div>
      <h2>
        <Link href="/">Back Home</Link>
      </h2>
      </div>
    </>
  );
};

export default FirstPost;
