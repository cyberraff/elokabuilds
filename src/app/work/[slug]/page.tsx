// # Wrote src/app/work/[slug]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
	ArrowLeft,
	ExternalLink,
} from 'lucide-react';
import { Section, Card, CardContent } from '@/components/ui';

const caseStudies: Record<
	string,
	{
		slug: string;
		name: string;
		category: string;
		problem: string;
		solution: string;
		outcome: string;
		thumbnail: string;
		tech: string[];
		isPlaceholder: boolean;
		date: string;
		duration: string;
		role: string;
		clientType: string;
	}
> = {
	'local-law-firm': {
		slug: 'local-law-firm',
		name: 'Local Law Firm Rebuild',
		category: 'Legal / Professional Services',
		problem:
			"Slow, outdated site that didn't work on mobile. Potential clients couldn't contact them easily. The previous site was built on an old CMS that was difficult to update and had security vulnerabilities.",
		solution:
			'Rebuilt with Next.js — fast, accessible, mobile-first. Added clear CTAs, contact forms, and practice area pages. Implemented a headless CMS (Sanity) so the firm can update content without developer help. Added schema markup for local SEO.',
		outcome:
			'PageSpeed 94/100 mobile. 40% more contact form submissions in first month. Organic search traffic up 65% in 90 days. Zero security incidents since launch.',
		thumbnail: '/images/case-law-firm.svg',
		tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Sanity CMS', 'Vercel'],
		isPlaceholder: true,
		date: 'March 2024',
		duration: '6 weeks',
		role: 'Lead Developer',
		clientType: 'Solo practitioner law firm',
	},
	'boutique-hotel': {
		slug: 'boutique-hotel',
		name: 'Boutique Hotel Website',
		category: 'Hospitality',
		problem:
			'Booking flow was broken on mobile. Images unoptimized (15MB+ homepage). No clear value proposition. The site was built on WordPress with heavy page builders causing 8s+ load times.',
		solution:
			'Redesigned with focus on visual storytelling. Integrated booking engine via iframe with seamless styling. Optimized all assets with Next.js Image and Cloudinary. Built custom room/type pages with availability calendar.',
		outcome:
			'Mobile conversions up 60%. PageSpeed from 32 to 91. Direct bookings increased 35% (reducing OTA commissions). Homepage now loads in 1.2s.',
		thumbnail: '/images/case-hotel.svg',
		tech: [
			'Next.js',
			'Tailwind CSS',
			'Cloudinary',
			'Vercel',
			'Booking Engine API',
		],
		isPlaceholder: true,
		date: 'January 2024',
		duration: '8 weeks',
		role: 'Lead Developer',
		clientType: '12-room boutique hotel',
	},
	'healthcare-clinic': {
		slug: 'healthcare-clinic',
		name: 'Healthcare Clinic Portal',
		category: 'Healthcare',
		problem:
			"Patients couldn't book appointments online. Site loaded in 8+ seconds. Not HIPAA-aware. Existing PHP platform had no patient portal, forcing phone-only booking.",
		solution:
			'Built patient portal with appointment scheduling using Supabase for auth/data. Optimized for Core Web Vitals. Added privacy-first forms with encrypted submissions. Built admin dashboard for staff.',
		outcome:
			'Online bookings increased 3x. Load time under 2s. 85% of appointments now booked online. Staff saves 15+ hours/week on phone scheduling.',
		thumbnail: '/images/case-clinic.svg',
		tech: [
			'Next.js',
			'Tailwind CSS',
			'Supabase',
			'Vercel',
			'React Hook Form',
		],
		isPlaceholder: true,
		date: 'November 2023',
		duration: '10 weeks',
		role: 'Full Stack Developer',
		clientType: 'Multi-location clinic',
	},
	'ecommerce-retail': {
		slug: 'ecommerce-retail',
		name: 'Local Retail E-commerce',
		category: 'Retail',
		problem:
			'WooCommerce site crashing under traffic. Cart abandonment at 85%. No analytics. Plugin conflicts caused weekly downtime during sales events.',
		solution:
			'Migrated to Next.js + Shopify headless. Added proper tracking (GA4, Meta Pixel, server-side). Optimized checkout flow with one-page checkout. Built custom product filtering and search.',
		outcome:
			'Revenue up 120% YoY. Zero downtime during peak seasons. Cart abandonment down to 62%. PageSpeed 95/100.',
		thumbnail: '/images/case-retail.svg',
		tech: [
			'Next.js',
			'Shopify Headless',
			'Tailwind CSS',
			'Vercel',
			'GA4',
			'Meta CAPI',
		],
		isPlaceholder: true,
		date: 'August 2023',
		duration: '12 weeks',
		role: 'Lead Developer',
		clientType: 'Local retailer with 500+ SKUs',
	},
	'education-platform': {
		slug: 'education-platform',
		name: 'Online Course Platform',
		category: 'Education',
		problem:
			"Custom PHP platform unmaintainable. Video playback broken on mobile. No student dashboard. Content creators couldn't upload courses without dev help.",
		solution:
			'Rebuilt with Next.js. Integrated Mux for video streaming with adaptive bitrate. Built student progress tracking, certificates, and discussion forums. Added instructor dashboard for course management.',
		outcome:
			'Course completion rate up 45%. Mobile engagement doubled. Instructors can now publish courses independently. Video startup time <2s globally.',
		thumbnail: '/images/case-education.svg',
		tech: [
			'Next.js',
			'Mux Video',
			'Tailwind CSS',
			'Prisma',
			'PostgreSQL',
			'Vercel',
		],
		isPlaceholder: true,
		date: 'May 2023',
		duration: '14 weeks',
		role: 'Full Stack Developer',
		clientType: 'EdTech startup',
	},
	'trades-construction': {
		slug: 'trades-construction',
		name: 'Construction Company Site',
		category: 'Trades / Construction',
		problem:
			'No portfolio of past work. Contact form broken. Not ranking locally. The site was a single-page HTML template with no CMS, no SEO, no analytics.',
		solution:
			'Built project showcase with filtering by project with category filtering. Fixed forms with proper validation and spam protection. Added local SEO schema, location pages for 3 service areas, Google Business Profile optimization.',
		outcome:
			"Organic leads up 200%. 15+ qualified quotes/month. Ranking #1 for 'construction company [city]' and 12 related keywords. Form conversion rate 8.2%.",
		thumbnail: '/images/case-construction.svg',
		tech: [
			'Next.js',
			'Tailwind CSS',
			'Sanity CMS',
			'Vercel',
			'Google Maps API',
		],
		isPlaceholder: true,
		date: 'February 2023',
		duration: '5 weeks',
		role: 'Lead Developer',
		clientType: 'Mid-size construction firm',
	},
};

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const project = caseStudies[slug];

	if (!project) {
		return { title: 'Case Study Not Found' };
	}

	return {
		title: project.name,
		description: project.outcome,
		openGraph: {
			title: project.name,
			description: project.outcome,
			type: 'article',
			images: [{ url: project.thumbnail }],
		},
		twitter: {
			card: 'summary_large_image',
			title: project.name,
			description: project.outcome,
			images: [project.thumbnail],
		},
	};
}

export default async function CaseStudyPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = caseStudies[slug];

	if (!project) {
		notFound();
	}

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'CaseStudy',
		name: project.name,
		description: project.outcome,
		image: project.thumbnail,
		datePublished: project.date,
		author: {
			'@type': 'Person',
			name: 'Raphael Ejeogo',
		},
		about: {
			'@type': 'Service',
			name: project.category,
		},
		workPerformed: {
			'@type': 'CreativeWork',
			name: project.name,
			description: project.solution,
		},
		result: {
			'@type': 'QuantitativeValue',
			name: 'Outcome',
			value: project.outcome,
		},
	};

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData),
				}}
			/>
			<article>
				<header className='relative min-h-[40vh] flex items-end'>
					<div className='absolute inset-0 bg-linear-to-t from-background/95 via-background/50 to-transparent z-10' />
					<div className='absolute inset-0 z-0'>
						<Image
							src={project.thumbnail}
							alt={project.name}
							fill
							priority
							className='object-cover'
							sizes='100vw'
						/>
					</div>
					<div className='relative z-20 w-full px-4 md:px-6 lg:px-8 pb-12'>
						<div className='max-w-6xl mx-auto'>
							<Link
								href='/#work'
								className='inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1'>
								<ArrowLeft
									className='h-4 w-4'
									aria-hidden='true'
								/>
								Back to Work
							</Link>
							<div className='flex flex-wrap gap-2 mb-4'>
								<span className='px-3 py-1 rounded-full border border-border bg-background text-sm text-muted-foreground'>
									{project.category}
								</span>
								{project.isPlaceholder && (
									<span className='px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-sm text-amber-400'>
										Placeholder Project
									</span>
								)}
							</div>
							<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4'>
								{project.name}
							</h1>
							<p className='text-lg md:text-xl text-muted-foreground max-w-2xl'>
								{project.outcome.split('.')[0]}.
							</p>
						</div>
					</div>
				</header>

				<Section id='overview' size='md' className='pt-0'>
					<div className='max-w-6xl mx-auto'>
						<div className='grid lg:grid-cols-3 gap-8'>
							<div className='lg:col-span-2 space-y-10'>
								<div>
									<h2 className='text-2xl font-bold mb-4'>
										The Problem
									</h2>
									<p className='text-muted-foreground leading-relaxed text-lg'>
										{project.problem}
									</p>
								</div>

								<div>
									<h2 className='text-2xl font-bold mb-4'>
										The Solution
									</h2>
									<p className='text-muted-foreground leading-relaxed text-lg'>
										{project.solution}
									</p>
								</div>

								<div>
									<h2 className='text-2xl font-bold mb-4'>
										The Outcome
									</h2>
									<p className='text-muted-foreground leading-relaxed text-lg'>
										{project.outcome}
									</p>
								</div>
							</div>

							<div className='space-y-6'>
								<Card>
									<CardContent className='pt-6'>
										<h3 className='font-semibold mb-6'>
											Project Details
										</h3>
										<dl className='space-y-4'>
											<div>
												<dt className='text-xs font-medium text-muted-foreground uppercase tracking-wider'>
													Timeline
												</dt>
												<dd className='mt-1 text-foreground'>
													{project.date} ·{' '}
													{project.duration}
												</dd>
											</div>
											<div>
												<dt className='text-xs font-medium text-muted-foreground uppercase tracking-wider'>
													My Role
												</dt>
												<dd className='mt-1 text-foreground'>
													{project.role}
												</dd>
											</div>
											<div>
												<dt className='text-xs font-medium text-muted-foreground uppercase tracking-wider'>
													Client Type
												</dt>
												<dd className='mt-1 text-foreground'>
													{project.clientType}
												</dd>
											</div>
											<div>
												<dt className='text-xs font-medium text-muted-foreground uppercase tracking-wider'>
													Status
												</dt>
												<dd className='mt-1 text-foreground'>
													{project.isPlaceholder
														? 'Past Portfolio (Placeholder)'
														: 'Live Silent Contractor Project'}
												</dd>
											</div>
										</dl>
									</CardContent>
								</Card>

								<Card>
									<CardContent className='pt-6'>
										<h3 className='font-semibold mb-6'>
											Technologies
										</h3>
										<div className='flex flex-wrap gap-2'>
											{project.tech.map((tech) => (
												<span
													key={tech}
													className='px-3 py-1 rounded-full border border-border bg-background text-sm text-muted-foreground'>
													{tech}
												</span>
											))}
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</Section>

				<Section id='cta' size='lg' className='bg-muted/30'>
					<div className='max-w-3xl mx-auto text-center'>
						<h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-4'>
							Want similar results for your business?
						</h2>
						<p className='text-lg text-muted-foreground mb-8'>
							Start with a free audit. I&apos;ll review your
							current site and show you exactly what&apos;s
							possible.
						</p>
						<Link
							href='#contact'
							className='inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-background font-medium transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background'>
							Book a Free Audit
							<ExternalLink
								className='h-4 w-4'
								aria-hidden='true'
							/>
						</Link>
					</div>
				</Section>
			</article>
		</>
	);
}
