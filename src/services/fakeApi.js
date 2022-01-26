import { setCookie, parseCookies } from 'nookies'

import { products, productsKey } from "../utils/products";

async function fakeAwait() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

class FakeApi {
  ctx;

  constructor(ctx = undefined) {
    this.ctx = ctx;
  }

  get storagedProducts() {
    const cookies = parseCookies(this.ctx);

    const jsonProducts = cookies[productsKey];

    if (!jsonProducts) {
      const stringifiedProducts = JSON.stringify(products)

      setCookie(this.ctx, productsKey, stringifiedProducts);

      return products
    }

    const parsedProducts = JSON.parse(jsonProducts)

    return parsedProducts
  }

  set storagedProducts(storagedProducts) {
    const stringifiedProducts = JSON.stringify(storagedProducts)

    setCookie(this.ctx, productsKey, stringifiedProducts);
  }

  async getAllProducts() {
    await fakeAwait();
    console.log(this.storagedProducts)
    return this.storagedProducts;
  }

  async getProductById(id) {
    await fakeAwait()
    console.log(this.storagedProducts)
    const foundProduct = this.storagedProducts.find(product => product.id === id)
    return foundProduct
  }

  async updateProduct(product) {
    await fakeAwait()

    const productIndex = this.storagedProducts.findIndex(productToFind => product.id === productToFind.id)
    if (productIndex > -1) {
      const newStoragedProducts = [...this.storagedProducts]

      // newStoragedProducts.splice(productIndex, 1) -> para remover um item de um array

      newStoragedProducts[productIndex] = product

      this.storagedProducts = newStoragedProducts;
    }
  }

  async deleteProduct(product) {
    await fakeAwait()

    const productIndex = this.storagedProducts.findIndex(productToFind => product.id === productToFind.id)
    if (productIndex > -1) {
      const deletedProduct = [...this.storagedProducts]

      deletedProduct.splice(productIndex, 1)

      this.storagedProducts = deletedProduct;
    }
  }
}

export function createFakeApiClient(ctx = undefined) {
  return new FakeApi(ctx)
}

export const fakeApi = createFakeApiClient();