function Eyebrow({ children, className = "" }) {
  return (
    <p className={`text-base font-medium tracking-[0.1em] text-terracotta-600 ${className}`}>{children}</p>
  );
}

export default Eyebrow;
