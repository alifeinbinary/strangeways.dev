import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Tools from '../src/components/Tools'
import { tools } from '../src/data/tools'

vi.mock('react-scroll-parallax', () => ({
    Parallax: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="parallax">{children}</div>
    ),
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

vi.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: (props: { icon: unknown }) => (
        <span data-testid="fa-icon">icon</span>
    ),
}))

describe('Tools', () => {
    it('renders heading and description', () => {
        render(<Tools selected={[]} onToggle={() => {}} />)
        expect(
            screen.getByRole('heading', { level: 2, name: /tools/i })
        ).toBeInTheDocument()
        expect(
            screen.getByText(/select the tools you are interested in/i)
        ).toBeInTheDocument()
    })

    it('calls onToggle when a tool is clicked', () => {
        const onToggle = vi.fn()
        const firstGroup = tools[0]
        const firstTool = firstGroup.tools[0]

        render(<Tools selected={[]} onToggle={onToggle} />)

        const button = screen.getByRole('button', {
            name: firstTool.name,
        })
        fireEvent.click(button)

        expect(onToggle).toHaveBeenCalledWith(firstTool.name)
    })
})
