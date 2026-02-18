type FAQAnswer = string | { __html: string }

interface FAQItem {
  id: number
  question: string
  answer: FAQAnswer
}

export const faq: FAQItem[] = [
  {
    id: 1,
    question: 'What is Strangeways?',
    answer: {
      __html:
        "Strangeways is a software development agency based in British Columbia, Canada. It was founded by Andrew Halliwell in 2007 after working in e-commerce in London, UK. It is affiliated with <a href='https://strangeways.co' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline dark:text-blue-400'>a recording studio by the same name</a> on Vancouver Island, which was also founded by Andrew in 2015.",
    },
  },
  {
    id: 2,
    question: 'Do you use Shopify or other site builders?',
    answer:
      "We don't. We deliver fully custom solutions tailored to your requirements, with performance, accessibility, and long-term scalability that off-the-shelf site builders can't reliably provide.",
  },
  {
    id: 3,
    question: 'Do you outsource work overseas?',
    answer:
      'No. Our team is Canada-based. We keep your code, data, and project management in-house to maintain rigorous quality standards and protect your privacy.',
  },
  {
    id: 4,
    question: 'Do I own the code and IP?',
    answer:
      'Yes. Upon payment, you own the deliverables and IP, with access to the repository and documentation.',
  },
  {
    id: 5,
    question: 'How do you handle security and compliance?',
    answer:
      'We follow secure SDLC practices, enforce code reviews, and leverage well-maintained dependencies. We can align with SOC 2/GDPR requirements as needed.',
  },
  {
    id: 6,
    question: 'Will my site be accessible and SEO-friendly?',
    answer:
      'Yes. We build to WCAG best practices, optimize performance (Core Web Vitals), and implement technical SEO fundamentals from day one.',
  },
  {
    id: 7,
    question: 'Do you provide hosting and DevOps?',
    answer:
      'We can host or work with your infrastructure. We recommend modern CI/CD, monitored environments, and sensible scaling policies.',
  },
  {
    id: 8,
    question: 'How do you communicate during the project?',
    answer:
      'A dedicated point of contact, weekly check-ins, and a shared project board for tasks, timelines, and deliverables.',
  },
  {
    id: 9,
    question: 'What happens after launch?',
    answer:
      'Optional support plans covering monitoring, bug fixes, updates, and incremental improvements. SLAs available.',
  },
  {
    id: 10,
    question: 'How do you handle change requests?',
    answer:
      'We assess impact, update scope and timelines transparently, and proceed only with your approval.',
  },
  {
    id: 11,
    question: 'Can you work with my in-house team?',
    answer:
      'Absolutely. We can collaborate, integrate with your workflows, and contribute to your repos and CI/CD.',
  },
  {
    id: 12,
    question: 'Do you guarantee your work?',
    answer:
      'We provide a post-launch warranty window for critical bug fixes and stand behind our code quality.',
  },
]
