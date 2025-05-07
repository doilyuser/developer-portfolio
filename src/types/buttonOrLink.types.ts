import { ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

export type BaseProps = {
  variant?: ButtonVariant
  children: ReactNode
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
}

export type NextLinkProps = BaseProps & {
  as: 'link'
  href: string
}

export type AnchorProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a'
    href: string
  }

export type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as: 'button'
  }

export type ButtonOrLinkProps = NextLinkProps | AnchorProps | ButtonProps
