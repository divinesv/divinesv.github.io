'use client';

import { useState } from 'react';

const formEndpoint = 'https://formspree.io/f/mreoyjkb';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        form.reset();
        setStatus('success');
        setMessage('Your message has been sent. We will review it soon.');
        return;
      }

      const data = (await response.json()) as { errors?: { message: string }[] };
      const errorMessage = data.errors?.map((error) => error.message).join(', ') || 'There was a problem sending your message.';
      setStatus('error');
      setMessage(errorMessage);
    } catch {
      setStatus('error');
      setMessage('There was a problem sending your message.');
    }
  }

  return (
    <form className="contact-form-shell" action={formEndpoint} method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="DivineSV Feedback / Query" />
      <input type="hidden" name="source" value="DivineSV Contact Page" />

      <div className="admin-form-grid">
        <label className="admin-field">
          <span>Name</span>
          <input name="name" required />
        </label>
        <label className="admin-field">
          <span>Email</span>
          <input name="email" type="email" required />
        </label>
        <label className="admin-field admin-field-wide">
          <span>Subject</span>
          <input name="subject" placeholder="Feedback, question, correction, or request" required />
        </label>
        <label className="admin-field admin-field-wide">
          <span>Message</span>
          <textarea name="message" placeholder="Write your feedback or query here..." required />
        </label>
      </div>

      <div className="link-row">
        <button type="submit" className="primary-link admin-button" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {message ? (
        <p className={`admin-status${status === 'error' ? ' admin-status-error' : ''}`}>{message}</p>
      ) : null}
    </form>
  );
}
