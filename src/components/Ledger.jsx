// The site's signature element: a monospaced metric with a green delta mark
// over a hairline rule, set like a row in a ledger.

export function DeltaMark({ size = 10 }) {
  return (
    <svg
      className="ledger-mark"
      width={size}
      height={size}
      viewBox="0 0 10 10"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 0.8 L9.6 9.2 H0.4 Z" />
    </svg>
  );
}

// Inline form: one line of mono text with the mark.
export function LedgerLine({ children, className = "" }) {
  return (
    <p className={`ledger ${className}`.trim()}>
      <DeltaMark />
      <span>{children}</span>
    </p>
  );
}

// Stat form: large value + small label, used in case-study rails.
export function LedgerStat({ value, label }) {
  return (
    <p className="ledger ledger--stat">
      <span className="ledger-value">
        <DeltaMark size={12} />
        {value}
      </span>
      <span className="ledger-label">{label}</span>
    </p>
  );
}
