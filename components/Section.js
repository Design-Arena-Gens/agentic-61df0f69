export default function Section({ title, children }) {
  return (
    <section className="card p-6 md:p-7">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
