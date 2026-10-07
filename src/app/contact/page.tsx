"use client";

import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacyConsent: false,
    honeypot: "", // Spam prevention field
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message content is required.";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide at least 20 characters of detail.";
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = "You must accept the privacy policy to submit.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection
    if (formData.honeypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    setSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 space-y-10">
      <Breadcrumb items={[{ label: "Contact", href: "/contact" }]} />

      <header className="space-y-4 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
          Reader &amp; Editorial Inquiries
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Contact BrassSmile Editorial Desk
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          We welcome reader inquiries, editorial feedback, topic suggestions, and factual corrections. Please complete the form below, and our research desk will review your inquiry.
        </p>
      </header>

      {/* Important Medical Advice Notice */}
      <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-xs text-amber-950 leading-relaxed">
        <strong className="block text-amber-900 font-bold mb-1">Notice Regarding Clinical Questions:</strong>
        BrassSmile is an informational publisher and does not provide individual clinical advice, dental diagnoses, or medical second opinions. For urgent dental pain, acute trauma, or specific symptom diagnosis, please contact a licensed dentist or local emergency dental clinic immediately.
      </div>

      {submitted ? (
        <div className="rounded-2xl border border-emerald-300 bg-emerald-50/70 p-8 text-center space-y-4 shadow-sm animate-in fade-in duration-300" role="status">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-2xl font-bold">
            ✓
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Inquiry Successfully Transmitted
          </h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to the BrassSmile editorial desk. We have received your correspondence and will evaluate your feedback in accordance with our editorial review schedule.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
                privacyConsent: false,
                honeypot: "",
              });
            }}
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition-colors"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          {/* Honeypot field for bot spam */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website-trap">Leave this blank</label>
            <input
              type="text"
              id="website-trap"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                aria-required="true"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full rounded-xl border px-3.5 py-2.5 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors ${
                  errors.name ? "border-rose-400 bg-rose-50/30" : "border-slate-300 bg-white"
                }`}
                placeholder="Jane Doe"
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-rose-600 font-medium">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full rounded-xl border px-3.5 py-2.5 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors ${
                  errors.email ? "border-rose-400 bg-rose-50/30" : "border-slate-300 bg-white"
                }`}
                placeholder="jane@example.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-rose-600 font-medium">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Inquiry Subject <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className={`w-full rounded-xl border px-3.5 py-2.5 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors ${
                errors.subject ? "border-rose-400 bg-rose-50/30" : "border-slate-300 bg-white"
              }`}
              placeholder="e.g. Editorial Feedback on Enamel Guide"
            />
            {errors.subject && (
              <p id="subject-error" className="mt-1 text-xs text-rose-600 font-medium">
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Message Content <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              aria-required="true"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full rounded-xl border px-3.5 py-2.5 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors ${
                errors.message ? "border-rose-400 bg-rose-50/30" : "border-slate-300 bg-white"
              }`}
              placeholder="Please provide clear details regarding your question, suggestion, or correction..."
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-rose-600 font-medium">
                {errors.message}
              </p>
            )}
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="space-y-1">
            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id="privacyConsent"
                name="privacyConsent"
                checked={formData.privacyConsent}
                onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
              />
              <label htmlFor="privacyConsent" className="text-xs text-slate-600 leading-relaxed">
                I understand that this message is directed to an informational publishing desk and not a dental clinic. I have read and agree to the{" "}
                <a href="/privacy-policy" className="font-semibold text-amber-900 underline">Privacy Policy</a> and{" "}
                <a href="/disclaimer" className="font-semibold text-amber-900 underline">Medical Disclaimer</a>.
              </label>
            </div>
            {errors.privacyConsent && (
              <p className="text-xs text-rose-600 font-medium">
                {errors.privacyConsent}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 transition-all"
            >
              {submitting ? "Transmitting..." : "Send Message to Editorial Desk"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
