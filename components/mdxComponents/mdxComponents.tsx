import { MDXComponents } from 'mdx/types'
import { Callout } from './callout'
import { MdxImage } from './image'

export const MdxComponents : MDXComponents = {
    img: MdxImage,
    blockquote:Callout,
    Callout,
} 