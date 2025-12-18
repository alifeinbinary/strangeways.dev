import {
    faCcAmex,
    faCcDiscover,
    faCcMastercard,
    faCcVisa,
} from '@fortawesome/free-brands-svg-icons'
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { FormValues } from '../types/contact'

function ObfuscatedEmail() {
  const user = 'studio'
  const domain = 'strangeways.co'
  const addr = `${user}@${domain}`
  const href = `mailto:${addr}`
  return (
    <a
      href={href}
      className="text-base inline-flex items-center justify-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2 font-medium text-neutral-900 shadow-subtle transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-gray-500/30 focus:ring-offset-0 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
    >
      <span>
        {user}[at]{domain}
      </span>
    </a>
  )
}

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const {
    register,
    reset,
    handleSubmit: rhfHandleSubmit,
  } = useForm<FormValues>({
    mode: 'onChange',
  })

  const onSubmit = async (data: FormValues) => {
    try {
      setError(null)
      setSuccess(false)
      setSubmitting(true)

      const body = {
        to: 'studio@strangeways.co',
        subject: 'A contact form submission for Strangeways.ca',
        body: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nWebsite: ${data.website}\n\n${data.message}`,
        name: 'Strangeways Studios',
        from: 'studio@strangeways.co',
        reply: data.email,
        '': '',
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      if (!res.ok) {
        const contentType = res.headers.get('Content-Type') ?? ''
        let message = 'Something went wrong. Please try again.'
        if (contentType.includes('application/json')) {
          const json = (await res.json().catch(() => null)) as {
            error?: unknown
          } | null
          if (
            json &&
            typeof json.error === 'string' &&
            json.error.trim() !== ''
          ) {
            message = json.error
          }
        } else {
          const text = await res.text().catch(() => '')
          if (text.trim() !== '') {
            message = text
          }
        }
        throw new Error(message)
      }

      setSuccess(true)
      reset()
    } catch (err) {
      console.error(err)
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section id="contact" className="container-responsive cv-auto py-8">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Get in touch
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            We offer a free 30-minute consultation to discuss your project and
            answer any questions you may have.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <article
            className="card flex flex-col overflow-hidden p-6"
            data-aos="fade-right"
          >
            <div className="space-y-6">
              {/* Mailing Address */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Mailing Address
                </h3>
                <address className="mt-3 not-italic leading-relaxed text-neutral-700 dark:text-neutral-200">
                  <span className="font-medium">Strangeways Studios</span>
                  <br />
                  PO Box 204
                  <br />
                  V0R 2H0
                  <br />
                  British Columbia, Canada
                </address>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Email
                </h3>
                <p className="text-sm mt-2 text-neutral-600 dark:text-neutral-400">
                  We typically reply within one business day.
                </p>
                <div className="mt-3">
                  <ObfuscatedEmail />
                </div>
              </div>

              {/* Payment */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Pay an Invoice
                </h3>
                <div className="mt-3 flex items-center gap-3 text-2xl text-neutral-600 dark:text-neutral-300">
                  <FontAwesomeIcon
                    icon={faCcMastercard}
                    className="text-[#eb001b] dark:text-[#ff6b6b]"
                  />
                  <FontAwesomeIcon
                    icon={faCcVisa}
                    className="text-[#1a1f71] dark:text-[#7c83db]"
                  />
                  <FontAwesomeIcon
                    icon={faCcAmex}
                    className="text-[#006fcf] dark:text-[#5fa8e8]"
                  />
                  <FontAwesomeIcon
                    icon={faCcDiscover}
                    className="text-[#ff6000] dark:text-[#ff9a5c]"
                  />
                  <FontAwesomeIcon
                    icon={faMoneyBillTransfer}
                    className="text-green-600 dark:text-green-400"
                  />
                </div>
                <a
                  href="https://invoicing.strangeways.co/client/subscriptions/VolejRejNm/purchase"
                  className="text-sm mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-neutral-300 bg-transparent px-4 py-2.5 font-medium text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-gray-500/30 focus:ring-offset-0 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-neutral-500 dark:hover:bg-neutral-800"
                >
                  Pay an invoice
                </a>
              </div>
            </div>
          </article>
          <article
            className="card flex flex-col overflow-hidden p-6 md:col-span-2"
            data-aos="fade-left"
          >
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">
                  Send a Message
                </h2>
                <p className="text-sm mt-1 text-neutral-500 dark:text-neutral-400">
                  All fields marked are optional unless required for your
                  inquiry.
                </p>
              </div>
              {success && (
                <div className="text-sm rounded-md border border-green-200 bg-green-50 px-4 py-3 text-green-800 dark:border-green-900/50 dark:bg-green-950/50 dark:text-green-200">
                  Thanks! Your message has been sent.
                </div>
              )}
              {error && (
                <div className="text-sm rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-800 dark:border-red-900/50 dark:bg-red-950/50 dark:text-red-200">
                  {error}
                </div>
              )}
              <form
                name="contact"
                className="flex flex-col gap-4"
                onSubmit={(event) => {
                  void rhfHandleSubmit(onSubmit)(event)
                }}
                id="contact-form"
              >
                <div className="hidden">
                  <label htmlFor="bot-field">
                    Don't fill this out:
                    <input
                      id="bot-field"
                      type="text"
                      {...register('bot-field')}
                    />
                  </label>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-neutral-700 dark:text-neutral-200"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      {...register('name', {
                        required: true,
                        minLength: 2,
                      })}
                      className="text-base form-input w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-neutral-900 shadow-subtle transition placeholder:text-neutral-400 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-neutral-700 dark:text-neutral-200"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      {...register('email', {
                        required: true,
                        pattern: /.+@.+\..+/,
                      })}
                      className="text-base form-input w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-neutral-900 shadow-subtle transition placeholder:text-neutral-400 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-neutral-700 dark:text-neutral-200"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      {...register('phone', {
                        required: false,
                        pattern: /^\+?(?:[\s().-]*\d){7,15}$/,
                      })}
                      className="text-base form-input w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-neutral-900 shadow-subtle transition placeholder:text-neutral-400 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                      placeholder="+15551234567"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="website"
                      className="text-sm font-medium text-neutral-700 dark:text-neutral-200"
                    >
                      Website
                    </label>
                    <input
                      id="website"
                      type="text"
                      autoComplete="url"
                      inputMode="url"
                      {...register('website', {
                        required: false,
                        pattern:
                          /^(?:https?:\/\/)?(?:www\.)?[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\/.*)?$/,
                      })}
                      className="text-base form-input w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-neutral-900 shadow-subtle transition placeholder:text-neutral-400 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                      placeholder="https://your-website.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-neutral-700 dark:text-neutral-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', {
                      required: true,
                      minLength: 10,
                    })}
                    className="text-base form-textarea w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-neutral-900 shadow-subtle transition placeholder:text-neutral-400 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/30 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                  ></textarea>
                </div>
                <div className="flex items-center justify-end pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="text-base inline-flex cursor-pointer items-center justify-center rounded-md bg-neutral-800 px-6 py-2.5 font-medium text-white shadow-subtle transition hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-500/30 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
                  >
                    {submitting ? 'Sending…' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
