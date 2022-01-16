import ProductCard from "../ProductCard";
import { latest_product, product_details } from "helpers/product_helper";

function Products() {
  const { data, isLoading, isError } = latest_product();

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
        {data &&
          data.map((product) => {
            console.log(product);
            return (
              <div key={product._id} className="flex bg-white ">
                {
                  <ProductCard
                    key={product._id}
                    id={product._id}
                    productTitle={product.productTitle}
                    productPrice={product.productPrice}
                    productImage={product.productImage}
                  />
                }
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Products;
