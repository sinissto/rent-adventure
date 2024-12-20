function Section({ className, children }) {
  return <section className={`max-w-full ${className}`}>{children}</section>;
}

export default Section;
