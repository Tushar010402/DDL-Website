'use client';

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { FaQuestionCircle, FaCheckCircle, FaSyncAlt, FaTimesCircle, FaPaperPlane } from 'react-icons/fa';

// Fixed subject tag: the backend uses it to route acknowledgement emails and
// the CRM uses it to list Alzheimer queries separately in Reports.
const ALZ_QUERY_SUBJECT = "Alzheimer's (Dendrite Dx) Query";

const inputBase =
  'w-full rounded-[12px] border bg-white px-4 py-3 text-[15px] text-[#1f1f1f] outline-none transition placeholder:text-[#9a9a9a] focus:border-[#d9242a] focus:ring-[3px] focus:ring-[rgba(217,36,42,0.14)]';
const ok = 'border-[#e7dede]';
const bad = 'border-[#d9242a]';
const labelCls = 'mb-1.5 block text-[13.5px] font-semibold text-[#3a3a3a]';
const reqCls = 'text-[#d9242a]';
const errCls = 'mt-1 text-[12.5px] font-medium text-[#d9242a]';

const AlzheimersQueryForm = ({ compact = false }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', question: '' });
  const [errors, setErrors] = useState({});
  const [captcha, setCaptcha] = useState({ question: '', answer: '' });
  const [userCaptcha, setUserCaptcha] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  // Honeypot: hidden field real users never fill
  const [website, setWebsite] = useState('');

  const generateCaptcha = useCallback(() => {
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    setCaptcha({ question: `${num1} × ${num2} = ?`, answer: String(num1 * num2) });
    setUserCaptcha('');
  }, []);

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!/^\d{10}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit mobile number.';
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.question.trim()) e.question = 'Please type your question.';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const newErrors = validate();
    setErrors((prev) => ({ ...prev, ...newErrors }));
    if (Object.keys(newErrors).length) return;

    if (userCaptcha.trim() !== captcha.answer) {
      setErrors((prev) => ({ ...prev, captcha: 'Incorrect answer. Please try again.' }));
      generateCaptcha();
      return;
    }

    if (website) {
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    try {
      await axios.post('https://backend.dangsccg.co.in/api/api/enquiries/', {
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: ALZ_QUERY_SUBJECT,
        comment: form.question,
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err?.response?.status === 429
          ? 'Too many requests. Please try again in a minute.'
          : 'Could not send your question. Please try again.'
      );
      generateCaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-[18px] border border-[#f5d2d3] bg-white p-7 text-center shadow-[0_10px_28px_rgba(217,36,42,0.10)]">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fff4f4] text-[24px] text-[#d9242a]">
          <FaCheckCircle aria-hidden="true" />
        </div>
        <h3 className="mb-1 text-[19px] font-extrabold text-[#1f1f1f]">Thanks for your question!</h3>
        <p className="text-[14px] text-[#5e5e5e]">
          Our team will reach out to you on your phone or email, usually within 1 working day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-[18px] border border-[#f0eaea] bg-white shadow-[0_10px_28px_rgba(217,36,42,0.08)] ${compact ? 'p-5 sm:p-6' : 'p-6 sm:p-8'}`}
    >
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {!compact && (
        <div className="mb-5 flex items-center gap-2.5">
          <FaQuestionCircle aria-hidden="true" className="text-[20px] text-[#d9242a]" />
          <h3 className="text-[19px] font-extrabold tracking-[-0.3px] text-[#1f1f1f]">
            Have a question about the Alzheimer&rsquo;s test?
          </h3>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label className={labelCls}>Name<span className={reqCls}>*</span></label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`${inputBase} ${errors.name ? bad : ok}`}
          />
          {errors.name && <p className={errCls}>{errors.name}</p>}
        </div>
        <div>
          <label className={labelCls}>Mobile Number<span className={reqCls}>*</span></label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className={`${inputBase} ${errors.phone ? bad : ok}`}
          />
          {errors.phone && <p className={errCls}>{errors.phone}</p>}
        </div>
        <div>
          <label className={labelCls}>E-mail<span className={reqCls}>*</span></label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`${inputBase} ${errors.email ? bad : ok}`}
          />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
      </div>

      <div className="mt-4">
        <label className={labelCls}>Your question<span className={reqCls}>*</span></label>
        <textarea
          name="question"
          value={form.question}
          onChange={handleChange}
          rows={3}
          placeholder="Type your question about the Alzheimer's (Dendrite Dx) test…"
          className={`${inputBase} ${errors.question ? bad : ok} resize-y`}
        />
        {errors.question && <p className={errCls}>{errors.question}</p>}
      </div>

      <div className="mt-4">
        <label className={labelCls}>Verification<span className={reqCls}>*</span></label>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-3 rounded-[12px] border border-[#f0d8d9] bg-[#fff4f4] px-4 py-2.5">
            <span className="select-none text-[17px] font-extrabold tracking-[2px] text-[#d9242a]">
              {captcha.question}
            </span>
            <button
              type="button"
              onClick={generateCaptcha}
              aria-label="Refresh captcha"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#d9242a] transition hover:rotate-180"
            >
              <FaSyncAlt aria-hidden="true" />
            </button>
          </div>
          <input
            type="text"
            inputMode="numeric"
            value={userCaptcha}
            onChange={(e) => {
              setUserCaptcha(e.target.value);
              setErrors((prev) => ({ ...prev, captcha: '' }));
            }}
            placeholder="Enter the answer"
            className={`${inputBase} ${errors.captcha ? bad : ok} max-w-[190px]`}
          />
        </div>
        {errors.captcha && <p className={errCls}>{errors.captcha}</p>}
      </div>

      {submitError && (
        <div className="mt-4 flex items-start gap-2.5 rounded-[12px] border border-[#d9242a] bg-[#fff4f4] px-4 py-3 text-[13.5px] font-semibold text-[#b81e23]">
          <FaTimesCircle aria-hidden="true" className="mt-0.5 flex-shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-[#d9242a] to-[#b81e23] px-7 py-[13px] text-[14px] font-bold uppercase tracking-[1px] text-white shadow-[0_10px_24px_rgba(217,36,42,0.30)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Sending…' : (<><FaPaperPlane aria-hidden="true" /> Send Question</>)}
      </button>
    </form>
  );
};

export default AlzheimersQueryForm;
