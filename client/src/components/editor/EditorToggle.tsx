import { useState, lazy, Suspense } from 'react'

const GrapesEditor = lazy(() =>
  import('./GrapesEditor').then(m => ({ default: m.GrapesEditor }))
)

export const EditorToggle = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          title="Abrir editor visual"
          className="fixed bottom-6 right-6 z-[9998] w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/50 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
      )}

      {/* Editor overlay */}
      {open && (
        <Suspense fallback={
          <div className="fixed inset-0 z-[9999] bg-[#1e1e2e] flex items-center justify-center">
            <div className="text-white text-sm animate-pulse">Cargando editor...</div>
          </div>
        }>
          <GrapesEditor onClose={() => setOpen(false)} />
        </Suspense>
      )}
    </>
  )
}
