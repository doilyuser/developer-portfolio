import { JSX, SVGAttributes, ReactNode } from 'react'

export interface IconTree {
  tag: string
  attr: {
    [key: string]: string
  }
  child: IconTree[]
}

export declare function GenIcon(data: IconTree): (props: IconBaseProps) => JSX.Element

export interface IconBaseProps extends SVGAttributes<SVGElement> {
  children?: ReactNode
  size?: string | number
  color?: string
  title?: string
}

export type IconType = (props: IconBaseProps) => ReactNode

export declare function IconBase(
  props: IconBaseProps & {
    attr?: Record<string, string>
  }
): JSX.Element
