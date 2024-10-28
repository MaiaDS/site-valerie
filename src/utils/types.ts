import type { Slug, ImageAsset, PortableTextBlock } from 'sanity'

export type TextImgBlock = {
    _type: string
    blockImg: ImageAsset
    blockText: PortableTextBlock
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

    introduction: {
        title: string
        content: PortableTextBlock[]
    }
    about: {
        title: string
        picture: ImageAsset
        content: PortableTextBlock[]
    }
    services: {
        title: string
        price: number
        duration: string
        items: string[]
    }
}

export interface Settings {
    _type: 'settings'
    instagram: string
    phone: string
    subtitle: string
}
