import type { NextPage } from "next";
import Head from "next/head";
import ChatRoom from "../components/Chat/ChatRoom";
import DefaultLayout from "../layout/DefaultLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DefaultLayout>
        <ChatRoom />
      </DefaultLayout>
    </>
  );
};

export default Home;
