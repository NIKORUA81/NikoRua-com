import { LogoNikoRua } from '@components/ui/LogoNikoRua'

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg'
  fullScreen?: boolean
}

export const Loader = ({ size = 'md', fullScreen = false }: LoaderProps) => {
  const logoSize = size === 'sm' ? 'sm' : size === 'md' ? 'md' : 'lg'

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-darker gap-4">
        <LogoNikoRua size="xl" withText={false} animated />
        <p className="text-slate-400 text-sm animate-pulse">Cargando...</p>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center p-4">
      <LogoNikoRua size={logoSize} withText={false} animated />
    </div>
  )
}
