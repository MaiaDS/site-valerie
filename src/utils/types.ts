import type { Slug, ImageAsset, PortableTextBlock } from 'sanity'

export type TextImgBlock = { blockImg: ImageAsset; blockText: string }
export type Content = TextImgBlock | ImageAsset | File | PortableTextBlock
export type Section = {
    title: string
    content: Content[]
}

export interface Post {
    _type: 'post'
    _createdAt: string

    headerImg?: ImageAsset
    title: string
    slug: Slug
    publishedDate: Date
    updatedDate?: Date
    tags: string[]
    content: (Section | Content)[]
}

interface PageBaseAttributes {
    _createdAt: string
    menu: string
    title: string
}

export interface Page extends PageBaseAttributes {
    _type: 'page'

    slug: Slug
    headerImg?: ImageAsset
    content: Content[]
}

export interface Homepage {
    _type: 'homepage'

    subtitle?: string
    introduction: PortableTextBlock[]
}

export interface Settings {
    _type: 'settings'

    instagram: string
    email: string
}
