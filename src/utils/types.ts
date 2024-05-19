import type { Slug, ImageAsset, PortableTextBlock } from 'sanity'

export interface Post {
    _type: 'post'
    _createdAt: string
    _updatedAt: string
    title?: string
    slug: Slug
    description?: string
    publishedDate: Date
    updatedDate: Date
    mainImage?: ImageAsset
    body: PortableTextBlock[]
}
