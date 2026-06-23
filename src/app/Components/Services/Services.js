"use client";

import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  {
    title: "Haematology",
    desc: "Complete blood counts, coagulation profiles and advanced haematological analysis for accurate diagnosis.",
    href: "/Haematology",
    img: "/PhotosAndLogos/ServiceMain1.webp",
    num: "01",
  },
  {
    title: "Biochemistry",
    desc: "Liver, kidney, thyroid, lipid and full metabolic function biochemical panels.",
    href: "/Biochemistry",
    img: "/PhotosAndLogos/ServiceMain2.webp",
    num: "02",
  },
  {
    title: "Clinical Pathology",
    desc: "Urine analysis, stool examination, body fluids and cytology services.",
    href: "/ClinicalPathology",
    img: "/PhotosAndLogos/ServiceMain3.webp",
    num: "03",
  },
  {
    title: "Microbiology",
    desc: "Culture & sensitivity, viral diagnostics and parasitology for infection detection.",
    href: "/Microbiology",
    img: "/PhotosAndLogos/VirtualTOur42.webp",
    num: "04",
  },
  {
    title: "Allergy & Intolerance",
    desc: "Targeted IgE and IgG panels to identify specific allergens and food intolerances.",
    href: "/food-allergy-test",
    img: "/PhotosAndLogos/ServiceMain5.webp",
    num: "05",
  },
  {
    title: "Histocytopathology",
    desc: "Microscopic tissue and cell examination for biopsy analysis and cancer diagnosis.",
    href: "/Histocytopathology",
    img: "/PhotosAndLogos/ServiceMain6.webp",
    num: "06",
  },
  {
    title: "Flow Cytometry",
    desc: "Multi-parameter cellular analysis for immunophenotyping and lymphoma workup.",
    href: "/FlowCytometry",
    img: "/PhotosAndLogos/ServiceMain7.webp",
    num: "07",
  },
  {
    title: "Molecular Biology",
    desc: "PCR-based genetic testing, viral load quantification and molecular diagnostics.",
    href: "/MolecularBiology",
    img: "/PhotosAndLogos/ServiceMain8.webp",
    num: "08",
  },
  {
    title: "Specialized Testing for Hospitals",
    desc: "High-volume and specialised diagnostic solutions for hospitals and healthcare providers.",
    href: "/SpecializedTesting",
    img: "/PhotosAndLogos/ServiceMain9.webp",
    num: "09",
  },
];

export default function Services() {
  return (
    <div className="bg-[#f5f5f5]">

      {/* ── Hero Banner ── */}
      <div className="relative w-full" style={{ height: "520px" }}>
        <Image
          src="/PhotosAndLogos/servicessC.webp"
          alt="Dr. Dangs Lab Services"
          fill
          priority
          className="object-cover object-center"
        />
        {/* very light vignette only at bottom for text */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Text pinned to bottom-left */}
        <div className="absolute bottom-0 left-0 px-8 pb-10 sm:px-14">
          <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[3px] text-white/70">
            Dr. Dangs Lab · Est. 1984
          </p>
          <h1 className="text-[clamp(36px,6vw,60px)] font-black leading-tight tracking-[-1.5px] text-white drop-shadow-lg">
            Our Services
          </h1>
          <p className="mt-2 text-[14px] text-white/75">
            World-class diagnostics across 9 specialised disciplines
          </p>
        </div>

        {/* Stat pills — top right */}
        <div className="absolute right-6 top-6 hidden flex-col gap-2 sm:flex sm:right-10 sm:top-10">
          {[
            { v: "40+", l: "Years of trust" },
            { v: "NABL", l: "Accredited" },
            { v: "9", l: "Specialities" },
          ].map((s) => (
            <div
              key={s.l}
              className="flex items-center gap-3 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md"
            >
              <span className="text-[15px] font-black text-white">{s.v}</span>
              <span className="text-[11px] font-semibold text-white/70">{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Cards section ── */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">

        {/* Section label */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-[#d9242a]/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[3px] text-[#d9242a]">
            Diagnostic Specialities
          </span>
          <h2 className="mt-3 text-[clamp(24px,3.5vw,34px)] font-black tracking-tight text-[#0f172a]">
            Explore Our Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(217,36,42,0.14)]"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Number badge */}
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-black text-[#d9242a] shadow-sm backdrop-blur-sm">
                  {s.num}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-5 py-5">
                <h3 className="text-[16.5px] font-extrabold tracking-tight text-[#0f172a] transition-colors duration-200 group-hover:text-[#d9242a]">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-gray-500">
                  {s.desc}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-[13px] font-bold text-[#d9242a]">Explore service</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff0f0] transition-all duration-200 group-hover:bg-[#d9242a]">
                    <svg
                      className="h-3.5 w-3.5 text-[#d9242a] transition-colors duration-200 group-hover:text-white group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-5 rounded-2xl bg-[#d9242a] px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left sm:px-12">
          <div>
            <h3 className="text-[clamp(18px,3vw,24px)] font-black text-white">
              Need a test done at home?
            </h3>
            <p className="mt-1 text-[13.5px] text-white/70">
              Our trained phlebotomists visit at your preferred slot across Delhi NCR.
            </p>
          </div>
          <Link
            href="/HomeCollection"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-bold text-[#d9242a] transition hover:bg-gray-50 shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
          >
            Book Home Collection
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

    </div>
  );
}
