import { describe, it, expect, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';
import ShoppingCartButton from "../src/components/ShoppingCartButton";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const shoppingItem = {
  quantity: 1,
  name: 'Bells & Whistles',
  price: 100.99,
}

const removerFunction = vi.fn();
const modifierFunction = vi.fn();
const props = {
  cart: [shoppingItem]
}

describe('Shopping Cart Button', () => {
  it('Can render without props', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
            <Route path='/' element={<ShoppingCartButton/>} />
            <Route path='/error' element={<h1>Login</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('button')).toBeDefined();
    cleanup()

  });
  it('Has a shoppingcart icon on the button', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
            <Route path='/' element={<ShoppingCartButton/>} />
            <Route path='/error' element={<h1>Login</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('button').textContent).toMatch(/🛒/i)
    cleanup()
  });
  it('The shopping list is hidden by default', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
            <Route path='/' element={<ShoppingCartButton shoppingCart={props.cart} modifierFunction={modifierFunction} removerFunction={removerFunction} />} />
            <Route path='/error' element={<h1>Login</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(document.querySelector('#shopping-cart-popup')).not.toBeVisible()
    cleanup()
  });
  it('After clicking the button, the shopping list is no longer hidden', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
            <Route path='/' element={<ShoppingCartButton shoppingCart={props.cart} modifierFunction={modifierFunction} removerFunction={removerFunction} />} />
            <Route path='/error' element={<h1>Login</h1>} />
        </Routes>
      </MemoryRouter>
    );
    await userEvent.click(screen.getByRole('button'));
    expect(document.querySelector('#shopping-cart-popup')).toBeVisible()
    cleanup()
  });
})