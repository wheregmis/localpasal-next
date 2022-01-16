import useSWR from "swr";
import axios from "axios";
import { LOCALPASAL_BACKEND_BASE_URL } from "helpers/backend_helper";

export function all_category(){
    const productFetcher = async () => {
        const response = await axios.get(
          `${LOCALPASAL_BACKEND_BASE_URL}/category/`
        );
        return response.data;
      };
    
      const {data, error} = useSWR("category", productFetcher, {
        refreshInterval: 0,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      });
  
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    }
  }