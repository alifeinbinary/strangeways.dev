import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from '../src/components/Contact'

const originalFetch = globalThis.fetch

beforeEach(() => {
    // Always mock fetch to resolve successfully so we don't rely on
    // real Netlify form behavior or actual network requests.
    globalThis.fetch = vi.fn().mockResolvedValue({ ok: true } as Response)
})

afterEach(() => {
    globalThis.fetch = originalFetch
    vi.restoreAllMocks()
})

describe('Contact', () => {
    it('renders obfuscated email link', () => {
        render(<Contact />)
        const emailLink = screen.getByRole('link', {
            name: /studio\[at]strangeways\.co/i,
        })
        expect(emailLink).toBeInTheDocument()
        expect(emailLink).toHaveAttribute(
            'href',
            'mailto:studio@strangeways.co'
        )
    })

    it('submits the form successfully and shows success message', async () => {
        render(<Contact />)

        await userEvent.type(screen.getByLabelText(/your name/i), 'Jane Doe')
        await userEvent.type(
            screen.getByLabelText(/your email/i),
            'jane@example.com'
        )
        await userEvent.type(
            screen.getByLabelText(/message/i),
            'Hello, this is a test message.'
        )

        await userEvent.click(screen.getByRole('button', { name: /send/i }))

        await waitFor(() => {
            expect(
                screen.getByText(/thanks! your message has been sent\./i)
            ).toBeInTheDocument()
        })

        expect(globalThis.fetch).toHaveBeenCalledWith('/', expect.any(Object))
    })
})
