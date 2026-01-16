import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Book a Meeting with Narin | Schedule a Call',
  description:
    'Schedule a meeting with Narin Rico Sundarabhaya. Book a call to discuss your project, collaborate, or just say hello.',
  openGraph: {
    title: 'Book a Meeting with Narin | Schedule a Call',
    description:
      'Schedule a meeting with Narin Rico Sundarabhaya. Book a call to discuss your project, collaborate, or just say hello.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Book a Meeting with Narin | Schedule a Call',
    description:
      'Schedule a meeting with Narin Rico Sundarabhaya. Book a call to discuss your project, collaborate, or just say hello.',
  },
};

export default function CalendarPage() {
  redirect('https://calendar.app.google/5aPd9VCcVERiM7rk8');
}
