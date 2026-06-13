/**
 * Coming Soon Page — Happy Public Senior Secondary School
 * ─────────────────────────────────────────────────────────
 * HOW TO REMOVE:
 *   1. Delete the entire  src/coming-soon/  folder.
 *   2. In  src/App.tsx  revert the import & route back
 *      to the real  <Index />  page.
 */

import { useEffect, useState } from "react";
import "./ComingSoon.css";

// ── Target: midnight June 14 2026 IST (UTC+5:30) ──
const TARGET = new Date("2026-06-14T00:00:00+05:30").getTime();

function getTimeLeft() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    hours:   Math.floor(diff / 1000 / 3600),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done:    diff === 0,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

const ComingSoon = () => {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="cs-page">
      {/* ── Background ── */}
      <div className="cs-particles">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="cs-particle" />
        ))}
      </div>
      <div className="cs-grid" />
      <div className="cs-glow-orb" />

      {/* ── Main Card ── */}
      <div className="cs-card">
        {/* Corner accents */}
        <span className="cs-corner cs-corner--tl" />
        <span className="cs-corner cs-corner--tr" />
        <span className="cs-corner cs-corner--bl" />
        <span className="cs-corner cs-corner--br" />

        {/* Logo */}
        <div className="cs-logo-wrap">
          <img
            src="/logo.svg"
            alt="Happy Public Senior Secondary School"
            className="cs-logo"
          />
        </div>

        {/* School Name */}
        <h2 className="cs-school-name">
          Happy Public Senior Secondary School
        </h2>

        {/* Divider */}
        <div className="cs-divider" />

        {/* Admission Badge */}
        <div className="cs-badge">
          <span className="cs-badge-dot" />
          Admission Open 2026–27
        </div>

        {/* Coming Soon */}
        <h1 className="cs-heading">Coming Soon</h1>

        {/* ── Countdown Timer ── */}
        {!time.done ? (
          <div className="cs-timer" aria-label="Countdown to launch">
            <div className="cs-timer-label">Website launches in</div>
            <div className="cs-timer-blocks">
              <div className="cs-timer-block">
                <span className="cs-timer-num">{pad(time.hours)}</span>
                <span className="cs-timer-unit">Hours</span>
              </div>
              <span className="cs-timer-colon">:</span>
              <div className="cs-timer-block">
                <span className="cs-timer-num">{pad(time.minutes)}</span>
                <span className="cs-timer-unit">Minutes</span>
              </div>
              <span className="cs-timer-colon">:</span>
              <div className="cs-timer-block">
                <span className="cs-timer-num">{pad(time.seconds)}</span>
                <span className="cs-timer-unit">Seconds</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="cs-timer-done">🎉 We're Live! Refresh the page.</div>
        )}

        {/* Sub-text */}
        <p className="cs-subtext">
          Our website is under construction.
          <br />
          Admissions are open for Nursery to Class 12
          <br />
          (Science, Commerce &amp; Arts).
        </p>

        {/* Contact Details */}
        <div className="cs-contact">
          <div className="cs-contact-row">
            {/* Phone icon */}
            <svg className="cs-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <a href="tel:+919602805710">+91 96028 05710</a>
            <span className="cs-contact-separator">|</span>
            <a href="tel:+918890655123">+91 88906 55123</a>
            <span className="cs-contact-separator">|</span>
            <a href="tel:+917742159118">+91 77421 59118</a>
          </div>

          <div className="cs-contact-row">
            {/* Location icon */}
            <svg className="cs-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Sangariya, Rajasthan</span>
          </div>
        </div>

        {/* Address */}
        <p className="cs-address">
          Udaipur Road, Sangariya, Block&nbsp;–&nbsp;Barisadri, Rajasthan&nbsp;–&nbsp;312404
        </p>

        {/* Footer Credit */}
        <div className="cs-footer">
          Developed By{" "}
          <a
            href="https://www.visiontechx.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vision TechX
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
