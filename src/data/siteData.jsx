import React from 'react'

const Icon = ({ children = '✦' }) => <span className="miniIcon" aria-hidden="true">{children}</span>

export const ecosystemNodes = ['Website', 'AI Chatbot', 'CRM', 'WhatsApp', 'AI Voice Agent', 'Calendar', 'Customer']

export const workflowSteps = [
  'Visitor',
  'Website',
  'AI Chatbot',
  'Lead Captured',
  'CRM',
  'AI Voice Call',
  'Appointment',
  'Calendar',
  'Follow-Up'
]

export const services = [
  ['AI Chatbots', 'Always-on assistants that answer questions, qualify visitors and capture contact details before leads go cold.', '✦'],
  ['WhatsApp Automation', 'Structured WhatsApp journeys for inquiry handling, reminders, reactivation campaigns and follow-up sequences.', '◈'],
  ['AI Voice Agents', 'Voice agents for lead qualification, missed-call recovery, confirmations and appointment scheduling workflows.', '◎'],
  ['Lead & CRM Automation', 'Automatically organize new inquiries, update deal stages and route every opportunity into a clear sales process.', '▣'],
  ['Appointment Automation', 'Connect conversations to booking flows, calendars, confirmations and reminder automations that reduce no-shows.', '◌'],
  ['Workflow Automation', 'Eliminate repetitive admin by connecting forms, spreadsheets, CRMs, messaging tools, calendars and internal tasks.', '⌁'],
  ['AI Customer Support', 'Deploy AI support systems that provide consistent answers while escalating important conversations to your team.', '◇'],
  ['Custom AI Systems', 'Build complete AI-powered business systems around your exact customer journey, data and operating model.', '✺']
]

export const problems = [
  ['Missed leads', 'New inquiries get buried in inboxes, DMs and forms before the team can respond.'],
  ['Slow responses', 'Customers choose competitors when answers, pricing or availability take too long.'],
  ['Manual follow-ups', 'Staff spend hours repeating the same reminders, messages and status updates.'],
  ['Missed appointments', 'Bookings fall through when scheduling, confirmations and reminders are disconnected.'],
  ['Repetitive admin', 'Teams copy customer details between tools instead of focusing on service delivery.'],
  ['Lost opportunities', 'Leads disappear because there is no connected system tracking every next step.']
]

export const processSteps = [
  ['Understand Your Business', 'We analyze your current workflow and identify automation opportunities.'],
  ['Build Your AI System', 'We connect AI agents, automation workflows, CRM systems and communication channels.'],
  ['Integrate Everything', 'We connect your website, WhatsApp, AI calling, CRM and calendar.'],
  ['Automate & Scale', 'Your system automatically handles leads, conversations, follow-ups and appointments.']
]

export const industries = [
  ['Gyms & Fitness Centers', 'Automate trial inquiries, class questions, membership follow-ups and consultation bookings.', '🏋'],
  ['Clinics', 'Coordinate patient inquiries, appointment requests, reminders and front-desk communication workflows.', '✚'],
  ['Salons', 'Streamline service questions, booking requests, reminders and repeat-customer reactivation.', '✂'],
  ['Restaurants', 'Handle booking requests, event leads, menu questions and customer follow-up messages.', '◍'],
  ['Real Estate', 'Capture property inquiries, qualify buyers or tenants and trigger fast follow-up sequences.', '⌂'],
  ['Service Businesses', 'Respond to quote requests, schedule visits and keep every customer conversation organized.', '⚙']
]

export const trustPillars = [
  ['Custom automation systems', 'Designed around your real workflow instead of forcing a one-size-fits-all template.'],
  ['Secure integrations', 'Built with practical data handling, scoped platform access and no frontend API keys.'],
  ['Reliable workflows', 'Clear triggers, fallbacks and testing paths help each automation run predictably.'],
  ['Human-centered AI', 'AI supports your team while important interactions can still be reviewed or escalated.'],
  ['Scalable architecture', 'Systems can start focused and expand across more channels as your operations grow.'],
  ['Ongoing optimization', 'Automations can be measured, refined and improved as your business learns what works.']
]

export const integrations = ['WhatsApp', 'Google Calendar', 'Google Sheets', 'CRM Systems', 'AI Voice Systems', 'Website Chatbots', 'Automation Workflows', 'APIs']

export const gymDemo = [
  'New visitor submits inquiry',
  'Lead automatically enters CRM',
  'AI assistant qualifies lead',
  'AI voice agent follows up',
  'Customer selects appointment',
  'Calendar booking created',
  'Automated reminders sent'
]

export { Icon }
