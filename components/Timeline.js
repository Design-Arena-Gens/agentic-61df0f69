export function TimelineItem({ role, company, period, location, bullets }) {
  return (
    <div className="relative pl-6">
      <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-primary-400 ring-4 ring-primary-400/20" />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="text-white/90 font-medium">{role} ? <span className="text-white/70">{company}</span></div>
        <div className="text-sm text-white/50">{period}</div>
      </div>
      <div className="text-sm text-white/60">{location}</div>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

export default function Timeline({ items }) {
  return (
    <div className="space-y-6">
      {items.map((item, idx) => (
        <TimelineItem key={idx} {...item} />
      ))}
    </div>
  );
}
