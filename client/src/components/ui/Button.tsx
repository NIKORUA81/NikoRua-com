import { cn } from '@utils/math'
import { motion, HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends Omit<HTMLMotionProps<'a'>, 'href'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
  onClick?: () => void
}

const variants = {
  primary: 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25',
  secondary: 'bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/25',
  outline: 'border-2 border-primary/50 hover:border-primary text-primary hover:bg-primary/10',
  ghost: 'hover:bg-white/5 text-slate-300 hover:text-white',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-darker disabled:opacity-50 disabled:cursor-not-allowed'
  
  const Component = href ? motion.a : motion.button
  const commonProps = {
    className: cn(baseStyles, variants[variant], sizes[size], className),
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    onClick,
    ...props,
  }

  if (href) {
    return (
      <Component href={href} {...commonProps}>
        {children}
      </Component>
    )
  }

  return (
    <Component type="button" {...commonProps}>
      {children}
    </Component>
  )
}