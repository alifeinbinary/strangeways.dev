import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Work from '../src/components/Work'

vi.mock('react-router-dom', () => ({
    useOutlet: () => null,
}))

vi.mock('react-responsive-masonry', () => {
    const ResponsiveMasonry = ({ children }: { children: React.ReactNode }) => (
        <div data-testid="responsive-masonry">{children}</div>
    )
    const Masonry = ({ children }: { children: React.ReactNode }) => (
        <div data-testid="masonry">{children}</div>
    )
    return {
        __esModule: true,
        default: Masonry,
        ResponsiveMasonry,
    }
})

vi.mock('../src/components/PortfolioCard', () => ({
    __esModule: true,
    default: ({ item }: { item: { id: string; title?: string } }) => (
        <div data-testid="portfolio-card">{item.title ?? item.id}</div>
    ),
}))

vi.mock('../src/theme/utils', () => ({
    __esModule: true,
    scrollToId: vi.fn(),
}))

describe('Work', () => {
    it('renders heading and hire link', () => {
        render(<Work selected={[]} onClear={() => { }} />)
        expect(
            screen.getByRole('heading', { level: 2, name: /selected work/i })
        ).toBeInTheDocument()

        const hireLink = screen.getByRole('link', { name: /hire us/i })
        expect(hireLink).toHaveAttribute('href', '#contact')
    })

    it('renders active filters and calls onClear', () => {
        const onClear = vi.fn()
        render(<Work selected={['React', 'TypeScript']} onClear={onClear} />)

        expect(screen.getByText('Active filters:')).toBeInTheDocument()
        expect(screen.getByText('React')).toBeInTheDocument()
        expect(screen.getByText('TypeScript')).toBeInTheDocument()

        const clearButton = screen.getByRole('button', {
            name: /clear active filters/i,
        })
        fireEvent.click(clearButton)
        expect(onClear).toHaveBeenCalledTimes(1)
    })
})
