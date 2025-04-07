import { describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ShopItem from "../src/components/ShopItem";

const product = {
  link: './product-name',
  image: '',
  name: 'Product Name',
  price: 10,
}

describe('ShopItem', () => {

  it('renders with the correct heading', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
            <Route path='/' element={<ShopItem
              productImage={product.image}
              productLink={product.link}
              productName={product.name}
              productPrice={product.price}
            />} />
            <Route path={product.link} />
            <Route path='/error' element={<h1>Login</h1>} />
        </Routes>
      </MemoryRouter>);

    expect(screen.getByRole('heading').textContent).toMatch(/product name/i)
    cleanup()
  });


  it('can render without `productImage` or `productLink`', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
            <Route path='/' element={<ShopItem
              // productImage={product.image}
              // productLink={product.link}
              productName={product.name}
              productPrice={product.price}
            />} />
            <Route path='/error' element={<h1>Login</h1>} />
        </Routes>
      </MemoryRouter>);

      expect(screen.getByRole('heading').textContent).toMatch(/product name/i)
  });

  it('... and correctly show the placeholder image', async () => {
    const image = document.querySelector('.product-image');
    expect(image.style.backgroundImage).toMatch('https://placehold.co/150');
  })
})