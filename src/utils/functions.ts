import { sanityClient } from 'sanity:client'
import imageUrlBuilder from '@sanity/image-url'
import type { ImageAsset } from 'sanity'

export const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}

export const getImageSrc = (source: ImageAsset | undefined) => {
    if (!source) return undefined
    const imageBuilder = imageUrlBuilder(sanityClient)
    return imageBuilder.image(source).url()
}
