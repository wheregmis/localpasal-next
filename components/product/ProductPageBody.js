import { useEffect, useState } from "react";
import SellerDisclosure from "../seller/SellerDisclosure";
import ImageGalary from "./ImageGalary";
import ProductDetailTab from "./ProductDetailTab";
import Products from "./Products";
import { product_details } from "helpers/product_helper";

function ProductPageBody({ productId }) {
  const { data, isLoading, isError } = product_details(productId);

  return (
    <div className="text-gray-500 p-5 text-sm border-r overflow-y-scroll scrollbar-hide h-screen w-screen">
      <div className="space-y-4 mb-28 max-h-screen max-w-full">
        <div className="flex items-start justify-between">
          <h1>Category: Unknown - SubCategory: Unknown</h1>
          <h1>Product Sold by Sabin Regmi</h1>
        </div>
        <hr className="border-t-[0.1px] border-gray-300 mt-4 mx-4"></hr>
        <div className="flex items-start justify-between">
          <h1 className="font-bold text-xl">{data?.productTitle}</h1>
          <h1 className="font-bold text-xl">NRP 200000</h1>
        </div>

        <div className="space-x-2 max-h-screen">
          <ImageGalary image={data?.productImage} />
          <div className="flex items-center justify-evenly p-7">
            <button className="font-bold text-lg btn">Enquiry</button>
            <button className="font-bold text-lg btn ">Place Order</button>
          </div>
          <div className="bg-white -mt-10 mb-8 items-center justify-center">
            <ProductDetailTab />
          </div>
          <div>
            <SellerDisclosure />
          </div>
          <div className="mb-20">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPageBody;
