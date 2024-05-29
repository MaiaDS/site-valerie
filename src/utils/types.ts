import type { Slug, ImageAsset, PortableTextBlock } from 'sanity'

export type TextImgBlock = {
    _type: string
    blockImg: ImageAsset
    blockText: string
}
export type ContentType =
    | TextImgBlock
    | ImageAsset
    | ({ _type: string } & File)
    | PortableTextBlock
export type Section = {
    _type: string
    title: string
    content: ContentType[]
}

export interface Post {
    _type: 'post'
    _createdAt: string

    header?: ImageAsset
    title: string
    slug: Slug
    publishedDate: Date
    updatedDate?: Date
    tags: string[]
    content: (Section | ContentType)[]
}

interface PageBaseAttributes {
    _createdAt: string
    title: string
}

export interface Page extends PageBaseAttributes {
    _type: 'page'

    slug: Slug
    content: ContentType[]
}

export interface Homepage extends PageBaseAttributes {
    _type: 'homepage'

    subtitle?: string
    introduction: PortableTextBlock[]
    services: {
        title: string
        content: { serviceImg: ImageAsset; items: string[] }[]
    }
}

type Menu = { menu: string; header: ImageAsset }

export interface Settings {
    _type: 'settings'

    menus: { home: string; blog: string; about: Menu; contact: Menu }
    instagram: string
    email: string
}
