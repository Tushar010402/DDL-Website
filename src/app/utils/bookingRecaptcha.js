// Shared reCAPTCHA v3 helper for the public booking forms.
//
// Uses a DEDICATED site key (NEXT_PUBLIC_BOOKING_RECAPTCHA_SITE_KEY) that is
// separate from the newsletter key (NEXT_PUBLIC_RECAPTCHA_SITE_KEY) so the two
// flows never interfere. The matching secret on the backend is
// ANTISPAM_RECAPTCHA_SECRET (see CRMbackendapp/antispam.py).
//
// getBookingRecaptchaToken() lazy-loads the v3 script once, then returns a
// token. It fails OPEN (returns '') if the key is unset or Google is
// unreachable, so a captcha hiccup can never block a real patient's booking.

const SITE_KEY = process.env.NEXT_PUBLIC_BOOKING_RECAPTCHA_SITE_KEY || '';
const SCRIPT_ID = 'booking-recaptcha-script';

function loadScript() {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !SITE_KEY) {
      resolve(false);
      return;
    }
    if (window.grecaptcha && window.grecaptcha.execute) {
      resolve(true);
      return;
    }
    let script = document.getElementById(SCRIPT_ID);
    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
    // Poll briefly for grecaptcha to become ready (script.onload + ready()).
    let waited = 0;
    const tick = () => {
      if (window.grecaptcha && window.grecaptcha.execute) {
        resolve(true);
      } else if (waited >= 5000) {
        resolve(false);
      } else {
        waited += 100;
        setTimeout(tick, 100);
      }
    };
    tick();
  });
}

export async function getBookingRecaptchaToken(action = 'booking') {
  try {
    const ok = await loadScript();
    if (!ok) return '';
    return await new Promise((resolve) => {
      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(SITE_KEY, { action });
          resolve(token || '');
        } catch {
          resolve('');
        }
      });
    });
  } catch {
    return '';
  }
}

export default getBookingRecaptchaToken;
