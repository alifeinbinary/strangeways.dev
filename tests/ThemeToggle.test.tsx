import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ThemeToggle from '../src/components/ThemeToggle'
import { useTheme } from '../src/theme/useTheme'
vi.mock('../src/theme/useTheme', () => {
    const toggle = vi.fn()
    return {
        useTheme: () => ({
            theme: 'light',
            toggle,
        }),
        __esModule: true,
    }
})

describe('ThemeToggle', () => {
    it('renders a button with accessible label', () => {
        render(<ThemeToggle />)
        const button = screen.getByRole('button', { name: /toggle theme/i })
        expect(button).toBeInTheDocument()
    })

    it('calls toggle when clicked', () => {
        const { toggle } = useTheme()
        render(<ThemeToggle />)
        const button = screen.getByRole('button', { name: /toggle theme/i })
        fireEvent.click(button)
        expect(toggle).toHaveBeenCalledTimes(1)
    })
})
