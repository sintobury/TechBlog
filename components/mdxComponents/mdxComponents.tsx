import { MDXComponents } from 'mdx/types'
import { Callout } from './callout'
import { Image } from './image'

export const MdxComponents : MDXComponents = {
    img: Image,
    blockquote:Callout,
    Callout,
} 