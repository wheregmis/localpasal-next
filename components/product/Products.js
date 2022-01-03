import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import ProductCard from "../ProductCard";

function Products(props) {
  const [products, setProducts] = useState([]);
  const latestProductQuery = query(
    collection(db, "products"),
    orderBy("timestamp", "desc"),
    limit(5)
  );

  useEffect(
    () =>
      onSnapshot(latestProductQuery, (snapshot) => {
        setProducts(snapshot.docs);
      }),
    [db]
  );

  return (
    <div
      className="p-2 border-gray-200 border
    rounded-sm"
    >
      <div className="flex justify-between p-6">
        <h1>Latest Products</h1>
        <button>See All</button>
      </div>
      <div className="flex flex-wrap overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-thumb-black space-x-2">
        {products.map((product) => {
          return (
            <div key={product.id} className="flex bg-white ">
              <ProductCard
                key={product.id}
                id={product.id}
                productTitle={product.data().productTitle}
                productPrice={product.data().productPrice}
                productImage={product.data().image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
