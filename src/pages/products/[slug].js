import { fakeApi } from "../../services/fakeApi"

import { ProductDetailsContainer } from "./styles"

export default function ProductDetails({ product }) {
  return (
    <ProductDetailsContainer>
      <h1>{product.name}</h1>
    </ProductDetailsContainer>
  )
}

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.params

  const product = await fakeApi.getProductById(Number(slug))

  return {
    props: { product }
  }
}