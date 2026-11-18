/* eslint-disable @next/next/no-img-element */
import React from "react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { MobileApp, otherApps, wakabuddy } from "../../utils/mobile";

const StoreButton = ({ label, href }: { label: string; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-xs font-bold uppercase tracking-widest transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
  >
    {label}
    <span aria-hidden="true">↗</span>
  </a>
);

const Status = ({ app }: { app: MobileApp }) =>
  app.status === "live" ? (
    <span className="inline-flex items-center gap-2 rounded-full bg-pastel-green px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-black">
      <span className="h-1.5 w-1.5 rounded-full bg-black/70" />
      Live on App Store &amp; Google Play
    </span>
  ) : (
    <span className="inline-flex items-center gap-2 rounded-full border border-line-strong px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-subtle">
      In development
    </span>
  );

const Highlights = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 text-sm leading-relaxed text-muted md:text-base">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span aria-hidden="true" className="mt-0.5 font-bold text-accent">
          +
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Stack = ({ items }: { items: string[] }) => (
  <p className="text-xs font-semibold uppercase tracking-wider text-subtle">{items.join(" · ")}</p>
);

/** Three phone screens; the outer two drift at a different speed (ScrollSmoother `data-speed`). */
const Phones = ({ shots }: { shots: NonNullable<MobileApp["screenshots"]> }) => (
  <div className="flex items-center justify-center gap-3 sm:gap-5">
    {shots.map((shot, i) => (
      <div
        key={shot.src}
        data-speed={i === 1 ? undefined : "0.94"}
        className={`overflow-hidden rounded-[1.6rem] border-4 border-neutral-900 bg-neutral-900 shadow-2xl ${
          i === 1 ? "w-[40%] max-w-[240px]" : "mt-12 w-[31%] max-w-[190px] opacity-90"
        }`}
      >
        <img src={shot.src} alt={shot.alt} loading="lazy" className="block h-auto w-full" />
      </div>
    ))}
  </div>
);

const Mobile = () => {
  const app = wakabuddy;
  return (
    <section id="mobile" className="mx-[6%] py-32">
      <SectionHeading
        eyebrow="Mobile"
        title="Mobile Apps"
        intro="React Native apps for iOS and Android, down to the native Swift and Kotlin underneath."
      />

      <Reveal className="mx-auto mt-20 max-w-6xl">
        <article className="grid overflow-hidden rounded-3xl border border-line bg-surface lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col p-8 md:p-12">
            <div className="flex items-center gap-4">
              {app.icon && (
                <img src={app.icon} alt="" width={56} height={56} className="h-14 w-14 rounded-2xl" />
              )}
              <div>
                <h3 className="text-3xl font-extrabold">{app.name}</h3>
                <p className="text-sm font-semibold text-subtle">{app.tagline}</p>
              </div>
            </div>
            <div className="mt-6">
              <Status app={app} />
            </div>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">{app.description}</p>
            {app.role && <p className="mt-4 text-sm font-bold">{app.role}</p>}

            {app.stats && (
              <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-6">
                {app.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="whitespace-nowrap text-lg font-extrabold md:text-2xl">{s.value}</dd>
                    <dd className="mt-1 text-xs font-semibold text-subtle">{s.label}</dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="mt-8">
              <Highlights items={app.highlights} />
            </div>
            <div className="mt-8">
              <Stack items={app.stack} />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {app.stores?.map((s) => (
                <StoreButton key={s.label} label={s.label} href={s.href} />
              ))}
              {app.site && <StoreButton label={app.site.replace("https://", "")} href={app.site} />}
            </div>
          </div>

          {app.screenshots && (
            // On phones the screens lead; beside the copy from lg up.
            <div className="order-first border-b border-line bg-gradient-to-b from-accent/10 to-transparent px-6 py-14 lg:order-none lg:border-b-0 lg:border-l">
              <Phones shots={app.screenshots} />
            </div>
          )}
        </article>
      </Reveal>

      {/* A lone card spans the row, splitting into two columns inside. */}
      <div className={`mx-auto mt-8 grid max-w-6xl gap-8 ${otherApps.length > 1 ? "md:grid-cols-2" : ""}`}>
        {otherApps.map((other) => (
          <Reveal key={other.name} className="h-full">
            <article
              className={`grid h-full gap-x-12 gap-y-6 rounded-3xl border border-line bg-surface p-8 md:p-10 ${
                otherApps.length > 1 ? "" : "md:grid-cols-2"
              }`}
            >
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-extrabold">{other.name}</h3>
                  <Status app={other} />
                </div>
                <p className="mt-2 text-sm font-semibold text-subtle">{other.tagline}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">{other.description}</p>
                <div className="mt-auto pt-8">
                  <Stack items={other.stack} />
                </div>
              </div>
              <div className="md:pt-1">
                <Highlights items={other.highlights} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Mobile;
