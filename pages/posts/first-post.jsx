import React from "react";
import Link from "next/link";
import Image from "next/image";
import profileImage from "../../public/images/profile.jpeg";
import Head from "next/head";
import styles from "../../styles/firstPost.module.css"

import Layout from "../../components/Layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
       
      </Head>
      <div >

      <h1>First Post</h1>
      <div>

      <Image src={profileImage} alt="profile picture" />
      </div>
      <h2>
        <Link href="/">Back Home</Link>
      </h2>
      </div>
    </Layout>
  );
};

export default FirstPost;
