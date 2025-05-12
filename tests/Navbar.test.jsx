import { describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";

const links = [
    {
        name: 'Home',
        to: '/',
        key: crypto.randomUUID()
    },
    {
        name: 'Link One',
        to: '/l1',
        key: crypto.randomUUID()
    },
    {
        name: 'Link Two',
        to: '/l2',
        key: crypto.randomUUID()
    }
];

describe('Navbar', () => {
    it('renders nothing if no links are provided', async () => {
        render(<MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route 
                        path={'/'}
                        element={<Navbar/>} 
                    />
                </Routes>
              </MemoryRouter>)
        expect(screen.getByRole('list').innerHTML).not.toMatch(/.*<\/a>.*/i)
        cleanup()
    });
    it('renders all the links it gets provided', async () => {
        render(<MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route 
                        path={'/'}
                        element={<Navbar linkArray={links} />} 
                    />
                    {links.map(link => <Route path={link.to} />)}
                </Routes>
              </MemoryRouter>)
        const renderedLinks = screen.getAllByRole('link')
        expect(renderedLinks.length).toBe(links.length)
        for (let i = 0; i < links.length; i++) {
            expect(renderedLinks.filter(renderedLink => renderedLink.value === links[i].to)).toBeDefined()
        }
    })
    it('it\'s links have the correct name', async () => {
        const renderedLinks = screen.getAllByRole('link')
        expect(renderedLinks.length).toBe(links.length)
        for (let i = 0; i < links.length; i++) {
            expect(renderedLinks.filter(renderedLink => renderedLink.textContent === links[i].name)).toBeDefined()
        }
    })
}); 