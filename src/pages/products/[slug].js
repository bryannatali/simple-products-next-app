import { useEffect, useState } from "react";
import router from "next/router";

import { fakeApi, createFakeApiClient } from "../../services/fakeApi"
import { useAuth } from "../../contexts/AuthContext"

import { Input } from "../../components/Input"

import { ProductBox, ProductDetailsContainer } from "./styles"

export default function ProductDetails({ product }) {
  const [productState, setProductState] = useState(product);
  const [editName, setEditName] = useState(false)

  const auth = useAuth();

  async function handleSaveProduct() {
    await fakeApi.updateProduct(productState)
    setEditName(false)
  }

  function handleNameChange(event) {
    const newProduct = {
      ...productState,
      name: event.target.value
    }
    setProductState(newProduct)
  }

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
      <ProductBox>
        {
          editName
            ? <Input
              className="name-input"
              value={productState.name}
              onChange={handleNameChange}
              onBlur={handleSaveProduct}
            />
            : <h1 onDoubleClick={() => setEditName(true)}>{productState.name}</h1>
        }
        <h2>{productState.description}</h2>
        <strong>R$ {productState.price}</strong>
      </ProductBox>
    </ProductDetailsContainer>
  )
}

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.params
  const fakeApiClient = createFakeApiClient(ctx)

  const product = await fakeApiClient.getProductById(Number(slug))

  return {
    props: { product }
  }
}