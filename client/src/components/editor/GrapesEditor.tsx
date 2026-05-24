import { useEffect, useRef } from 'react'
import grapesjs, { Editor } from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'

interface GrapesEditorProps {
  onClose: () => void
}

const STORAGE_KEY = 'nikorua_grapesjs_state'

export const GrapesEditor = ({ onClose }: GrapesEditorProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const editorRef = useRef<Editor | null>(null)

  useEffect(() => {
    if (!containerRef.current || editorRef.current) return

    const editor = grapesjs.init({
      container: containerRef.current,
      height: '100%',
      width: '100%',
      storageManager: {
        type: 'local',
        autosave: true,
        autoload: true,
        stepsBeforeSave: 3,
        options: {
          local: { key: STORAGE_KEY },
        },
      },
      plugins: [],
      canvas: {
        styles: [
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        ],
      },
      panels: {
        defaults: [
          {
            id: 'panel-top',
            el: '.panel__top',
          },
          {
            id: 'basic-actions',
            el: '.panel__basic-actions',
            buttons: [
              {
                id: 'save',
                className: 'btn-save',
                label: '💾 Guardar',
                command: 'save-and-close',
                attributes: { title: 'Guardar y cerrar' },
              },
              {
                id: 'undo',
                className: 'fa fa-undo',
                command: 'core:undo',
                attributes: { title: 'Undo' },
              },
              {
                id: 'redo',
                className: 'fa fa-redo',
                command: 'core:redo',
                attributes: { title: 'Redo' },
              },
              {
                id: 'fullscreen',
                className: 'fa fa-arrows-alt',
                command: 'core:fullscreen',
                attributes: { title: 'Fullscreen' },
              },
              {
                id: 'export-code',
                className: 'fa fa-code',
                command: 'export-template',
                attributes: { title: 'Ver código' },
              },
            ],
          },
        ],
      },
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'section',
            label: '<b>Sección</b>',
            attributes: { class: 'gjs-block-section' },
            content: `<section class="section">
              <h1>Título de sección</h1>
              <p>Contenido de la sección...</p>
            </section>`,
          },
          {
            id: 'text',
            label: 'Texto',
            content: '<div data-gjs-type="text">Escribe tu texto aquí...</div>',
          },
          {
            id: 'image',
            label: 'Imagen',
            select: true,
            content: { type: 'image' },
            activate: true,
          },
          {
            id: 'two-columns',
            label: '2 Columnas',
            content: `<div class="row" style="display:flex;gap:20px">
              <div class="col" style="flex:1">Columna 1</div>
              <div class="col" style="flex:1">Columna 2</div>
            </div>`,
          },
          {
            id: 'button',
            label: 'Botón',
            content: '<a class="btn" href="#" style="display:inline-block;padding:10px 20px;background:#6366f1;color:white;border-radius:8px;text-decoration:none">Botón</a>',
          },
          {
            id: 'hero',
            label: 'Hero',
            content: `<div style="padding:80px 40px;text-align:center;background:linear-gradient(135deg,#6366f1,#8b5cf6)">
              <h1 style="color:white;font-size:3rem;margin-bottom:16px">Tu título aquí</h1>
              <p style="color:rgba(255,255,255,0.8);font-size:1.2rem;margin-bottom:32px">Subtítulo descriptivo</p>
              <a href="#" style="background:white;color:#6366f1;padding:12px 32px;border-radius:9999px;text-decoration:none;font-weight:700">Comenzar</a>
            </div>`,
          },
        ],
      },
      styleManager: {
        appendTo: '#styles-container',
        sectors: [
          {
            name: 'Dimensiones',
            open: false,
            properties: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
          },
          {
            name: 'Tipografía',
            open: false,
            properties: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align'],
          },
          {
            name: 'Decoración',
            open: false,
            properties: ['background-color', 'border-radius', 'border', 'box-shadow', 'opacity'],
          },
          {
            name: 'Posición',
            open: false,
            properties: ['position', 'top', 'right', 'left', 'bottom', 'z-index'],
          },
        ],
      },
      traitManager: {
        appendTo: '#trait-container',
      },
      layerManager: {
        appendTo: '#layers-container',
      },
      selectorManager: {
        appendTo: '#selectors-container',
      },
    })

    editor.Commands.add('save-and-close', {
      run(e: Editor) {
        e.store()
        onClose()
      },
    })

    // Load current page content on first use (when localStorage is empty)
    editor.on('load', () => {
      const stored = localStorage.getItem(STORAGE_KEY)
      const hasContent = stored && JSON.parse(stored)?.['gjs-components']
      if (!hasContent) {
        const mainEl = document.querySelector('main')
        if (mainEl) {
          editor.setComponents(mainEl.innerHTML)
        }
      }
    })

    editorRef.current = editor

    return () => {
      editor.destroy()
      editorRef.current = null
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[9999] bg-[#1e1e2e] flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#181825] border-b border-[#313244]">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-sm">NikoRua · Editor Visual</span>
          <span className="text-xs text-slate-500 bg-[#313244] px-2 py-0.5 rounded">GrapesJS</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => editorRef.current?.Commands.run('core:undo')}
            title="Deshacer"
            className="px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-[#313244] hover:bg-[#45475a] rounded transition-colors"
          >
            ↩ Deshacer
          </button>
          <button
            onClick={() => editorRef.current?.Commands.run('core:redo')}
            title="Rehacer"
            className="px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-[#313244] hover:bg-[#45475a] rounded transition-colors"
          >
            ↪ Rehacer
          </button>
          <button
            onClick={() => editorRef.current?.store()}
            className="px-3 py-1.5 text-xs text-white bg-indigo-600 hover:bg-indigo-500 rounded transition-colors"
          >
            💾 Guardar
          </button>
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs text-white bg-slate-700 hover:bg-slate-600 rounded transition-colors"
          >
            ✕ Cerrar
          </button>
        </div>
      </div>

      {/* Editor layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Blocks panel */}
        <div className="w-48 bg-[#181825] border-r border-[#313244] overflow-y-auto">
          <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-[#313244]">
            Bloques
          </div>
          <div id="blocks" />
        </div>

        {/* Canvas */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div ref={containerRef} className="flex-1" />
        </div>

        {/* Right panels */}
        <div className="w-64 bg-[#181825] border-l border-[#313244] overflow-y-auto flex flex-col">
          {/* Selectors */}
          <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-[#313244]">
            Clases CSS
          </div>
          <div id="selectors-container" className="px-2 py-1" />

          {/* Styles */}
          <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-[#313244] mt-2">
            Estilos
          </div>
          <div id="styles-container" />

          {/* Traits */}
          <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-[#313244] mt-2">
            Atributos
          </div>
          <div id="trait-container" className="px-2 py-1" />

          {/* Layers */}
          <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-[#313244] mt-2">
            Capas
          </div>
          <div id="layers-container" />
        </div>
      </div>
    </div>
  )
}
