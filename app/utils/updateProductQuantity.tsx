import { QRDATA } from "..";

export type UpdateProductType = {
  STYLE: string;
  LEFT: number;
};

export default async function updateProductQuantity(
  product: UpdateProductType
) {
  try {
    const response = await fetch(
      "https://bonjour-scanner.netlify.app/.netlify/functions/update_product",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
