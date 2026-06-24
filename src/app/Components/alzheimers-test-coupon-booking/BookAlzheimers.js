'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { getBookingRecaptchaToken } from '@/app/utils/bookingRecaptcha';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import {
  FaBrain,
  FaCheckCircle,
  FaCalendarCheck,
  FaSyncAlt,
  FaUpload,
  FaUserMd,
  FaHeartbeat,
  FaUsers,
  FaFlask,
  FaGlobe,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaArrowRight,
  FaTimesCircle,
  FaQuestionCircle,
  FaChevronDown,
} from 'react-icons/fa';
import AlzheimersQueryForm from '../AlzheimersQuery/AlzheimersQueryForm';

const TEST_PACKAGE = 'Alzheimer’s test as per coupon / doctor’s advise';

const genderOptions = ['Male', 'Female', 'Other'];

const DETAIL_URL = 'https://www.drdangslab.com/dendrite-dx-alzheimers-diagnosis-delhi';

// ----- Content data -----
const TERMS = [
  'Only prerequisite is overnight 10–12 hours fasting. Plain water is permitted in the morning.',
  'Sample type is EDTA plasma (blood sample).',
  'Prior appointment/booking is recommended before sample collection.',
  'The voucher is valid for 2 months from the date of issue and is non-transferable.',
  'Test reporting timelines are subject to sample acceptance and quality checks. The final report will be released as per Dr. Dangs Lab reporting protocol.',
  'This voucher is valid only for the two tests/parameters specifically mentioned on the voucher. Any additional tests requested by the patient or prescribing Healthcare Professional (HCP) will be charged separately as per applicable rates.',
  'For any additional tests conducted beyond those covered under this voucher, DDL will issue a separate laboratory report. Communication, coordination, and reporting for such additional tests shall be managed independently from the tests covered under this voucher.',
  'This voucher is valid only when accompanied by a valid prescription issued by a registered Healthcare Professional (HCP).',
  'This voucher cannot be combined, exchanged, or used in conjunction with any other coupon, discount, certificate, promotional offer, or voucher unless otherwise specified by DDL in writing.',
  'The services provided under this voucher are not part of any health insurance benefit, reimbursement program, or cashless claim facility.',
  'By availing services under this voucher, the patient confirms that they have read, understood, and agreed to comply with the terms and conditions stated herein.',
  'DDL reserves the right to modify, withdraw, or terminate the voucher program or its terms and conditions at its sole discretion without prior notice.',
  'This voucher is strictly non-duplicable. Any attempt to reproduce, duplicate, or counterfeit the voucher is illegal.',
];

const WHY_MATTERS = [
  { Icon: FaHeartbeat, text: 'Earlier diagnosis — better outcomes' },
  { Icon: FaUsers, text: 'Expanded access — reach underserved communities with a simple test' },
  { Icon: FaUserMd, text: 'Improved planning — helps families make timely decisions about care & lifestyle' },
  { Icon: FaFlask, text: 'Supports research & trials — enables participation in disease-modifying therapies' },
];

const WHO_SHOULD = [
  'Adults with a family history of Alzheimer’s / dementia',
  'Those with brain fog, memory lapses, or poor concentration',
  'Patients with lifestyle risks (diabetes, hypertension, obesity)',
  'Adults 55+ years for proactive cognitive health',
];

const REDUCE_RISK = [
  'Regular exercise',
  'A balanced diet, like the Mediterranean or MIND diet',
  'Good sleep',
  'Managing conditions such as diabetes, high blood pressure, and cholesterol',
  'Staying socially engaged and mentally active (learning, puzzles, reading)',
  'Reducing stress',
  'Avoid smoking, limit alcohol, and protect against head injuries',
];

const WHY_DDL = [
  '4 decades of diagnostic excellence in India',
  'Available pan-India',
  'Among the first to integrate digital + blood-based Alzheimer’s detection',
  'Patient-centric approach: accessible, affordable & scientifically rigorous',
];

const BookAlzheimers = () => {
  const router = useRouter();

  const initialFormState = {
    test_package_name: TEST_PACKAGE,
    patient_name: '',
    mobile_number: '',
    patient_email: '',
    address: '',
    date_for_collection: null,
    preferred_time: '',
    gender: '',
    age: '',
    user_ip: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [couponFront, setCouponFront] = useState(null);
  const [couponBack, setCouponBack] = useState(null);
  const [couponFrontPreview, setCouponFrontPreview] = useState('');
  const [couponBackPreview, setCouponBackPreview] = useState('');
  const [holidays, setHolidays] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [errors, setErrors] = useState({});
  const [captcha, setCaptcha] = useState({ question: '', answer: '' });
  const [userCaptcha, setUserCaptcha] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [bookingId, setBookingId] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [showQueryForm, setShowQueryForm] = useState(false);
  const [scanProgress, setScanProgress] = useState({ front: null, back: null });
  // Honeypot: hidden field real users never fill; bots that do are dropped silently
  const [website, setWebsite] = useState('');

  const nameRef = useRef(null);
  const mobileRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const ageRef = useRef(null);
  const genderRef = useRef(null);

  // ----- Captcha (multiplication only) -----
  const generateCaptcha = useCallback(() => {
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    setCaptcha({ question: `${num1} × ${num2} = ?`, answer: String(num1 * num2) });
    setUserCaptcha('');
  }, []);

  // ----- User IP -----
  const fetchUserIp = useCallback(async () => {
    try {
      const res = await axios.get('https://api64.ipify.org?format=json');
      setFormData((prev) => ({ ...prev, user_ip: res.data.ip }));
    } catch (err) {
      // non-blocking
    }
  }, []);

  useEffect(() => {
    fetchUserIp();
    generateCaptcha();
  }, [fetchUserIp, generateCaptcha]);

  // ----- Holidays -----
  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const res = await axios.get('https://backend.dangsccg.co.in/api/holidays/');
        setHolidays(res.data.map((h) => new Date(h.date)));
      } catch (err) {
        // non-blocking
      }
    };
    fetchHolidays();
  }, []);

  const isSundayOrHoliday = useCallback(
    (date) =>
      date.getDay() === 0 ||
      holidays.some((h) => format(h, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')),
    [holidays]
  );

  const getMinDate = useCallback(() => {
    const now = new Date();
    const istNow = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    if (istNow.getHours() >= 17) {
      const tomorrow = new Date(istNow);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      return tomorrow;
    }
    istNow.setHours(0, 0, 0, 0);
    return istNow;
  }, []);

  // ----- Time slots -----
  const fetchTimeSlots = useCallback(async (selectedDate) => {
    try {
      const now = new Date();
      const istNow = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const res = await axios.get('https://backend.dangsccg.co.in/api/api/time-slots/', {
        params: {
          date: format(selectedDate, 'yyyy-MM-dd'),
          current_time: format(istNow, 'HH:mm:ss'),
        },
      });
      setAvailableTimeSlots(res.data.time_slots || []);
    } catch (err) {
      setAvailableTimeSlots([]);
    }
  }, []);

  const handleDateChange = useCallback(
    (date) => {
      const selected = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      if (isSundayOrHoliday(selected)) {
        setFormData((prev) => ({ ...prev, date_for_collection: null, preferred_time: '' }));
        setErrors((prev) => ({ ...prev, date_for_collection: 'This date is a holiday or Sunday.' }));
        return;
      }
      setFormData((prev) => ({ ...prev, date_for_collection: selected, preferred_time: '' }));
      setErrors((prev) => ({ ...prev, date_for_collection: '' }));
      fetchTimeSlots(selected);
    },
    [isSundayOrHoliday, fetchTimeSlots]
  );

  // ----- Inputs -----
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  }, []);

  // ----- Coupon uploads (client checks + server-side malware pre-scan) -----
  const handleCouponChange = useCallback((side) => async (e) => {
    const file = e.target.files[0];
    const setFile = side === 'front' ? setCouponFront : setCouponBack;
    const setPreview = side === 'front' ? setCouponFrontPreview : setCouponBackPreview;
    const key = side === 'front' ? 'coupon_front' : 'coupon_back';

    if (!file) {
      setFile(null);
      setPreview('');
      return;
    }

    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
      setErrors((prev) => ({ ...prev, [key]: 'Only JPG, PNG or PDF allowed.' }));
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, [key]: 'File should be less than 5 MB.' }));
      return;
    }

    try {
      setScanProgress((prev) => ({ ...prev, [side]: 0 }));
      const scanData = new FormData();
      scanData.append('file', file);
      const res = await axios.post(
        'https://backend.dangsccg.co.in/api/api/file-scan/',
        scanData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: (progressEvent) => {
            const pct = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setScanProgress((prev) => ({ ...prev, [side]: pct }));
          },
        }
      );
      if (res.data.status !== 'safe') {
        setErrors((prev) => ({ ...prev, [key]: 'The file is potentially harmful and cannot be uploaded.' }));
        return;
      }
      setErrors((prev) => ({ ...prev, [key]: '' }));
      setFile(file);
      setPreview(file.type === 'application/pdf' ? 'pdf' : URL.createObjectURL(file));
    } catch (err) {
      setErrors((prev) => ({ ...prev, [key]: 'Could not verify the file. Please try again.' }));
    } finally {
      setScanProgress((prev) => ({ ...prev, [side]: null }));
    }
  }, []);

  // ----- Validation -----
  const validate = useCallback(() => {
    const e = {};
    if (!formData.patient_name) e.patient_name = 'Name is required.';
    if (!/^\d{10}$/.test(formData.mobile_number)) e.mobile_number = 'Enter a valid 10-digit mobile number.';
    if (!formData.patient_email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.patient_email))
      e.patient_email = 'Enter a valid email address.';
    if (!formData.address) e.address = 'Address is required.';
    if (!formData.date_for_collection) e.date_for_collection = 'Please select a date.';
    if (!formData.preferred_time) e.preferred_time = 'Please select a time slot.';
    if (!formData.gender) e.gender = 'Please select gender.';
    if (!formData.age) e.age = 'Age is required.';
    else if (isNaN(formData.age) || +formData.age < 0 || +formData.age > 120)
      e.age = 'Enter a valid age (0–120).';
    return e;
  }, [formData]);

  // Turn DRF error payloads ({field: [msgs]} or {message: '...'}) into a readable line
  const serverErrorMessage = (err) => {
    const data = err?.response?.data;
    if (!data) return 'An error occurred while submitting the form. Please try again.';
    if (typeof data === 'string') return data;
    if (data.message) return data.message;
    if (data.error) return data.error;
    const parts = [];
    Object.entries(data).forEach(([field, msgs]) => {
      const msg = Array.isArray(msgs) ? msgs.join(' ') : String(msgs);
      parts.push(field === 'non_field_errors' ? msg : `${field.replace(/_/g, ' ')}: ${msg}`);
    });
    return parts.length ? parts.join(' | ') : 'An error occurred while submitting the form. Please try again.';
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      const newErrors = validate();
      setErrors((prev) => ({ ...prev, ...newErrors }));
      if (Object.keys(newErrors).length) {
        const refMap = {
          patient_name: nameRef,
          mobile_number: mobileRef,
          patient_email: emailRef,
          address: addressRef,
          gender: genderRef,
          age: ageRef,
        };
        const first = Object.keys(newErrors)[0];
        refMap[first]?.current?.focus();
        return;
      }

      if (userCaptcha.trim() !== captcha.answer) {
        setErrors((prev) => ({ ...prev, captcha: 'Incorrect answer. Please try again.' }));
        generateCaptcha();
        return;
      }

      // Honeypot filled => almost certainly a bot; pretend success, send nothing
      if (website) {
        setShowThankYou(true);
        return;
      }

      setIsSubmitting(true);
      setSubmitError('');
      try {
        const payload = new FormData();
        // Core booking fields (mirrors Home Collection backend)
        payload.append('patient_name', formData.patient_name);
        payload.append('age', formData.age);
        payload.append('gender', formData.gender);
        payload.append('address', formData.address);
        payload.append('city', '');
        payload.append('state', '');
        payload.append('pincode', '');
        payload.append('mobile_number', formData.mobile_number);
        payload.append('whatsapp_number', '');
        payload.append('patient_email', formData.patient_email);
        payload.append('date_for_collection', format(formData.date_for_collection, 'yyyy-MM-dd'));
        payload.append('preferred_time', formData.preferred_time);
        payload.append('test_package_name', formData.test_package_name);
        payload.append('remark', 'Alzheimer’s (Dendrite Dx) booking');
        payload.append('user_ip', formData.user_ip);
        // Source tag: backend whitelists this value, fires acknowledgement
        // emails server-side and flags the booking in the CRM
        payload.append('source', 'alzheimers');
        // Coupon uploads (front & back)
        if (couponFront) payload.append('coupon_front', couponFront);
        if (couponBack) payload.append('coupon_back', couponBack);
        payload.append('recaptcha_token', await getBookingRecaptchaToken('alzheimers_booking'));

        // The server generates the authoritative booking ID and sends the
        // acknowledgement + internal emails itself
        const res = await axios.post('https://backend.dangsccg.co.in/api/api/bookings/', payload, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        setBookingId(res.data?.Unique_id || '');
        setShowThankYou(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev === 1) {
              clearInterval(timer);
              router.push('/');
            }
            return prev - 1;
          });
        }, 1000);

        setFormData(initialFormState);
        setCouponFront(null);
        setCouponBack(null);
        setCouponFrontPreview('');
        setCouponBackPreview('');
      } catch (err) {
        setSubmitError(serverErrorMessage(err));
        generateCaptcha();
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      isSubmitting,
      validate,
      userCaptcha,
      captcha,
      generateCaptcha,
      formData,
      couponFront,
      couponBack,
      website,
      router,
      initialFormState,
    ]
  );

  // Shared field styles
  const inputBase =
    'w-full rounded-[12px] border bg-white px-4 py-3 text-[15px] text-[#1f1f1f] outline-none transition placeholder:text-[#9a9a9a] focus:border-[#d9242a] focus:ring-[3px] focus:ring-[rgba(217,36,42,0.14)]';
  const ok = 'border-[#e7dede]';
  const bad = 'border-[#d9242a]';
  const labelCls = 'mb-1.5 block text-[13.5px] font-semibold text-[#3a3a3a]';
  const reqCls = 'text-[#d9242a]';
  const errCls = 'mt-1 text-[12.5px] font-medium text-[#d9242a]';

  if (showThankYou) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#fdfbfb] px-6 py-20">
        <div className="w-full max-w-[440px] rounded-[24px] border border-[#f5d2d3] bg-white p-10 text-center shadow-[0_20px_44px_rgba(217,36,42,0.12)]">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#fff4f4] text-[32px] text-[#d9242a]">
            <FaCheckCircle aria-hidden="true" />
          </div>
          <h2 className="mb-2 text-[24px] font-extrabold text-[#1f1f1f]">Thank You!</h2>
          <p className="text-[15px] text-[#5e5e5e]">
            Your Alzheimer’s test booking has been submitted successfully.
          </p>
          {bookingId && (
            <p className="mt-3 rounded-[12px] border border-[#f5d2d3] bg-[#fff4f4] px-4 py-3 text-[14px] font-bold text-[#7a3438]">
              Booking ID: <span className="text-[#d9242a]">#{bookingId}</span>
            </p>
          )}
          <p className="mt-2 text-[14px] text-[#5e5e5e]">
            A confirmation email is on its way to your inbox.
          </p>
          <p className="mt-3 text-[13.5px] font-semibold text-[#d9242a]">
            Redirecting in {countdown} seconds…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fdfbfb] text-[#1f1f1f] font-[Montserrat,'Roboto',sans-serif]">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b border-[#f5d2d3] bg-gradient-to-b from-white to-[#fff5f5] px-6 pt-[72px] pb-12 text-center">
        <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#f5d2d3] bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[2.5px] text-[#d9242a]">
          <FaBrain aria-hidden="true" /> Dendrite Dx · Brain Health
        </span>
        <h1 className="mx-auto mb-3 max-w-[760px] text-[clamp(28px,4.4vw,46px)] font-extrabold leading-[1.12] tracking-[-0.6px]">
          Book Your <span className="text-[#d9242a]">Alzheimer’s Test</span>
        </h1>
        <p className="mx-auto max-w-[560px] text-[15px] leading-[1.7] text-[#5e5e5e]">
          Dr. Dangs Lab · Home Collection — an early, accessible and actionable Alzheimer’s
          assessment, collected at your doorstep across Delhi NCR.
        </p>
      </section>

      <div className="mx-auto max-w-[960px] px-5 pb-24 pt-10 sm:px-6">
        {/* ===== FORM CARD ===== */}
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="rounded-[22px] border border-[#f0eaea] bg-white p-6 shadow-[0_18px_44px_rgba(217,36,42,0.10)] sm:p-9"
        >
          {/* Honeypot: invisible to humans, bots tend to fill it */}
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

          <div className="mb-7 border-b border-[#f1ebeb] pb-5">
            <span className="mb-2 inline-block text-[11.5px] font-extrabold uppercase tracking-[2.5px] text-[#d9242a]">
              Booking details
            </span>
            <h2 className="text-[22px] font-extrabold tracking-[-0.3px]">Patient &amp; booking details</h2>
            <p className="mt-1 text-[14px] text-[#5e5e5e]">Fill in the details below to book your test.</p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Test package (fixed) */}
            <div className="sm:col-span-2">
              <label className={labelCls}>Test</label>
              <div className="flex items-center gap-2.5 rounded-[12px] border border-[#f0d8d9] bg-[#fff4f4] px-4 py-3 text-[15px] font-semibold text-[#7a3438]">
                <FaBrain aria-hidden="true" className="flex-shrink-0 text-[#d9242a]" />
                {TEST_PACKAGE}
              </div>
            </div>

            {/* Name */}
            <div>
              <label className={labelCls}>Name<span className={reqCls}>*</span></label>
              <input
                ref={nameRef}
                type="text"
                name="patient_name"
                value={formData.patient_name}
                onChange={handleChange}
                placeholder="Enter full name"
                className={`${inputBase} ${errors.patient_name ? bad : ok}`}
              />
              {errors.patient_name && <p className={errCls}>{errors.patient_name}</p>}
            </div>

            {/* Mobile */}
            <div>
              <label className={labelCls}>Mobile Number<span className={reqCls}>*</span></label>
              <input
                ref={mobileRef}
                type="tel"
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className={`${inputBase} ${errors.mobile_number ? bad : ok}`}
              />
              {errors.mobile_number && <p className={errCls}>{errors.mobile_number}</p>}
            </div>

            {/* Email */}
            <div>
              <label className={labelCls}>E-mail<span className={reqCls}>*</span></label>
              <input
                ref={emailRef}
                type="email"
                name="patient_email"
                value={formData.patient_email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`${inputBase} ${errors.patient_email ? bad : ok}`}
              />
              {errors.patient_email && <p className={errCls}>{errors.patient_email}</p>}
            </div>

            {/* Gender */}
            <div>
              <label className={labelCls}>Select Gender<span className={reqCls}>*</span></label>
              <select
                ref={genderRef}
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`${inputBase} ${errors.gender ? bad : ok} appearance-none`}
              >
                <option value="" disabled hidden>Select gender</option>
                {genderOptions.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              {errors.gender && <p className={errCls}>{errors.gender}</p>}
            </div>

            {/* Address */}
            <div className="sm:col-span-2">
              <label className={labelCls}>Address<span className={reqCls}>*</span></label>
              <input
                ref={addressRef}
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Home collection address"
                className={`${inputBase} ${errors.address ? bad : ok}`}
              />
              {errors.address && <p className={errCls}>{errors.address}</p>}
            </div>

            {/* Date */}
            <div className="ddl-datepicker">
              <label className={labelCls}>Select a date<span className={reqCls}>*</span></label>
              <DatePicker
                selected={formData.date_for_collection}
                onChange={handleDateChange}
                minDate={getMinDate()}
                maxDate={new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)}
                filterDate={(date) => !isSundayOrHoliday(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/YYYY"
                showPopperArrow={false}
                calendarStartDay={1}
                customInput={
                  <input className={`${inputBase} ${errors.date_for_collection ? bad : ok}`} />
                }
              />
              {errors.date_for_collection && <p className={errCls}>{errors.date_for_collection}</p>}
            </div>

            {/* Time slot */}
            <div>
              <label className={labelCls}>Select a time slot<span className={reqCls}>*</span></label>
              <select
                name="preferred_time"
                value={formData.preferred_time}
                onChange={handleChange}
                className={`${inputBase} ${errors.preferred_time ? bad : ok} appearance-none`}
              >
                <option value="" disabled hidden>
                  {formData.date_for_collection ? 'Select a time' : 'Select a date first'}
                </option>
                {availableTimeSlots.map((slot, i) => (
                  <option key={i} value={slot}>{slot}</option>
                ))}
              </select>
              {errors.preferred_time && <p className={errCls}>{errors.preferred_time}</p>}
            </div>

            {/* Age */}
            <div>
              <label className={labelCls}>Age<span className={reqCls}>*</span></label>
              <input
                ref={ageRef}
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                className={`${inputBase} ${errors.age ? bad : ok}`}
              />
              {errors.age && <p className={errCls}>{errors.age}</p>}
            </div>
          </div>

          {/* ===== Coupon uploads ===== */}
          <div className="mt-8 border-t border-[#f1ebeb] pt-6">
            <span className="mb-1 inline-block text-[11.5px] font-extrabold uppercase tracking-[2px] text-[#d9242a]">
              Coupon (optional)
            </span>
            <p className="mb-4 text-[13.5px] text-[#5e5e5e]">
              Have a discount coupon? Upload clear photos of the front and back.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { side: 'front', label: 'Upload Coupon — Front', preview: couponFrontPreview, file: couponFront, key: 'coupon_front' },
                { side: 'back', label: 'Upload Coupon — Back', preview: couponBackPreview, file: couponBack, key: 'coupon_back' },
              ].map((c) => (
                <div key={c.side}>
                  <label className={labelCls}>{c.label}</label>
                  <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-[14px] border-2 border-dashed border-[#f0d8d9] bg-[#fffafa] px-4 py-6 text-center transition hover:border-[#d9242a] hover:bg-[#fff4f4]">
                    {scanProgress[c.side] !== null ? (
                      <span className="flex items-center gap-2 text-[13px] font-semibold text-[#d9242a]">
                        <FaSyncAlt aria-hidden="true" className="animate-spin" />
                        Checking file… {scanProgress[c.side]}%
                      </span>
                    ) : c.preview && c.preview !== 'pdf' ? (
                      <img src={c.preview} alt={`${c.label} preview`} className="h-24 w-auto rounded-md object-contain" />
                    ) : c.preview === 'pdf' ? (
                      <span className="flex items-center gap-2 text-[13px] font-semibold text-[#d9242a]">
                        <FaCheckCircle aria-hidden="true" /> PDF selected
                      </span>
                    ) : (
                      <>
                        <FaUpload aria-hidden="true" className="text-[20px] text-[#d9242a]" />
                        <span className="text-[13px] font-semibold text-[#7a3438]">Click to upload</span>
                        <span className="text-[11.5px] text-[#9a8b8b]">JPG, PNG or PDF · max 5 MB</span>
                      </>
                    )}
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleCouponChange(c.side)}
                      className="hidden"
                    />
                  </label>
                  {c.file && c.preview !== 'pdf' && (
                    <p className="mt-1 truncate text-[12px] text-[#5e5e5e]">{c.file.name}</p>
                  )}
                  {errors[c.key] && <p className={errCls}>{errors[c.key]}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* ===== Captcha (multiplication) ===== */}
          <div className="mt-8 border-t border-[#f1ebeb] pt-6">
            <label className={labelCls}>Verification<span className={reqCls}>*</span></label>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 rounded-[12px] border border-[#f0d8d9] bg-[#fff4f4] px-5 py-3">
                <span className="select-none text-[20px] font-extrabold tracking-[2px] text-[#d9242a]">
                  {captcha.question}
                </span>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  aria-label="Refresh captcha"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#d9242a] transition hover:rotate-180"
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
                className={`${inputBase} ${errors.captcha ? bad : ok} max-w-[220px]`}
              />
            </div>
            {errors.captcha && <p className={errCls}>{errors.captcha}</p>}
          </div>

          {/* ===== Submit ===== */}
          {submitError && (
            <div className="mt-6 flex items-start gap-2.5 rounded-[12px] border border-[#d9242a] bg-[#fff4f4] px-4 py-3 text-[13.5px] font-semibold text-[#b81e23]">
              <FaTimesCircle aria-hidden="true" className="mt-0.5 flex-shrink-0" />
              <span>{submitError}</span>
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-[#d9242a] to-[#b81e23] px-8 py-[16px] text-[15px] font-bold uppercase tracking-[1px] text-white shadow-[0_14px_30px_rgba(217,36,42,0.34)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_38px_rgba(217,36,42,0.46)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? 'Booking…' : (<><FaCalendarCheck aria-hidden="true" /> Book</>)}
          </button>
        </form>

        {/* ===== Have a question instead? ===== */}
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setShowQueryForm((v) => !v)}
            aria-expanded={showQueryForm}
            className="flex w-full items-center justify-between rounded-[18px] border border-[#f0eaea] bg-white px-6 py-4 text-left shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition hover:border-[#f5d2d3]"
          >
            <span className="flex items-center gap-2.5 text-[15.5px] font-bold text-[#1f1f1f]">
              <FaQuestionCircle aria-hidden="true" className="text-[#d9242a]" />
              Have a question instead? Ask us about the Alzheimer&rsquo;s test
            </span>
            <FaChevronDown
              aria-hidden="true"
              className={`text-[#d9242a] transition-transform ${showQueryForm ? 'rotate-180' : ''}`}
            />
          </button>
          {showQueryForm && (
            <div className="mt-4">
              <AlzheimersQueryForm compact />
            </div>
          )}
        </div>

        {/* ===== CONTENT BELOW FORM ===== */}
        <div className="mt-16 space-y-14">
          {/* Why matters */}
          <section>
            <h2 className="relative mb-5 pl-[18px] text-[clamp(22px,3.2vw,30px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
              <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
              Why Alzheimer’s Diagnosis Matters?
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WHY_MATTERS.map((w) => (
                <div key={w.text} className="flex items-start gap-3.5 rounded-[16px] border border-[#f0eaea] bg-white p-5 shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
                  <span className="flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center rounded-[13px] border border-[#f5d2d3] bg-[#fff4f4] text-[17px] text-[#d9242a]">
                    <w.Icon aria-hidden="true" />
                  </span>
                  <p className="m-0 text-[14px] font-medium leading-[1.55] text-[#404040]">{w.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Who should get tested */}
          <section>
            <h2 className="relative mb-5 pl-[18px] text-[clamp(22px,3.2vw,30px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
              <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
              Who Should Get Tested?
            </h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {WHO_SHOULD.map((w) => (
                <li key={w} className="flex items-start gap-2.5 rounded-[12px] bg-[#fff8f8] px-4 py-3 text-[14px] leading-[1.55] text-[#3f3f3f]">
                  <FaCheckCircle aria-hidden="true" className="mt-1 flex-shrink-0 text-[13px] text-[#d9242a]" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Reduce risk */}
          <section>
            <h2 className="relative mb-5 pl-[18px] text-[clamp(22px,3.2vw,30px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
              <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
              Reduce Your Risk of Alzheimer’s with Dr. Dangs Lab
            </h2>
            <p className="mb-4 text-[15px] leading-[1.8] text-[#5e5e5e]">
              You can lower your risk of Alzheimer’s by keeping your brain, body, and heart healthy:
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {REDUCE_RISK.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-[14px] leading-[1.55] text-[#3f3f3f]">
                  <FaCheckCircle aria-hidden="true" className="mt-1 flex-shrink-0 text-[13px] text-[#d9242a]" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-[14px] border border-[#f5d2d3] bg-[#fff4f4] px-5 py-4 text-[14.5px] font-semibold text-[#7a3438]">
              In short: what’s good for your heart is good for your brain.
            </p>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#5e5e5e]">
              The FDA has approved two treatments that slow the progression of early-stage
              Alzheimer’s by clearing amyloid plaques. Very soon, they will be launched in India.
            </p>
          </section>

          {/* Why DDL */}
          <section>
            <h2 className="relative mb-5 pl-[18px] text-[clamp(22px,3.2vw,30px)] font-extrabold leading-[1.24] tracking-[-0.4px]">
              <span aria-hidden="true" className="absolute left-0 top-[5px] bottom-[5px] w-[5px] rounded-[3px] bg-gradient-to-b from-[#d9242a] to-[#b81e23]" />
              Why Dr. Dangs Lab for the Alzheimer Test?
            </h2>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {WHY_DDL.map((w) => (
                <div key={w} className="flex items-start gap-3 rounded-[14px] border border-[#f5d2d3] bg-[#fff4f4] p-5">
                  <FaUserMd aria-hidden="true" className="mt-0.5 flex-shrink-0 text-[18px] text-[#d9242a]" />
                  <p className="m-0 text-[13.5px] leading-[1.6] text-[#7a3438]">{w}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Take charge / get started */}
          <section className="overflow-hidden rounded-[24px] bg-gradient-to-br from-[#d9242a] to-[#b81e23] p-8 text-white shadow-[0_24px_50px_rgba(217,36,42,0.32)] sm:p-10">
            <h2 className="mb-2 text-[clamp(22px,3vw,28px)] font-extrabold tracking-[-0.4px]">
              Take Charge of Your Brain Health Today
            </h2>
            <p className="mb-6 text-[14.5px] font-semibold uppercase tracking-[1.5px] text-white/85">
              How to Get Started
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a href="https://www.drdangslab.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-[14px] bg-white/12 px-5 py-4 text-[14px] font-semibold backdrop-blur transition hover:bg-white/20">
                <FaGlobe aria-hidden="true" className="text-[18px]" /> www.drdangslab.com
              </a>
              <a href="tel:9999992020" className="flex items-center gap-3 rounded-[14px] bg-white/12 px-5 py-4 text-[14px] font-semibold backdrop-blur transition hover:bg-white/20">
                <FaPhoneAlt aria-hidden="true" className="text-[18px]" /> Call us at 9999992020
              </a>
              <a href="mailto:info@drdangslab.com" className="flex items-center gap-3 rounded-[14px] bg-white/12 px-5 py-4 text-[14px] font-semibold backdrop-blur transition hover:bg-white/20">
                <FaEnvelope aria-hidden="true" className="text-[18px]" /> info@drdangslab.com
              </a>
              <div className="flex items-center gap-3 rounded-[14px] bg-white/12 px-5 py-4 text-[14px] font-semibold backdrop-blur">
                <FaHome aria-hidden="true" className="text-[18px]" /> Home collection across Delhi NCR
              </div>
            </div>
          </section>

          {/* Final thought */}
          <section className="rounded-[20px] border border-[#f0eaea] bg-white p-7 text-center shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
            <span className="mb-2 inline-block text-[11.5px] font-extrabold uppercase tracking-[2.5px] text-[#d9242a]">
              Final Thought
            </span>
            <p className="mx-auto max-w-[640px] text-[16px] font-semibold leading-[1.7] text-[#2a2a2a]">
              <span className="text-[#d9242a]">Dendrite Dx</span> — Bridging the Gap in Alzheimer’s
              Detection. Early, Accessible, Actionable.
            </p>

            {/* Read more */}
            <a
              href={DETAIL_URL}
              className="mt-6 inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-[#d9242a] bg-white px-7 py-[13px] text-[14.5px] font-bold text-[#d9242a] transition hover:-translate-y-0.5 hover:bg-[#fff4f4]"
            >
              Read More <FaArrowRight aria-hidden="true" />
            </a>
          </section>

          {/* General Terms & Conditions */}
          <section className="rounded-[22px] border border-[#f0eaea] bg-white p-6 shadow-[0_18px_44px_rgba(217,36,42,0.08)] sm:p-9">
            <div className="mb-6 border-b border-[#f1ebeb] pb-4">
              <span className="mb-1 inline-block text-[11.5px] font-extrabold uppercase tracking-[2.5px] text-[#d9242a]">
                Voucher
              </span>
              <h2 className="text-[20px] font-extrabold tracking-[-0.3px]">General Terms &amp; Conditions</h2>
            </div>
            <ul className="space-y-3">
              {TERMS.map((term, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] leading-[1.65] text-[#3f3f3f]">
                  <FaCheckCircle aria-hidden="true" className="mt-[3px] flex-shrink-0 text-[13px] text-[#d9242a]" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* DatePicker full-width input */}
      <style>{`
        .ddl-datepicker .react-datepicker-wrapper { width: 100%; }
        .react-datepicker__day--selected,
        .react-datepicker__day--keyboard-selected {
          background-color: #d9242a !important;
        }
      `}</style>
    </div>
  );
};

export default BookAlzheimers;
