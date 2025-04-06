'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const Contact = () => {
	const { messages } = useLanguage()

	const contact = messages.contact || {
		title: 'Contact Me',
		description:
			"I'm always open to new opportunities and collaborations. Feel free to get in touch with me!",
		form: {
			name: 'Name',
			email: 'Email',
			subject: 'Subject',
			message: 'Message',
			sending: 'Sending...',
			send: 'Send Message',
			success: 'Thank you! Your message has been sent successfully.',
			error: 'Oops! Something went wrong. Please try again later.',
		},
		info: {
			email: 'Email',
			phone: 'Phone',
			location: 'Location',
		},
	}

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(
		null
	)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			await new Promise((resolve) => setTimeout(resolve, 1500))
			setSubmitStatus('success')
			setFormData({ name: '', email: '', subject: '', message: '' })
		} catch (error) {
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)

			setTimeout(() => {
				setSubmitStatus(null)
			}, 5000)
		}
	}

	return (
		<section id="contact" className="py-6 md:py-12">
			<div className="section-container">
				<h2 className="section-title">{contact.title}</h2>

				<div className="space-y-6">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<p className="text-lg mb-4">{contact.description}</p>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<form onSubmit={handleSubmit} className="space-y-3">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-1 text-[var(--text-primary)]"
								>
									{contact.form.name}
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-[var(--bg-input)]"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-1 text-[var(--text-primary)]"
								>
									{contact.form.email}
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-[var(--bg-input)]"
								/>
							</div>

							<div>
								<label
									htmlFor="subject"
									className="block text-sm font-medium mb-1 text-[var(--text-primary)]"
								>
									{contact.form.subject}
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									required
									className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-[var(--bg-input)]"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-1 text-[var(--text-primary)]"
								>
									{contact.form.message}
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows={4}
									required
									className="w-full px-3 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-[var(--bg-input)]"
								/>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="button-primary w-full flex justify-center items-center cursor-pointer"
							>
								{isSubmitting ? contact.form.sending : contact.form.send}
							</button>

							{submitStatus === 'success' && (
								<p className="text-green-600 dark:text-green-400 text-center">
									{contact.form.success}
								</p>
							)}

							{submitStatus === 'error' && (
								<p className="text-red-600 dark:text-red-400 text-center">
									{contact.form.error}
								</p>
							)}
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Contact
