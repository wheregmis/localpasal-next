import BannerCarousel from "../BannerCarousel";
import FilterComponent from "../FilterComponent";
import Products from "../product/Products";

function HomepageBody() {
  return (
    <div className="text-gray-500 p-5 text-sm border-r overflow-y-scroll scrollbar-hide h-screen min-w-[250px]">
      <div className="space-y-4 mb-28">
        <FilterComponent />
        <hr className="border-t-[0.1px] border-gray-300 mt-4"></hr>
        <BannerCarousel />
        <hr className="border-t-[0.1px] border-gray-900 mt-4"></hr>
        <Products />
      </div>
    </div>
  );
}

export default HomepageBody;
