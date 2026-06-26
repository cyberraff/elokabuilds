'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Section, Button, Input, Textarea } from '@/components/ui';
import { cn } from '@/lib/utils';

interface FormData {
	name: string;
	email: string;
	business: string;
	message: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	business?: string;
	message?: string;
}

export function Contact() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		business: '',
		message: '',
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const [status, setStatus] = useState<
		'idle' | 'submitting' | 'success' | 'error'
	>('idle');
	const [errorMessage, setErrorMessage] = useState('');

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};
		if (!formData.name.trim()) newErrors.name = 'Name is required';
		if (!formData.email.trim()) newErrors.email = 'Email is required';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
			newErrors.email = 'Invalid email address';
		if (!formData.business.trim())
			newErrors.business = 'Business name is required';
		if (!formData.message.trim()) newErrors.message = 'Message is required';
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;

		setStatus('submitting');
		setErrorMessage('');

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			if (res.ok) {
				setStatus('success');
				setFormData({ name: '', email: '', business: '', message: '' });
			} else {
				const data = await res.json();
				setStatus('error');
				setErrorMessage(
					data.message || 'Something went wrong. Please try again.',
				);
			}
		} catch {
			setStatus('error');
			setErrorMessage('Network error. Please try again later.');
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name as keyof FormErrors]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	const calendlyUrl = 'https://calendly.com/raphaelejeogo/free-audit-call';

	return (
		<Section id='contact' size='lg' aria-labelledby='contact-heading'>
			<div className='text-center max-w-3xl mx-auto mb-16'>
				<h2
					id='contact-heading'
					className='text-3xl md:text-4xl font-bold tracking-tight mb-4'>
					Let&apos;s Talk
				</h2>
				<p className='text-lg text-muted-foreground'>
					Book a free audit call or send a message — either way,
					you&apos;ll hear from me directly within 24 hours.
				</p>
			</div>

			<div className='grid lg:grid-cols-2 gap-12'>
				<div className='space-y-6'>
					<div className='rounded-xl border border-border bg-card p-6'>
						<h3 className='text-xl font-semibold mb-4'>
							Book a Free Audit Call
						</h3>
						<p className='text-muted-foreground mb-6'>
							15-20 minutes. I&apos;ll review your site live,
							share findings, and discuss next steps. No pressure,
							no sales pitch.
						</p>
						<a
							href={calendlyUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-accent text-background font-medium transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background'>
							<Mail className='h-5 w-5' aria-hidden='true' />
							Schedule Your Free Audit
						</a>
						<p className='mt-4 text-sm text-muted-foreground text-center'>
							Opens Calendly in a new tab
						</p>
					</div>

					<div className='rounded-xl border border-border bg-card p-6'>
						<h3 className='text-xl font-semibold mb-2'>
							Or Email Directly
						</h3>
						<p className='text-muted-foreground mb-4'>
							Prefer email? I read and reply to every message
							personally.
						</p>
						<a
							href='mailto:hello@raphaelejeogo.com'
							className='inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1'>
							<Mail className='h-4 w-4' aria-hidden='true' />
							hello@raphaelejeogo.com
						</a>
					</div>

					<div className='rounded-xl border border-border bg-card p-6'>
						<h3 className='text-xl font-semibold mb-2'>
							Location & Availability
						</h3>
						<address className='not-italic space-y-2 text-muted-foreground'>
							<p>Lagos, Nigeria</p>
							<p>
								Available for US, UK, AU, and Africa time zones
							</p>
							<p>Remote-first, worldwide clients welcome</p>
						</address>
					</div>
				</div>

				<div className='rounded-xl border border-border bg-card p-6'>
					<h3 className='text-xl font-semibold mb-6'>
						Send a Message
					</h3>

					{status === 'success' && (
						<div
							className='mb-6 flex items-center gap-3 rounded-lg bg-green-500/10 border border-green-500/30 p-4'
							role='alert'>
							<CheckCircle
								className='h-5 w-5 text-green-500 flex-shrink-0'
								aria-hidden='true'
							/>
							<p className='text-green-500'>
								Message sent! I&apos;ll get back to you within
								24 hours.
							</p>
						</div>
					)}

					{status === 'error' && (
						<div
							className='mb-6 flex items-center gap-3 rounded-lg bg-red-500/10 border border-red-500/30 p-4'
							role='alert'>
							<AlertCircle
								className='h-5 w-5 text-red-500 flex-shrink-0'
								aria-hidden='true'
							/>
							<p className='text-red-500'>{errorMessage}</p>
						</div>
					)}

					<form
						onSubmit={handleSubmit}
						className='space-y-4'
						noValidate>
						<Input
							label='Name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							error={errors.name}
							placeholder='Your name'
							required
							disabled={status === 'submitting'}
						/>
						<Input
							label='Email'
							name='email'
							type='email'
							value={formData.email}
							onChange={handleChange}
							error={errors.email}
							placeholder='you@business.com'
							required
							disabled={status === 'submitting'}
						/>
						<Input
							label='Business Name'
							name='business'
							value={formData.business}
							onChange={handleChange}
							error={errors.business}
							placeholder='Your business name'
							required
							disabled={status === 'submitting'}
						/>
						<Textarea
							label='Message'
							name='message'
							value={formData.message}
							onChange={handleChange}
							error={errors.message}
							placeholder='Tell me about your project, goals, or just say hi...'
							rows={5}
							required
							disabled={status === 'submitting'}
						/>

						<Button
							type='submit'
							size='lg'
							className='w-full'
							loading={status === 'submitting'}
							disabled={status === 'submitting'}>
							<Send className='mr-2 h-4 w-4' aria-hidden='true' />
							{status === 'submitting'
								? 'Sending...'
								: 'Send Message'}
						</Button>
					</form>
				</div>
			</div>
		</Section>
	);
}
