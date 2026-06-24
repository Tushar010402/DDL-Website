'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';

const TIME_SLOTS = [
  '07:00-09:00',
  '09:00-11:00',
  '11:00-13:00',
  '14:00-16:00',
  '16:00-18:00',
];

const GENDER_OPTIONS = ['Male', 'Female', 'Other'];

// Returns today's date in IST as YYYY-MM-DD
function getISTDateString() {
  const now = new Date();
  const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  const y = ist.getFullYear();
  const m = String(ist.getMonth() + 1).padStart(2, '0');
  const d = String(ist.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// Returns the minimum selectable date:
// If IST time >= 17:00, tomorrow; otherwise today
function getMinDate() {
  const now = new Date();
  const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  if (ist.getHours() >= 17) {
    ist.setDate(ist.getDate() + 1);
  }
  const y = ist.getFullYear();
  const m = String(ist.getMonth() + 1).padStart(2, '0');
  const d = String(ist.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// Returns max date string (1 year from today)
function getMaxDate() {
  const now = new Date();
  const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  ist.setFullYear(ist.getFullYear() + 1);
  const y = ist.getFullYear();
  const m = String(ist.getMonth() + 1).padStart(2, '0');
  const d = String(ist.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// Check if a YYYY-MM-DD string is a Sunday
function isSunday(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.getDay() === 0;
}

// Turn DRF error payloads into a readable string
function parseServerError(data) {
  if (!data) return 'An error occurred. Please try again.';
  if (typeof data === 'string') return data;
  if (data.message) return data.message;
  if (data.error) return data.error;
  if (data.detail) return data.detail;
  const parts = [];
  Object.entries(data).forEach(([field, msgs]) => {
    const msg = Array.isArray(msgs) ? msgs.join(' ') : String(msgs);
    parts.push(field === 'non_field_errors' ? msg : `${field.replace(/_/g, ' ')}: ${msg}`);
  });
  return parts.length ? parts.join(' | ') : 'An error occurred. Please try again.';
}

const INITIAL_FORM = {
  patient_name: '',
  mobile_number: '',
  patient_email: '',
  gender: '',
  date_for_collection: '',
  preferred_time: '',
  test_package_name: '',
  address: '',
  city: '',
  pincode: '',
  state: '',
  ba_member_id: '',
};

export default function BeyondAgeBookingForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [success, setSuccess] = useState(null); // { bookingId }
  // Honeypot
  const [website, setWebsite] = useState('');

  // Captcha
  const [captcha, setCaptcha] = useState({ question: '', answer: '' });
  const [userCaptcha, setUserCaptcha] = useState('');

  const nameRef = useRef(null);
  const mobileRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const testsRef = useRef(null);
  const addressRef = useRef(null);
  const cityRef = useRef(null);

  const generateCaptcha = useCallback(() => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    setCaptcha({ question: `${a} + ${b} = ?`, answer: String(a + b) });
    setUserCaptcha('');
  }, []);

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  }, []);

  const validate = useCallback(() => {
    const e = {};
    if (!form.patient_name.trim()) e.patient_name = 'Full name is required.';
    if (!/^\d{10}$/.test(form.mobile_number)) e.mobile_number = 'Enter a valid 10-digit mobile number.';
    if (form.patient_email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.patient_email))
      e.patient_email = 'Enter a valid email address.';
    if (!form.gender) e.gender = 'Please select a gender.';
    if (!form.date_for_collection) {
      e.date_for_collection = 'Please select a collection date.';
    } else if (isSunday(form.date_for_collection)) {
      e.date_for_collection = 'Sundays are not available. Please choose another date.';
    } else if (form.date_for_collection < getMinDate()) {
      e.date_for_collection = 'Please select a future date.';
    }
    if (!form.preferred_time) e.preferred_time = 'Please select a time slot.';
    if (!form.test_package_name.trim()) e.test_package_name = 'Please enter the tests / packages required.';
    if (!form.address.trim()) e.address = 'Home collection address is required.';
    if (!form.city.trim()) e.city = 'City is required.';
    if (form.pincode && !/^\d{6}$/.test(form.pincode)) e.pincode = 'Enter a valid 6-digit pincode.';
    return e;
  }, [form]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      const errs = validate();
      setErrors(errs);

      if (Object.keys(errs).length) {
        const refMap = {
          patient_name: nameRef,
          mobile_number: mobileRef,
          date_for_collection: dateRef,
          preferred_time: timeRef,
          test_package_name: testsRef,
          address: addressRef,
          city: cityRef,
        };
        const firstKey = Object.keys(errs)[0];
        refMap[firstKey]?.current?.focus();
        return;
      }

      if (userCaptcha.trim() !== captcha.answer) {
        setErrors((prev) => ({ ...prev, captcha: 'Incorrect answer. Please try again.' }));
        generateCaptcha();
        return;
      }

      // Honeypot: silently discard bot submissions
      if (website) {
        setSuccess({ bookingId: '' });
        return;
      }

      setIsSubmitting(true);
      setSubmitError('');

      try {
        const payload = new FormData();
        payload.append('patient_name', form.patient_name.trim());
        payload.append('mobile_number', form.mobile_number);
        payload.append('patient_email', form.patient_email.trim());
        payload.append('gender', form.gender);
        payload.append('date_for_collection', form.date_for_collection);
        payload.append('preferred_time', form.preferred_time);
        payload.append('test_package_name', form.test_package_name.trim());
        payload.append('address', form.address.trim());
        payload.append('city', form.city.trim());
        payload.append('pincode', form.pincode.trim());
        payload.append('state', form.state.trim());
        payload.append('source', 'beyond_age');
        if (form.ba_member_id.trim()) {
          payload.append('remark', `Beyond Age Member ID: ${form.ba_member_id.trim()}`);
        }

        const res = await fetch('https://backend.dangsccg.co.in/api/bookings/', {
          method: 'POST',
          body: payload,
        });

        let data;
        try {
          data = await res.json();
        } catch {
          data = null;
        }

        if (!res.ok) {
          setSubmitError(parseServerError(data));
          generateCaptcha();
          return;
        }

        setSuccess({ bookingId: data?.Unique_id || data?.id || '' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setForm(INITIAL_FORM);
      } catch (err) {
        setSubmitError('Could not reach the server. Please check your connection and try again.');
        generateCaptcha();
      } finally {
        setIsSubmitting(false);
      }
    },
    [isSubmitting, validate, form, userCaptcha, captcha, generateCaptcha, website]
  );

  // ---- shared style tokens ----
  const inputBase =
    'w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-200';
  const ok = 'border-gray-200';
  const bad = 'border-red-400';
  const labelCls = 'mb-1.5 block text-[13.5px] font-semibold text-gray-700';
  const reqMark = <span className="text-red-500 ml-0.5">*</span>;
  const errCls = 'mt-1 text-[12.5px] font-medium text-red-500';

  // ---- Success state ----
  if (success) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-gradient-to-br from-teal-50 to-emerald-50 px-6 py-20">
        <div className="w-full max-w-md rounded-3xl border border-teal-100 bg-white p-10 text-center shadow-xl">
          {/* Checkmark circle */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-teal-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
          </div>

          <h2 className="mb-2 text-2xl font-extrabold text-gray-900">Booking Confirmed!</h2>
          <p className="text-[15px] text-gray-500">
            Your home collection booking has been submitted to Dr. Dangs Lab. Our team will call you shortly to confirm.
          </p>

          {success.bookingId && (
            <div className="mt-4 rounded-xl border border-teal-100 bg-teal-50 px-4 py-3 text-[14px] font-bold text-teal-800">
              Booking ID: <span className="text-teal-600">#{success.bookingId}</span>
            </div>
          )}

          <div className="mt-5 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-[13.5px] text-gray-600">
            For queries, call <a href="tel:9999992020" className="font-semibold text-teal-600 hover:underline">9999992020</a> or email{' '}
            <a href="mailto:info@drdangslab.com" className="font-semibold text-teal-600 hover:underline">info@drdangslab.com</a>
          </div>

          <button
            onClick={() => setSuccess(null)}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-teal-200 px-7 py-3 text-[14px] font-bold text-teal-700 transition hover:bg-teal-50"
          >
            Book Another Test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-teal-50 via-white to-emerald-50 text-gray-900">

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b border-teal-100 bg-gradient-to-b from-white to-teal-50 px-6 pt-16 pb-12 text-center">
        {/* Logo row */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 shadow-md">
            {/* Beyond Age leaf/pulse icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-6 w-6">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
          <span className="text-[22px] font-black tracking-tight text-gray-800">Beyond Age</span>
          <span className="text-[18px] font-light text-gray-400">×</span>
          <span className="text-[18px] font-bold text-teal-700">Dr. Dangs Lab</span>
        </div>

        <span className="mb-4 inline-block rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[2.5px] text-teal-700">
          Dedicated Diagnostic Booking
        </span>

        <h1 className="mx-auto mb-3 max-w-2xl text-[clamp(26px,4vw,44px)] font-extrabold leading-[1.15] tracking-tight text-gray-900">
          Beyond Age &times; <span className="text-teal-600">Dr. Dangs Lab</span>
        </h1>
        <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-gray-500">
          Book your home collection diagnostic tests through the Beyond Age partnership.
          Our phlebotomist visits at your preferred time — no clinic visits needed.
        </p>

        {/* Trust badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {['4 Decades of Excellence', 'Home Collection', 'Pan-India Network', 'NABL Accredited'].map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1.5 rounded-full border border-teal-100 bg-white px-3 py-1.5 text-[12px] font-semibold text-teal-700 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-teal-500">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* ===== FORM ===== */}
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-10 sm:px-6">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          noValidate
          className="rounded-3xl border border-teal-100 bg-white p-6 shadow-[0_20px_50px_rgba(20,184,166,0.12)] sm:p-9"
        >
          {/* Honeypot — hidden from users, bots fill it */}
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

          {/* Section heading */}
          <div className="mb-7 border-b border-gray-100 pb-5">
            <span className="mb-2 inline-block text-[11px] font-extrabold uppercase tracking-[2.5px] text-teal-600">
              Patient Details
            </span>
            <h2 className="text-[21px] font-extrabold tracking-tight text-gray-900">
              Book Your Home Collection
            </h2>
            <p className="mt-1 text-[14px] text-gray-500">
              Fields marked <span className="text-red-500 font-bold">*</span> are required.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Patient Name */}
            <div>
              <label className={labelCls}>Full Name{reqMark}</label>
              <input
                ref={nameRef}
                type="text"
                name="patient_name"
                value={form.patient_name}
                onChange={handleChange}
                placeholder="Enter patient's full name"
                autoComplete="name"
                className={`${inputBase} ${errors.patient_name ? bad : ok}`}
              />
              {errors.patient_name && <p className={errCls}>{errors.patient_name}</p>}
            </div>

            {/* Mobile */}
            <div>
              <label className={labelCls}>Mobile Number{reqMark}</label>
              <input
                ref={mobileRef}
                type="tel"
                name="mobile_number"
                value={form.mobile_number}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                autoComplete="tel"
                inputMode="numeric"
                maxLength={10}
                className={`${inputBase} ${errors.mobile_number ? bad : ok}`}
              />
              {errors.mobile_number && <p className={errCls}>{errors.mobile_number}</p>}
            </div>

            {/* Email */}
            <div>
              <label className={labelCls}>Email Address <span className="font-normal text-gray-400">(optional)</span></label>
              <input
                type="email"
                name="patient_email"
                value={form.patient_email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                className={`${inputBase} ${errors.patient_email ? bad : ok}`}
              />
              {errors.patient_email && <p className={errCls}>{errors.patient_email}</p>}
            </div>

            {/* Gender */}
            <div>
              <label className={labelCls}>Gender{reqMark}</label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className={`${inputBase} ${errors.gender ? bad : ok} appearance-none`}
              >
                <option value="" disabled hidden>Select gender</option>
                {GENDER_OPTIONS.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              {errors.gender && <p className={errCls}>{errors.gender}</p>}
            </div>

            {/* Date */}
            <div>
              <label className={labelCls}>Collection Date{reqMark}</label>
              <input
                ref={dateRef}
                type="date"
                name="date_for_collection"
                value={form.date_for_collection}
                onChange={handleChange}
                min={getMinDate()}
                max={getMaxDate()}
                className={`${inputBase} ${errors.date_for_collection ? bad : ok}`}
              />
              <p className="mt-1 text-[11.5px] text-gray-400">No Sunday collections. Future dates only.</p>
              {errors.date_for_collection && <p className={errCls}>{errors.date_for_collection}</p>}
            </div>

            {/* Time slot */}
            <div>
              <label className={labelCls}>Preferred Time Slot{reqMark}</label>
              <select
                ref={timeRef}
                name="preferred_time"
                value={form.preferred_time}
                onChange={handleChange}
                className={`${inputBase} ${errors.preferred_time ? bad : ok} appearance-none`}
              >
                <option value="" disabled hidden>Select a time slot</option>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
              {errors.preferred_time && <p className={errCls}>{errors.preferred_time}</p>}
            </div>

            {/* Tests / packages */}
            <div className="sm:col-span-2">
              <label className={labelCls}>Tests / Packages Required{reqMark}</label>
              <textarea
                ref={testsRef}
                name="test_package_name"
                value={form.test_package_name}
                onChange={handleChange}
                placeholder="e.g. CBC, LFT, Vitamin D, Full Body Checkup..."
                rows={3}
                className={`${inputBase} resize-none ${errors.test_package_name ? bad : ok}`}
              />
              {errors.test_package_name && <p className={errCls}>{errors.test_package_name}</p>}
            </div>

            {/* Address */}
            <div className="sm:col-span-2">
              <label className={labelCls}>Home Collection Address{reqMark}</label>
              <input
                ref={addressRef}
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="House / flat no., street, locality"
                autoComplete="street-address"
                className={`${inputBase} ${errors.address ? bad : ok}`}
              />
              {errors.address && <p className={errCls}>{errors.address}</p>}
            </div>

            {/* City */}
            <div>
              <label className={labelCls}>City{reqMark}</label>
              <input
                ref={cityRef}
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="e.g. New Delhi"
                autoComplete="address-level2"
                className={`${inputBase} ${errors.city ? bad : ok}`}
              />
              {errors.city && <p className={errCls}>{errors.city}</p>}
            </div>

            {/* Pincode */}
            <div>
              <label className={labelCls}>
                Pincode <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="6-digit pincode"
                inputMode="numeric"
                maxLength={6}
                className={`${inputBase} ${errors.pincode ? bad : ok}`}
              />
              {errors.pincode && <p className={errCls}>{errors.pincode}</p>}
            </div>

            {/* State */}
            <div>
              <label className={labelCls}>
                State <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="e.g. Delhi"
                autoComplete="address-level1"
                className={`${inputBase} ${ok}`}
              />
            </div>

            {/* Beyond Age Member ID */}
            <div>
              <label className={labelCls}>
                Beyond Age Member ID <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                name="ba_member_id"
                value={form.ba_member_id}
                onChange={handleChange}
                placeholder="e.g. BA-12345"
                className={`${inputBase} ${ok}`}
              />
              <p className="mt-1 text-[11.5px] text-gray-400">Helps us apply any member benefits.</p>
            </div>

          </div>

          {/* ===== Captcha ===== */}
          <div className="mt-8 border-t border-gray-100 pt-6">
            <label className={`${labelCls}`}>
              Verification{reqMark}
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-teal-100 bg-teal-50 px-5 py-3">
                <span className="select-none text-[20px] font-extrabold tracking-wider text-teal-700">
                  {captcha.question}
                </span>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  aria-label="Refresh verification question"
                  title="New question"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-teal-600 shadow-sm transition hover:rotate-180 hover:text-teal-800"
                >
                  {/* Refresh icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clipRule="evenodd" />
                  </svg>
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
                placeholder="Your answer"
                className={`${inputBase} ${errors.captcha ? bad : ok} max-w-[200px]`}
              />
            </div>
            {errors.captcha && <p className={errCls}>{errors.captcha}</p>}
          </div>

          {/* Submit error */}
          {submitError && (
            <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13.5px] font-medium text-red-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 flex-shrink-0">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
              </svg>
              <span>{submitError}</span>
            </div>
          )}

          {/* Submit button */}
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 px-8 py-4 text-[15px] font-bold text-white shadow-[0_10px_28px_rgba(20,184,166,0.38)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(20,184,166,0.5)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  {/* Spinner */}
                  <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  {/* Calendar icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                  </svg>
                  Book Home Collection
                </>
              )}
            </button>
            <p className="text-[12.5px] text-gray-400">
              Our team will confirm your booking via call.
            </p>
          </div>
        </form>

        {/* ===== Footer info ===== */}
        <div className="mt-10 rounded-2xl border border-teal-100 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-[15px] font-extrabold text-gray-800">Need Help?</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <a href="tel:9999992020" className="flex items-center gap-3 rounded-xl border border-teal-100 bg-teal-50 px-4 py-3 text-[13.5px] font-semibold text-teal-800 transition hover:bg-teal-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 flex-shrink-0">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
              9999992020
            </a>
            <a href="mailto:info@drdangslab.com" className="flex items-center gap-3 rounded-xl border border-teal-100 bg-teal-50 px-4 py-3 text-[13.5px] font-semibold text-teal-800 transition hover:bg-teal-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 flex-shrink-0">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
              info@drdangslab.com
            </a>
            <a href="https://www.drdangslab.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-teal-100 bg-teal-50 px-4 py-3 text-[13.5px] font-semibold text-teal-800 transition hover:bg-teal-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 flex-shrink-0">
                <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
              </svg>
              drdangslab.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
