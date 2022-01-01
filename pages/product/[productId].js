import { doc, getDoc } from "firebase/firestore";
import Head from "next/head";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import ProductPageBody from "../../components/product/ProductPageBody";
import Sidebar from "../../components/Sidebar";
import { db } from "../../firebase";
import { useEffect, useState } from "react";

function ProductPage(props) {
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
        <ProductPageBody product={props} />
      </main>
      <Modal />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const { params } = context;

//   const productId = params.productId;

//   return {
//     props: {
//       productId: productId,
//     },
//   };
// }

export async function getStaticProps(content) {
  const productId = content.params.productId;
  const docRef = doc(db, "products", productId);
  const product = await getDoc(docRef);

  return {
    props: {
      productId: productId,
      productTitle: product.data().productTitle,
      productCategory: product.data().productCategory,
      productSubCategory: product.data().productSubCategory,
      productImage: product.data().image,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "PfatfPNVaEF4gPLELAMo" } }],
    fallback: true,
  };
}

export default ProductPage;
