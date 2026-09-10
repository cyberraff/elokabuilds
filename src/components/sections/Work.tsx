'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Monitor } from 'lucide-react';
import { Section, Card, CardContent, CardFooter } from '@/components/ui';

const caseStudies = [
	{
		slug: 'local-law-firm',
		name: 'Local Law Firm Rebuild',
		category: 'Legal / Professional Services',
		problem:
			"Slow, outdated site that didn't work on mobile. Potential clients couldn't contact them easily.",
		solution:
			'Rebuilt with Next.js — fast, accessible, mobile-first. Added clear CTAs, contact forms, and practice area pages.',
		outcome:
			'PageSpeed 94/100. 40% more contact form submissions in first month.',
		thumbnail: '/images/case-law-firm.svg',
		tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
		isPlaceholder: true,
	},
	{
		slug: 'boutique-hotel',
		name: 'Boutique Hotel Website',
		category: 'Hospitality',
		problem:
			'Booking flow was broken on mobile. Images unoptimized. No clear value proposition.',
		solution:
			'Redesigned with focus on visual storytelling. Integrated booking engine. Optimized all assets.',
		outcome: 'Mobile conversions up 60%. PageSpeed from 32 to 91.',
		thumbnail: '/images/case-hotel.svg',
		tech: ['Next.js', 'Tailwind CSS', 'Cloudinary', 'Vercel'],
		isPlaceholder: true,
	},
	{
		slug: 'healthcare-clinic',
		name: 'Healthcare Clinic Portal',
		category: 'Healthcare',
		problem:
			"Patients couldn't book appointments online. Site loaded in 8+ seconds. Not HIPAA-aware.",
		solution:
			'Built patient portal with appointment scheduling. Optimized for Core Web Vitals. Added privacy-first forms.',
		outcome: 'Online bookings increased 3x. Load time under 2s.',
		thumbnail: '/images/case-clinic.svg',
		tech: ['Next.js', 'Tailwind CSS', 'Supabase', 'Vercel'],
		isPlaceholder: true,
	},
	{
		slug: 'ecommerce-retail',
		name: 'Local Retail E-commerce',
		category: 'Retail',
		problem:
			'WooCommerce site crashing under traffic. Cart abandonment at 85%. No analytics.',
		solution:
			'Migrated to Next.js + Shopify headless. Added proper tracking. Optimized checkout flow.',
		outcome: 'Revenue up 120% YoY. Zero downtime during peak seasons.',
		thumbnail: '/images/case-retail.svg',
		tech: ['Next.js', 'Shopify Headless', 'Tailwind CSS', 'Vercel'],
		isPlaceholder: true,
	},
	{
		slug: 'education-platform',
		name: 'Online Course Platform',
		category: 'Education',
		problem:
			'Custom PHP platform unmaintainable. Video playback broken on mobile. No student dashboard.',
		solution:
			'Rebuilt with Next.js. Integrated Mux for video. Built student progress tracking.',
		outcome: 'Course completion rate up 45%. Mobile engagement doubled.',
		thumbnail: '/images/case-education.svg',
		tech: ['Next.js', 'Mux Video', 'Tailwind CSS', 'Prisma', 'Vercel'],
		isPlaceholder: true,
	},
	{
		slug: 'trades-construction',
		name: 'Construction Company Site',
		category: 'Trades / Construction',
		problem:
			'No portfolio of past work. Contact form broken. Not ranking locally.',
		solution:
			'Built project showcase with filtering. Fixed forms. Added local SEO schema and location pages.',
		outcome: 'Organic leads up 200%. 15+ qualified quotes/month.',
		thumbnail: '/images/case-construction.svg',
		tech: ['Next.js', 'Tailwind CSS', 'Sanity CMS', 'Vercel'],
		isPlaceholder: true,
	},
];

export function Work() {
	return (
		<Section id='work' size='lg' aria-labelledby='work-heading'>
			<div className='text-center max-w-3xl mx-auto mb-16'>
				<h2
					id='work-heading'
					className='text-3xl md:text-4xl font-bold tracking-tight mb-4'>
					Selected Work
				</h2>
				<p className='text-lg text-muted-foreground'>
					Real projects, real results. Placeholder data from past
					portfolio — will be replaced with Silent Contractor client
					work as deals close.
				</p>
			</div>

			<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
				{caseStudies.map((project) => (
					<Card
						key={project.slug}
						className='group overflow-hidden flex flex-col'>
						<div className='relative aspect-video overflow-hidden bg-muted'>
							<Image
								src={project.thumbnail}
								alt={project.name}
								fill
								className='object-cover transition-transform duration-300 group-hover:scale-105'
								sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
							/>
							{project.isPlaceholder && (
								<div className='absolute top-3 left-3'>
									<span className='text-xs font-medium px-2 py-1 rounded bg-background/80 backdrop-blur text-muted-foreground border border-border'>
										Placeholder
									</span>
								</div>
							)}
						</div>
						<CardContent className='flex flex-col flex-1 p-5'>
							<div className='flex items-center gap-2 text-xs text-muted-foreground mb-2'>
								<span className='px-2 py-0.5 rounded border border-border bg-background'>
									{project.category}
								</span>
							</div>
							<h3 className='text-lg font-semibold mb-2 group-hover:text-accent transition-colors'>
								{project.name}
							</h3>
							<p className='text-sm text-muted-foreground mb-4 flex-1 leading-relaxed'>
								{project.problem}
							</p>
							<div
								className='flex flex-wrap gap-1.5 mb-4'
								role='list'
								aria-label='Technologies used'>
								{project.tech.slice(0, 3).map((tech) => (
									<span
										key={tech}
										className='text-xs px-2 py-0.5 rounded border border-border bg-background text-muted-foreground'>
										{tech}
									</span>
								))}
								{project.tech.length > 3 && (
									<span className='text-xs px-2 py-0.5 rounded border border-border bg-background text-muted-foreground'>
										+{project.tech.length - 3} more
									</span>
								)}
							</div>
						</CardContent>
						<CardFooter className='p-5 pt-0 border-t border-border'>
							<Link
								href={`/work/${project.slug}`}
								className='w-full inline-flex items-center justify-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md py-2'>
								View Case Study
								<ExternalLink
									className='h-3.5 w-3.5'
									aria-hidden='true'
								/>
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>

			<div className='mt-12 text-center'>
				<p className='text-muted-foreground mb-4'>
					More case studies coming as Silent Contractor clients
					launch.
				</p>
				<a
					href='#contact'
					className='inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-4 py-2'
					onClick={(e) => {
						e.preventDefault();
						document
							.querySelector('#contact')
							?.scrollIntoView({ behavior: 'smooth' });
					}}>
					Have a project in mind? Let&apos;s talk
					<Monitor className='h-4 w-4' aria-hidden='true' />
				</a>
			</div>
		</Section>
	);
}
