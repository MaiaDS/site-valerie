import { sanityClient } from 'sanity:client'
import groq from 'groq'
import type { Homepage, Page } from '../utils/types'

export async function getPages(): Promise<Page[]> {
    return await sanityClient.fetch(
        groq`*[_type == "page" && defined(slug.current)]`,
    )
}

export async function getPage(slug: string): Promise<Page> {
    return await sanityClient.fetch(
        groq`*[_type == "page" && slug.current == $slug][0]`,
        {
            slug,
        },
    )
}

export async function getHomepage(): Promise<Homepage> {
    return await sanityClient.fetch(groq`*[_type == "homepage"][0]`)
}
