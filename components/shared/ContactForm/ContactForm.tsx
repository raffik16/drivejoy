'use client';

import { useState } from 'react';
import styles from './ContactForm.module.scss';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
        break;
      case 'subject':
        if (!value.trim()) return 'Please select a subject';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        break;
    }
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
    
    setFocusedField(null);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFocusedField(e.target.name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setStatusMessage(data.message || 'Thank you for your message! We\'ll get back to you within 24 hours.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = !Object.values(errors).some(error => error) && 
    formData.name.trim() && 
    formData.email.trim() && 
    formData.subject.trim() && 
    formData.message.trim();

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Questions? We're Here to Help</h2>
          <p className={styles.subtitle}>
            Get in touch with our team of sports analytics experts and we'll get back to you within 24 hours
          </p>
        </div>

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholder="Enter your full name"
                    className={`${styles.input} ${
                      errors.name ? styles.inputError : ''
                    } ${
                      focusedField === 'name' ? styles.inputFocused : ''
                    }`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    disabled={isLoading}
                    autoComplete="name"
                  />
                </div>
                {errors.name && (
                  <span id="name-error" className={styles.errorMessage} role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address <span className={styles.required}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    placeholder="your@email.com"
                    className={`${styles.input} ${
                      errors.email ? styles.inputError : ''
                    } ${
                      focusedField === 'email' ? styles.inputFocused : ''
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    disabled={isLoading}
                    autoComplete="email"
                  />
                </div>
                {errors.email && (
                  <span id="email-error" className={styles.errorMessage} role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                What can we help you with? <span className={styles.required}>*</span>
              </label>
              <div className={styles.selectWrapper}>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  className={`${styles.select} ${
                    errors.subject ? styles.inputError : ''
                  } ${
                    focusedField === 'subject' ? styles.inputFocused : ''
                  }`}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  disabled={isLoading}
                >
                  <option value="">Choose a topic...</option>
                  <option value="General Question">General Question</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Billing & Pricing">Billing & Pricing</option>
                  <option value="Predictions & Analytics">Predictions & Analytics</option>
                  <option value="Account Management">Account Management</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="Partnership">Partnership Opportunities</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {errors.subject && (
                <span id="subject-error" className={styles.errorMessage} role="alert">
                  {errors.subject}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message <span className={styles.required}>*</span>
              </label>
              <div className={styles.textareaWrapper}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  placeholder="Tell us how we can help you. Please provide as much detail as possible..."
                  className={`${styles.textarea} ${
                    errors.message ? styles.inputError : ''
                  } ${
                    focusedField === 'message' ? styles.inputFocused : ''
                  }`}
                  rows={6}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                  disabled={isLoading}
                />
                <div className={styles.textareaCounter}>
                  {formData.message.length}/500
                </div>
              </div>
              {errors.message && (
                <span id="message-error" className={styles.errorMessage} role="alert">
                  {errors.message}
                </span>
              )}
              <span id="message-hint" className={styles.hint}>
                Minimum 10 characters. Be specific about your question or issue for the best response.
              </span>
            </div>

            {status !== 'idle' && (
              <div className={`${styles.statusMessage} ${styles[status]}`} role="alert">
                <div className={styles.statusIcon}>
                  {status === 'success' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="15" y1="9" x2="9" y2="15"/>
                      <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                  )}
                </div>
                <span>{statusMessage}</span>
              </div>
            )}

            <button
              type="submit"
              className={`${styles.submitButton} ${
                isFormValid && !isLoading ? styles.submitButtonActive : ''
              }`}
              disabled={isLoading || !isFormValid}
              aria-describedby="submit-help"
            >
              {isLoading ? (
                <>
                  <span className={styles.spinner} aria-hidden="true"></span>
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                </>
              )}
            </button>
            <p id="submit-help" className={styles.submitHelp}>
              By submitting this form, you agree to our terms of service and privacy policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}