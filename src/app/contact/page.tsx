import type { Metadata } from 'next';

import { ContactForm } from '@/components/contact-form';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Send feedback, questions, corrections, or content requests to DivineSV.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Feedback and Queries"
        title="Contact DivineSV"
        description="Use this page to send feedback, report issues, request content, or ask devotional and website-related questions."
        asideTitle="Best Use Cases"
        asideItems={[
          'Corrections to deity, festival, or stotra content',
          'Suggestions for new PDFs, pages, or temple features',
          'Questions about DivineSV resources and updates',
        ]}
        imageSrc="/images/Temple7.jpg"
        imageAlt="Temple lamp and shrine image for the contact page"
        accentTopImageSrc="/images/Ganesha.jpg"
        accentTopImageAlt="Ganesha accent image for the contact page"
        accentBottomImageSrc="/images/hanuman.jpg"
        accentBottomImageAlt="Hanuman accent image for the contact page"
      />

      <section className="section-spacing">
        <div className="admin-upload-box">
          <h2 className="section-title">Send your message</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
