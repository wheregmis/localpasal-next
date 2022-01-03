import Head from "next/head";
import Header from "@components/Header";
import HomepageBody from "@components/homepage/HomepageBody";
import Modal from "@components/Modal";
import Sidebar from "@components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <Head>
        <title>Local Pasal</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        {/* Page Specific Code */}
        <HomepageBody />
      </main>
      <Modal />
    </div>
  );
}
