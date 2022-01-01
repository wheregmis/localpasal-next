import { Carousel } from "react-responsive-carousel";
import BannerCarousel from "../BannerCarousel";
import ImageGalary from "./ImageGalary";
import ProductDetail from "./ProductDetail";

function ProductPageBody(props) {
  //   const product = JSON.parse(props.product);
  return (
    <div className="text-gray-500 p-5 text-sm border-r overflow-y-scroll scrollbar-hide h-screen w-screen">
      <div className="space-y-4 mb-28 max-h-screen max-w-full">
        <div className="flex items-start justify-between">
          <h1>{props.product.productTitle}</h1>
          <h1>Product Sold by Sabin Regmi</h1>
        </div>
        <hr className="border-t-[0.1px] border-gray-300 mt-4 mx-4"></hr>
        <div className="grid grid-col-1 lg:grid-cols-2 space-x-2">
          <ImageGalary image={props.product.productImage} />
          <div className="bg-white my-14 items-center justify-center">
            <ProductDetail
              title="Product Name"
              value={props.product.productTitle}
            />
            <ProductDetail
              title="Product kdsjfdskjl"
              value={props.product.productTitle}
            />
            <ProductDetail
              title="Product kfjsdkjdsfkj"
              value={props.product.productTitle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPageBody;
