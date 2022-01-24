import { products } from "../utils/products";

async function fakeAwait() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

export const fakeApi = {
  getAllProducts: async () => {
    await fakeAwait();

    return products;
  },
  getProductById: async (id) => {
    await fakeAwait()

    const foundProduct = products.find(product => product.id === id)
    return foundProduct
  }
}