import Head from "next/head";
import Header from "@components/Header";
import Modal from "@components/Modal";
import ProductPageBody from "@components/product/ProductPageBody";
import Sidebar from "@components/Sidebar";
import { latest_product, product_details } from "helpers/product_helper";
import { LOCALPASAL_BACKEND_BASE_URL } from "helpers/backend_helper";
import axios from "axios";

export function ProductPage({ productId, product }) {
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
        <ProductPageBody product={product} />
      </main>
      <Modal />
    </div>
  );
}

export async function getStaticProps(context) {
  const productId = context.params.productId;
  const product = await axios.get(
    `${LOCALPASAL_BACKEND_BASE_URL}/product/${productId}`
  );
  return {
    props: {
      productId: productId,
      product: JSON.stringify(product.data),
    },
    revalidate: 1000,
  };
}

export async function getStaticPaths() {
  const products = await axios.get(`${LOCALPASAL_BACKEND_BASE_URL}/product/`);
  const paths = products.data.map((product) => ({
    params: { productId: product._id },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}

export default ProductPage;
