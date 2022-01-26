import { useRef } from "react"
import router from "next/router"

import { fakeApi } from "../../services/fakeApi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { RegisterContainer } from "./styles"

export default function RegisterProduct() {
  const formRef = useRef(null)

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(formRef.current)

    const productData = {
      name: formData.get('productName'),
      description: formData.get('productDescription'),
      price: formData.get('productPrice')
    }

    const newProductId = await fakeApi.createProduct(productData)
    router.push(`/products/${newProductId}`)
  }


  return (
    <RegisterContainer>

      <form
        ref={formRef}
        onSubmit={event => handleSubmit(event)}
      >
        <label htmlFor="productName">Nome do produto</label>
        <Input name="productName" className="name-input" />

        <label htmlFor="productDescription">Descrição do produto</label>
        <Input name="productDescription" className="description-input" />

        <label htmlFor="productPrice">Preço do produto</label>
        <Input name="productPrice" className="price-input" />

        <Button type="submit">Criar</Button>
      </form>
    </RegisterContainer>

  )
}