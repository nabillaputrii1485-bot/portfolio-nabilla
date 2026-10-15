import { Mail, MessageCircle, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/profile.js'

const icons = { email: Mail, whatsapp: MessageCircle, github: Github, linkedin: Linkedin }

export default function Contact() {
  const contacts = profile.contacts.filter((c) => c.href)
  return (
    <section id="kontak" aria-labelledby="judul-kontak" className="section-pad">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-600 px-6 py-14 text-white sm:px-12">
          <div className="blob-shape absolute -left-16 -top-16 h-56 w-56 bg-brand-500" aria-hidden="true" />
          <div className="blob-shape absolute -bottom-20 -right-10 h-64 w-64 bg-brand-700" aria-hidden="true" style={{ animationDelay: '-6s' }} />
          <div className="relative">
            <div className="text-center">
              <h2 id="judul-kontak" className="text-3xl font-extrabold tracking-tight sm:text-4xl">Mari terhubung</h2>
              <p className="mx-auto mt-4 max-w-md leading-relaxed text-brand-100">
                Punya pertanyaan, ide, atau sekadar ingin menyapa? Pilih cara yang paling nyaman untukmu.
              </p>
            </div>
            <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
              {contacts.map((c) => {
                const Icon = icons[c.type] ?? Mail
                const external = c.href.startsWith('http')
                return (
                  <li key={c.type}>
                    <a
                      href={c.href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="flex items-center gap-4 rounded-2xl bg-white p-4 text-ink transition-colors hover:bg-brand-50"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                        <Icon size={22} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-brand-600">{c.label}</span>
                        <span className="block truncate font-medium">{c.value}</span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
