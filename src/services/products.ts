import { api } from "./api";

export interface CustomerProduct {
  id: string;
  name: string;
  full_name: string;
  image_url: string;
}

export async function getCustomerProducts(page = 1, perPage = 25) {
  const { data } = await api.get<{ customer_products: CustomerProduct[] }>(
    "/customer_products",
    {
      params: { page, per_page: perPage },
    }
  );
  return data.customer_products;
}
