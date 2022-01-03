import BannerCarousel from "../BannerCarousel";
import FilterComponent from "../FilterComponent";
import Products from "../product/Products";
import useSWR from "swr";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";

function HomepageBody() {
  const fetcher = async () => {
    const response = await axios.get(
      "https://localpasal.herokuapp.com/category/"
    );
    return response.data;
  };
  const { data, error } = useSWR("category", fetcher, {
    refreshInterval: 100000,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    <div className="text-gray-500 text-sm border-r overflow-y-scroll scrollbar-hide h-screen min-w-[250px]">
      <div className="space-y-1 mb-28">
        {data && <FilterComponent categories={data} />}
        <hr className="border-t-[0.1px] border-gray-300 mt-4"></hr>
        <BannerCarousel />
        <hr className="border-t-[0.1px] border-gray-900 mt-4"></hr>
        <div>
          <Products />
        </div>
      </div>
    </div>
  );
}

export default HomepageBody;
