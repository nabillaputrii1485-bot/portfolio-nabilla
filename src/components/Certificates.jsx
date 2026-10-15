import { Award, ExternalLink } from 'lucide-react'
import { certificates } from '../data/certificates.js'
import SectionHeading from './SectionHeading.jsx'

export default function Certificates() {
  if (!certificates.length) return null
  return (
    <section id="sertifikasi" aria-labelledby="judul-sertifikasi" className="section-pad">
      <div className="container-x">
        <SectionHeading id="judul-sertifikasi" title="Sertifikasi" subtitle="Kursus dan sertifikasi yang sudah saya selesaikan." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <article key={c.title} className="flex flex-col overflow-hidden rounded-card bg-white shadow-sm ring-1 ring-brand-100">
              {c.image && (
                <img src={c.image} alt={`Sertifikat ${c.title}`} loading="lazy" className="aspect-[4/3] w-full bg-brand-50 object-contain" />
              )}
              <div className="flex flex-1 flex-col p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                  <Award size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-bold">{c.title}</h3>
                <p className="text-sm text-ink-soft">{[c.issuer, c.year].filter(Boolean).join(' · ')}</p>
                {c.url && (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline">
                    Lihat sertifikat <ExternalLink size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
