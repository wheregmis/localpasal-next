import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
function ProductPage(props) {
  console.log(props.product);
  return (
    <div>
      <h1>{props.productId}</h1>
      <h1>{props.productTitle}</h1>
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
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "PfatfPNVaEF4gPLELAMo" } }],
    fallback: false,
  };
}

export default ProductPage;
