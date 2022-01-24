import { useEffect } from "react";
import router from "next/router";

import { fakeApi } from "../../services/fakeApi"

import { useAuth } from "../../contexts/AuthContext"

import { ProductDetailsContainer } from "./styles"

export default function ProductDetails({ product }) {

  const auth = useAuth();  

  useEffect(
    () => {
      if (!auth.user) {
        router.push('/login');
      }
    },
    [auth.user]
  );

  return (
    <ProductDetailsContainer>
      <h1>{product.name}</h1>
      <h2>{product.description}</h2>
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