'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './Subscribe.module.css';

const BACKEND = 'https://backend.dangsccg.co.in/api/subscribe/';
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

const formatWhatsapp = (raw) => raw.replace(/\D/g, '').slice(0, 10);

/** Load the reCAPTCHA v3 script once and resolve when ready. */
function useRecaptcha() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) { setReady(true); return; }

    // If already loaded by a previous mount, mark ready immediately.
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => setReady(true));
      return;
    }

    // Safety timeout — if the script never loads (blocked, slow network),
    // still enable the button so users are not permanently locked out.
    const fallback = setTimeout(() => setReady(true), 6000);

    const id = 'recaptcha-script';
    if (!document.getElementById(id)) {
      const s = document.createElement('script');
      s.id = id;
      s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      s.async = true;
      s.onload = () => {
        clearTimeout(fallback);
        window.grecaptcha.ready(() => setReady(true));
      };
      s.onerror = () => { clearTimeout(fallback); setReady(true); };
      document.head.appendChild(s);
    } else {
      // Script tag exists but not yet loaded — poll until ready.
      const poll = setInterval(() => {
        if (window.grecaptcha) {
          clearInterval(poll);
          clearTimeout(fallback);
          window.grecaptcha.ready(() => setReady(true));
        }
      }, 200);
      return () => { clearInterval(poll); clearTimeout(fallback); };
    }

    return () => clearTimeout(fallback);
  }, []);

  const getToken = useCallback(async (action = 'subscribe') => {
    if (!RECAPTCHA_SITE_KEY) return '';
    if (!window.grecaptcha) return ''; // script never loaded — graceful skip
    return new Promise((resolve) => {
      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
          resolve(token || '');
        } catch {
          resolve('');
        }
      });
    });
  }, []);

  return { ready, getToken };
}

export default function SubscribePage() {
  const [step, setStep] = useState('form'); // 'form' | 'success'
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const { ready: captchaReady, getToken } = useRecaptcha();

  const [audience, setAudience] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!audience) errs.audience = 'Please choose who you are.';
    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (phone && phone.replace(/\D/g, '').length !== 10) {
      errs.phone = 'WhatsApp number must be 10 digits.';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    const errs = validate();
    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    try {
      const captchaToken = await getToken('subscribe');
      const body = {
        audience_type: audience,
        email: email.trim().toLowerCase(),
        name: name.trim(),
        whatsapp: phone.replace(/\D/g, ''),
        captcha: captchaToken,
      };
      const resp = await fetch(BACKEND, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await resp.json().catch(() => ({}));
      if (resp.status === 201) {
        setStep('success');
      } else if (resp.status === 409) {
        setServerError(data?.message || 'This email is already subscribed.');
      } else if (resp.ok) {
        setStep('success');
      } else {
        const msg = data?.message || data?.detail || (data?.errors ? Object.values(data.errors).flat().join(' ') : null) || 'Something went wrong. Please try again.';
        setServerError(msg);
      }
    } catch {
      setServerError('Could not connect to the server. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (step === 'success') {
    return (
      <div className={styles.successPage}>
        <div className={styles.successCard}>
          {/* Top accent bar */}
          <div className={styles.successBar} />

          {/* Logo */}
          <div className={styles.successLogo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://drdangslab.com/PhotosAndLogos/LogoOnNavbar.JPG"
              alt="Dr. Dangs Lab"
              height={52}
              style={{ height: 52, width: 'auto', display: 'block' }}
            />
          </div>

          {/* Check circle */}
          <div className={styles.successCircle}>
            <svg viewBox="0 0 52 52" fill="none" width="52" height="52">
              <circle cx="26" cy="26" r="26" fill="#d9242a" />
              <path d="M14 26l9 9 15-15" stroke="#fff" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1 className={styles.successTitle}>You&apos;re subscribed!</h1>

          <p className={styles.successMsg}>
            Thank you, <strong>{name || email || 'friend'}</strong>!<br />
            A welcome email is on its way to <strong>{email}</strong>.
          </p>

          {/* What's next strip */}
          <div className={styles.successBenefits}>
            {[
              'Expert health tips & diagnostic insights',
              'Seasonal health alerts & preventive advice',
              'Exclusive lab packages & offers',
            ].map((b) => (
              <div key={b} className={styles.successBenefit}>
                <span className={styles.successCheck}>✓</span>
                {b}
              </div>
            ))}
          </div>

          {phone && (
            <p className={styles.successNote}>
              📱 We&apos;ll also reach you on WhatsApp for important alerts.
            </p>
          )}

          <a href="https://www.drdangslab.com" className={styles.homeBtn}>
            Explore Dr. Dangs Lab →
          </a>

          <p className={styles.successFooter}>
            © 2026 Dr. Dangs Lab &nbsp;·&nbsp; +91 99999 92020
          </p>

          <div className={styles.successBar} style={{ marginTop: 'auto' }} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>Free newsletter</div>
          <h1 className={styles.heroTitle}>
            Stay ahead with<br />
            <span className={styles.heroAccent}>expert health insights</span>
          </h1>
          <p className={styles.heroSub}>
            Join thousands of patients and physicians who trust Dr. Dangs Lab
            for accurate health guidance, lab updates and wellness tips —
            delivered straight to your inbox.
          </p>
          <div className={styles.heroPoints}>
            <div className={styles.heroPoint}>
              <span className={styles.heroPointDot} />
              Latest diagnostic updates &amp; new tests
            </div>
            <div className={styles.heroPoint}>
              <span className={styles.heroPointDot} />
              Seasonal health alerts &amp; preventive tips
            </div>
            <div className={styles.heroPoint}>
              <span className={styles.heroPointDot} />
              Exclusive health packages &amp; offers
            </div>
          </div>
        </div>
      </div>

      {/* Form card */}
      <div className={styles.formWrap}>
        <div className={styles.card}>
          <div className={styles.cardHead}>
            <h2 className={styles.cardTitle}>Subscribe now</h2>
            <p className={styles.cardSub}>It's free. Unsubscribe anytime.</p>
          </div>

          <form onSubmit={handleSubmit} noValidate>

            {/* Audience — required */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>
                I am a <span className={styles.required}>*</span>
              </label>
              <div className={styles.audienceRow}>
                {[
                  { value: 'patient', label: 'Patient / Client', icon: '🩺' },
                  { value: 'physician', label: 'Physician / Doctor', icon: '👨‍⚕️' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    className={`${styles.audienceBtn} ${audience === opt.value ? styles.audienceBtnActive : ''}`}
                    onClick={() => { setAudience(opt.value); setFieldErrors((e) => ({ ...e, audience: undefined })); }}
                  >
                    <span className={styles.audienceIcon}>{opt.icon}</span>
                    {opt.label}
                  </button>
                ))}
              </div>
              {fieldErrors.audience && <p className={styles.fieldError}>{fieldErrors.audience}</p>}
            </div>

            {/* Email — required */}
            <div className={styles.fieldGroup}>
              <label htmlFor="sub-email" className={styles.fieldLabel}>
                Email address <span className={styles.required}>*</span>
              </label>
              <input
                id="sub-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setFieldErrors((prev) => ({ ...prev, email: undefined })); }}
                className={`${styles.input} ${fieldErrors.email ? styles.inputError : ''}`}
              />
              {fieldErrors.email && <p className={styles.fieldError}>{fieldErrors.email}</p>}
            </div>

            {/* Name — optional */}
            <div className={styles.fieldGroup}>
              <label htmlFor="sub-name" className={styles.fieldLabel}>
                Your name <span className={styles.optional}>(optional)</span>
              </label>
              <input
                id="sub-name"
                type="text"
                autoComplete="name"
                placeholder="Dr. Priya Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
              />
            </div>

            {/* WhatsApp — optional */}
            <div className={styles.fieldGroup}>
              <label htmlFor="sub-phone" className={styles.fieldLabel}>
                WhatsApp number <span className={styles.optional}>(optional)</span>
              </label>
              <div className={styles.phoneWrap}>
                <span className={styles.phonePrefix}>+91</span>
                <input
                  id="sub-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="98765 43210"
                  value={phone}
                  maxLength={10}
                  onChange={(e) => { setPhone(formatWhatsapp(e.target.value)); setFieldErrors((prev) => ({ ...prev, phone: undefined })); }}
                  className={`${styles.inputPhone} ${fieldErrors.phone ? styles.inputError : ''}`}
                />
              </div>
              {fieldErrors.phone
                ? <p className={styles.fieldError}>{fieldErrors.phone}</p>
                : <p className={styles.fieldHint}>For important alerts via WhatsApp (optional).</p>
              }
            </div>

            {serverError && (
              <div className={styles.serverError}>{serverError}</div>
            )}

            {/* Visible reCAPTCHA badge — required by Google ToS when using v3 */}
            {RECAPTCHA_SITE_KEY && (
              <div className={styles.recaptchaBadge}>
                <svg width="24" height="24" viewBox="0 0 64 64" fill="none" className={styles.recaptchaLogo}>
                  <path d="M32 4L8 16v16c0 13.3 10.3 25.7 24 29 13.7-3.3 24-15.7 24-29V16L32 4z" fill="#4A90D9"/>
                  <path d="M32 4L8 16v16c0 13.3 10.3 25.7 24 29V4z" fill="#1A73E8"/>
                  <path d="M22 32l7 7 13-13" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className={styles.recaptchaText}>
                  <span>Protected by <strong>reCAPTCHA</strong></span>
                  <span className={styles.recaptchaLinks}>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
                    {' · '}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms</a>
                  </span>
                </div>
              </div>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={submitting || !captchaReady}
            >
              {submitting ? (
                <span className={styles.btnSpinner} />
              ) : (
                <>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Subscribe for free
                </>
              )}
            </button>

            <p className={styles.legal}>
              By subscribing you agree to receive health newsletters from Dr. Dangs Lab.
              We never share your information. Unsubscribe anytime.
            </p>
          </form>
        </div>

        {/* Trust strip */}
        <div className={styles.trustStrip}>
          <div className={styles.trustItem}>
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" className={styles.trustIcon}>
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            No spam, ever
          </div>
          <div className={styles.trustItem}>
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" className={styles.trustIcon}>
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 016 0v1h2V7a5 5 0 00-5-5z" />
            </svg>
            Your data is private
          </div>
          <div className={styles.trustItem}>
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18" className={styles.trustIcon}>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Unsubscribe anytime
          </div>
        </div>
      </div>
    </div>
  );
}
