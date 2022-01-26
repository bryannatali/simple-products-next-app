import { useEffect, useState } from "react";
import router from "next/router";

import { fakeApi, createFakeApiClient } from "../../services/fakeApi"
import { useAuth } from "../../contexts/AuthContext"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button";

import { ProductBox, ProductDetailsContainer } from "./styles"

export default function ProductDetails({ product }) {
  const [productState, setProductState] = useState(product);
  const [editName, setEditName] = useState(false)
  const [editDescription, setEditDescription] = useState(false)
  const [editPrice, setEditPrice] = useState(false)

  const auth = useAuth();

  async function handleSaveProductName() {
    await fakeApi.updateProduct(productState)
    setEditName(false)
  }

  async function handleSaveProductDescription() {
    await fakeApi.updateProduct(productState)
    setEditDescription(false)
  }

  async function handleSaveProductPrice() {
    await fakeApi.updateProduct(productState)
    setEditPrice(false)
  }

  async function handleDeleteProduct(){
    await fakeApi.deleteProduct
    router.push("/")
  }

  function handleNameChange(event) {
    const newProduct = {
      ...productState,
      name: event.target.value
    }
    setProductState(newProduct)
  }

  function handleDescriptionChange(event) {
    const newProduct = {
      ...productState,
      description: event.target.value
    }
    setProductState(newProduct)
  }

  function handlePriceChange(event) {
    const newProduct = {
      ...productState,
      price: event.target.value
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
              onBlur={handleSaveProductName}
            />
            : <h1 onDoubleClick={() => setEditName(true)}>{productState.name}</h1>
        }
        {
          editDescription
            ? <Input
              className="description-input"
              value={productState.description}
              onChange={handleDescriptionChange}
              onBlur={handleSaveProductDescription}
            />
            : <h2 onDoubleClick={() => setEditDescription(true)}>{productState.description}</h2>
        }
        {
          editPrice
            ? <Input
              type="number"
              className="price-input"
              value={productState.price}
              onChange={handlePriceChange}
              onBlur={handleSaveProductPrice}
            />
            : <strong onDoubleClick={() => setEditPrice(true)}>R$ {productState.price}</strong>
        }
        <Button className="delete-button" type="button" onClick={handleDeleteProduct}>Deletar Produto</Button>
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