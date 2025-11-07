import Card from '../components/Card';
import Section from '../components/Section';
import Badge from '../components/Badge';
import Timeline from '../components/Timeline';
import cv from '../data/cv';

function Initials({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return (
    <div className="relative h-24 w-24 shrink-0 rounded-2xl border border-white/10 bg-gradient-to-br from-primary-500 to-fuchsia-500 text-2xl font-bold grid place-items-center text-white shadow-glow">
      {initials}
      <span className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        {/* header */}
        <div className="no-print mb-8 flex items-center justify-between">
          <a href="/" className="text-white/60 transition-colors hover:text-white">{cv.name}</a>
          <div className="flex items-center gap-2">
            <a className="badge" href="#contact">Contact</a>
            <button className="badge" onClick={() => window.print()}>Print</button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {/* left column */}
          <div className="md:col-span-1 space-y-6 md:space-y-7">
            <Card className="p-6 md:p-7">
              <div className="flex items-center gap-4">
                <Initials name={cv.name} />
                <div>
                  <h1 className="text-xl font-semibold text-white/95">{cv.name}</h1>
                  <p className="text-white/70">{cv.role}</p>
                </div>
              </div>
              <p className="mt-4 text-white/80">{cv.summary}</p>
            </Card>

            <Card className="p-6 md:p-7" id="contact">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Contact</h2>
              <ul className="space-y-2 text-white/80">
                <li><span className="text-white/50">Location:</span> {cv.location}</li>
                <li><span className="text-white/50">Email:</span> <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={`mailto:${cv.email}`}>{cv.email}</a></li>
                <li><span className="text-white/50">Website:</span> <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={`https://${cv.website}`}>{cv.website}</a></li>
                <li><span className="text-white/50">GitHub:</span> <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={`https://github.com/${cv.github}`}>@{cv.github}</a></li>
                <li><span className="text-white/50">LinkedIn:</span> <a className="underline decoration-white/20 underline-offset-4 hover:text-white" href={`https://www.linkedin.com/in/${cv.linkedin}`}>/{cv.linkedin}</a></li>
              </ul>
            </Card>

            <Section title="Skills">
              <div className="flex flex-wrap gap-2">
                {cv.skills.map((s) => (<Badge key={s}>{s}</Badge>))}
              </div>
            </Section>

            <Section title="Tools">
              <div className="flex flex-wrap gap-2">
                {cv.tools.map((t) => (<Badge key={t}>{t}</Badge>))}
              </div>
            </Section>
          </div>

          {/* right column */}
          <div className="md:col-span-2 space-y-6 md:space-y-7">
            <Section title="Experience">
              <Timeline items={cv.experience} />
            </Section>

            <Section title="Projects">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {cv.projects.map((p) => (
                  <Card key={p.name} className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-white/90">{p.name}</h3>
                        <p className="text-sm text-white/60">{p.tagline}</p>
                      </div>
                      <a href={p.link} className="badge">Visit</a>
                    </div>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-white/80">
                      {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </Card>
                ))}
              </div>
            </Section>

            <Section title="Education">
              <div className="space-y-3">
                {cv.education.map((e) => (
                  <div key={e.title} className="flex items-center justify-between">
                    <div className="text-white/90">{e.title} ? <span className="text-white/70">{e.org}</span></div>
                    <div className="text-sm text-white/60">{e.period}</div>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
