import useSWR from "swr";
import axios from "axios";
import { LOCALPASAL_BACKEND_BASE_URL } from "helpers/backend_helper";
import { useSession } from "next-auth/react";

export function latest_product() {
  const productFetcher = async () => {
    const response = await axios.get(`${LOCALPASAL_BACKEND_BASE_URL}/product/`);
    return response.data;
  };

  const { data, error } = useSWR("product", productFetcher, {
    refreshInterval: 0,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function product_details(productId) {
  const { data: session } = useSession();
  const productFetcher = async () => {
    const response = await axios.get(
      `${LOCALPASAL_BACKEND_BASE_URL}/product/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  };

  const { data, error } = useSWR(
    `product-detail-${productId}`,
    productFetcher,
    {
      refreshInterval: 0,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
