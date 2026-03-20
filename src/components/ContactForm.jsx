import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_PUBLIC_KEY = 'e8LQUyitmdNq6MYXd'

export default function ContactForm() {
  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
  }, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name?.trim()) newErrors.name = 'Name is required'
    if (!formData.email?.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone?.trim()) newErrors.phone = 'Phone is required'
    if (!formData.message?.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    setStatus('sending')

    const form = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    }

    try {
      await emailjs.send(
        'service_tcmyj8e',
        'template_j72sbs3',
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setErrors({})
    } catch (error) {
      console.log(error)
      setStatus('error')
    }
  }

  const inputClassName = (field) =>
    `w-full px-4 py-3.5 rounded-xl border outline-none transition-all focus:ring-2 focus:ring-xperts-red/20 ${
      errors[field]
        ? 'border-red-500 focus:border-red-500'
        : 'border-gray-200 focus:border-xperts-red'
    }`

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xperts-red font-semibold text-sm uppercase tracking-widest mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-xperts-black mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Request a service or reach out for a quote. Our team typically responds within one business day.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-xperts-black mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className={inputClassName('name')}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-xperts-black mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className={inputClassName('email')}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-xperts-black mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className={inputClassName('phone')}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-xperts-black mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  rows={5}
                  className={inputClassName('message') + ' resize-none'}
                  placeholder="Describe your facility management needs..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
            </div>

            {status === 'success' && (
              <p className="mt-6 p-4 rounded-xl bg-green-50 text-green-700 text-center font-medium">
                Message sent successfully
              </p>
            )}
            {status === 'error' && (
              <p className="mt-6 p-4 rounded-xl bg-red-50 text-red-700 text-center font-medium">
                Something went wrong, please try again
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full mt-8 bg-xperts-red hover:bg-xperts-red-dark text-white py-4 rounded-xl font-bold text-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-md"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
