import { api } from "./api";

export async function getRedeemPage(id: string) {
  const { data } = await api.get(`/redeem_pages/${id}`);
  return data;
}

export async function createRedeem(pageId: string, payload: any) {
  const { data } = await api.post(`/redeem_pages/${pageId}/redeem`, payload);
  return data;
}

export async function getRedeemPages() {
  const { data } = await api.get("/redeem_pages");
  return data;
}
