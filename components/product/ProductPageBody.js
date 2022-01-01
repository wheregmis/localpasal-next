import SellerDisclosure from "../seller/SellerDisclosure";
import ImageGalary from "./ImageGalary";
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";
import ProductDetailTab from "./ProductDetailTab";

// dynamic imports
const Products = dynamic(() => import("./Products"));

function ProductPageBody(props) {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
  return (
    <div className="text-gray-500 p-5 text-sm border-r overflow-y-scroll scrollbar-hide h-screen w-screen">
      <div className="space-y-4 mb-28 max-h-screen max-w-full">
        <div className="flex items-start justify-between">
          <h1>Category: Unknown - SubCategory: Unknown</h1>
          <h1>Product Sold by Sabin Regmi</h1>
        </div>
        <hr className="border-t-[0.1px] border-gray-300 mt-4 mx-4"></hr>
        <div className="flex items-start justify-between">
          <h1 className="font-bold text-xl">{props.product.productTitle}</h1>
          <h1 className="font-bold text-xl">NRP 200000</h1>
        </div>

        <div className="space-x-2 max-h-screen">
          <ImageGalary image={props.product.productImage} />
          <div className="flex items-center justify-evenly p-7">
            <button className="font-bold text-lg btn">Enquiry</button>
            <button className="font-bold text-lg btn ">Place Order</button>
          </div>
          <div className="bg-white -mt-10 mb-8 items-center justify-center">
            <ProductDetailTab />
          </div>
          <div ref={observe}>
            <SellerDisclosure />
          </div>
          <div className="mb-20">
            {/* comments will load when inView is true */}
            {inView && <Products />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPageBody;
