import React, { useEffect, useState, useCallback } from 'react';
import './sign-in-11-235.css';

/**
 * PUBLIC_INTERFACE
 * SignIn Component
 * This component renders the Sign In screen reconstructed from static assets (sign-in-11-235.html/css/js).
 * - Imports the CSS to match the original design.
 * - Re-implements interactivity (password visibility toggle, simple validation, button handler) using React hooks.
 * - Keeps image asset paths exactly as in the generated assets (e.g., /assets/figmaimages/...).
 */
function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [pwdInvalid, setPwdInvalid] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isValidEmail = useCallback((v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), []);

  useEffect(() => {
    // Accessibility: update aria-invalid styling via inline style similar to the original script
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    if (emailInput) {
      emailInput.setAttribute('aria-invalid', emailInvalid ? 'true' : 'false');
      emailInput.style.boxShadow = emailInvalid ? '0 0 0 3px rgba(239,68,68,0.25)' : 'none';
    }
    if (passwordInput) {
      passwordInput.setAttribute('aria-invalid', pwdInvalid ? 'true' : 'false');
      passwordInput.style.boxShadow = pwdInvalid ? '0 0 0 3px rgba(239,68,68,0.25)' : 'none';
    }
  }, [emailInvalid, pwdInvalid]);

  const handleTogglePwd = () => {
    setShowPwd((prev) => !prev);
  };

  const handleBlurEmail = () => {
    if (!email) {
      setEmailInvalid(false);
      return;
    }
    setEmailInvalid(!isValidEmail(email));
  };

  const handleSubmit = () => {
    const emailOk = email && isValidEmail(email);
    const pwdOk = !!password;

    setEmailInvalid(!emailOk);
    setPwdInvalid(!pwdOk);

    if (emailOk && pwdOk) {
      // eslint-disable-next-line no-console
      console.log('Sign In submitted', { email });
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
      }, 1000);
    }
  };

  return (
    <main className="screen screen-11-235" role="main" aria-label="Sign In Screen">
      <div className="artboard" role="region" aria-label="Sign In Artboard">

        {/* Status Bar */}
        <div className="status-bar" aria-hidden="true">
          <div className="status-time">19:27</div>
          <div className="status-icons">
            <img className="icon wifi" src="/assets/figmaimages/figma_image_13_71_128_311.svg" alt="" aria-hidden="true" />
            <img className="icon wifi" src="/assets/figmaimages/figma_image_13_71_128_312.svg" alt="" aria-hidden="true" />
            <img className="icon wifi" src="/assets/figmaimages/figma_image_13_71_128_313.svg" alt="" aria-hidden="true" />
            <img className="icon wifi" src="/assets/figmaimages/figma_image_13_71_128_314.svg" alt="" aria-hidden="true" />
            <img className="icon battery-body" src="/assets/figmaimages/figma_image_13_71_128_307.svg" alt="" aria-hidden="true" />
            <img className="icon battery-fill" src="/assets/figmaimages/figma_image_13_71_128_306.svg" alt="" aria-hidden="true" />
            <img className="icon battery-inner" src="/assets/figmaimages/figma_image_13_71_128_309.svg" alt="" aria-hidden="true" />
          </div>
        </div>

        {/* Title group */}
        <h1 className="title-group" aria-label="Welcome Title">
          <span className="title-hello">Hello,</span>
          <span className="title-welcome">Welcome Back!</span>
        </h1>

        {/* Email field */}
        <div className="field-group field-email" role="group" aria-labelledby="label-email">
          <label id="label-email" className="field-label" htmlFor="email-input">Email</label>
          <div className="field-box">
            <input
              id="email-input"
              name="email"
              type="email"
              className="field-input"
              placeholder="Enter Email"
              aria-required="true"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleBlurEmail}
            />
          </div>
        </div>

        {/* Password field */}
        <div className="field-group field-password" role="group" aria-labelledby="label-password">
          <label id="label-password" className="field-label" htmlFor="password-input">Enter Password</label>
          <div className="field-box">
            <input
              id="password-input"
              name="password"
              type={showPwd ? 'text' : 'password'}
              className="field-input"
              placeholder="Enter Password"
              aria-required="true"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              id="toggle-password"
              className="password-toggle"
              type="button"
              aria-label={showPwd ? 'Hide password' : 'Show password'}
              aria-pressed={showPwd ? 'true' : 'false'}
              title="Show/Hide password"
              onClick={handleTogglePwd}
            >
              👁️
            </button>
          </div>
        </div>

        {/* Forgot password */}
        <a href="#" className="forgot-password" role="link" aria-label="Forgot Password?">Forgot Password?</a>

        {/* Big Button (Sign In) */}
        <button
          className="big-button"
          id="submit-btn"
          type="button"
          aria-label="Sign In"
          onClick={handleSubmit}
          disabled={submitting}
          style={submitting ? { opacity: 0.8 } : undefined}
        >
          <span className="big-button__label">Sign In</span>
          <img className="big-button__icon" src="/assets/figmaimages/figma_image_54_668_53_625.svg" alt="" aria-hidden="true" />
        </button>

        {/* Divider line with text */}
        <div className="divider-line" role="separator" aria-label="Or Sign in With">
          <span className="divider-text">Or Sign in With</span>
        </div>

        {/* Social buttons */}
        <div className="social-row" role="group" aria-label="Social Sign-in Options">
          {/* Google */}
          <button className="social-btn google" type="button" aria-label="Continue with Google" title="Continue with Google">
            <img className="social-bg" src="/assets/figmaimages/figma_image_13_36.svg" alt="" aria-hidden="true" />
            <img className="social-ico" src="/assets/figmaimages/figma_image_13_48.svg" alt="Google icon" />
          </button>
          {/* Facebook */}
          <button className="social-btn facebook" type="button" aria-label="Continue with Facebook" title="Continue with Facebook">
            <div className="social-bg-rect" aria-hidden="true"></div>
            <img className="social-ico" src="/assets/figmaimages/figma_image_13_61.svg" alt="Facebook icon" />
          </button>
        </div>

        {/* Sign up text */}
        <p className="signup-text">
          Don’t have an account? <a href="#" className="signup-link" aria-label="Sign up">Sign up</a>
        </p>

        {/* Home Indicator */}
        <div className="home-indicator" aria-hidden="true">
          <div className="home-indicator__line"></div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
