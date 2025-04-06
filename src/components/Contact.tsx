'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Contact = () => {
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

		// Simulating form submission
		try {
			await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulating API call
			setSubmitStatus('success')
			setFormData({ name: '', email: '', subject: '', message: '' })
		} catch (error) {
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)

			// Reset status after 5 seconds
			setTimeout(() => {
				setSubmitStatus(null)
			}, 5000)
		}
	}

	const contactInfo = [
		{
			icon: <FiMail size={20} />,
			title: 'Email',
			content: 'contact@example.com',
			href: 'mailto:contact@example.com',
		},
		{
			icon: <FiPhone size={20} />,
			title: 'Phone',
			content: '+1 234 567 890',
			href: 'tel:+1234567890',
		},
		{
			icon: <FiMapPin size={20} />,
			title: 'Location',
			content: 'San Francisco, CA',
			href: 'https://maps.google.com/?q=San+Francisco',
		},
	]

	return (
		<section id="contact" className="py-16 md:py-24">
			<div className="section-container">
				<h2 className="section-title">Get In Touch</h2>

				<div className="grid md:grid-cols-2 gap-12">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<p className="text-lg mb-8">
							I'm interested in freelance opportunities and collaborations. If
							you have a project that needs my expertise, or if you just want to
							say hi, feel free to reach out!
						</p>

						<div className="space-y-6">
							{contactInfo.map((info, index) => (
								<div key={index} className="flex items-start gap-4">
									<div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-[var(--primary)]">
										{info.icon}
									</div>
									<div>
										<h3 className="font-semibold">{info.title}</h3>
										<a
											href={info.href}
											className="text-[var(--text-light)] hover:text-[var(--primary)]"
											target="_blank"
											rel="noopener noreferrer"
										>
											{info.content}
										</a>
									</div>
								</div>
							))}
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-1"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent dark:bg-gray-800"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-1"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent dark:bg-gray-800"
								/>
							</div>

							<div>
								<label
									htmlFor="subject"
									className="block text-sm font-medium mb-1"
								>
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent dark:bg-gray-800"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-1"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows={5}
									required
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent dark:bg-gray-800"
								/>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="button-primary w-full flex justify-center items-center"
							>
								{isSubmitting ? 'Sending...' : 'Send Message'}
							</button>

							{submitStatus === 'success' && (
								<p className="text-green-600 dark:text-green-400 text-center">
									Your message has been sent successfully!
								</p>
							)}

							{submitStatus === 'error' && (
								<p className="text-red-600 dark:text-red-400 text-center">
									There was an error sending your message. Please try again.
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
