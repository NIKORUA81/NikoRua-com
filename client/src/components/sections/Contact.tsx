import { useState } from 'react'
import { SectionWrapper } from '@components/ui/SectionWrapper'
import { Button } from '@components/ui/Button'

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient">Contacto</h2>
      <div className="max-w-2xl mx-auto glass-card p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required placeholder="Nombre" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-primary focus:outline-none" />
            <input required type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-primary focus:outline-none" />
          </div>
          <input required placeholder="Asunto" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-primary focus:outline-none" />
          <textarea required rows={5} placeholder="Mensaje" value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-primary focus:outline-none resize-none" />
          <Button variant="primary" type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
            {status === 'loading' ? 'Enviando...' : status === 'success' ? '✅ Enviado' : 'Enviar Mensaje'}
          </Button>
          {status === 'error' && <p className="text-red-400 text-center">Error al enviar. Intenta de nuevo.</p>}
        </form>
      </div>
    </SectionWrapper>
  )
}