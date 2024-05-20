import { sanityClient } from 'sanity:client'
import groq from 'groq'
import type { Homepage, Page, Post, Settings } from '../utils/types'

export async function getPosts(): Promise<Post[]> {
    const posts = await sanityClient.fetch(
        groq`*[_type == "post" && defined(slug.current)]`,
    )
    return posts.sort((a: Post, b: Post) => {
        const getDate = (post: Post) => {
            return new Date(post.updatedDate ?? post.publishedDate).valueOf()
        }
        return getDate(b) - getDate(a)
    })
}

export async function getPost(slug: string): Promise<Post> {
    return await sanityClient.fetch(
        groq`*[_type == "post" && slug.current == $slug][0]`,
        {
            slug,
        },
    )
}

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

export async function getSettings(): Promise<Settings> {
    return await sanityClient.fetch(groq`*[_type == "settings"][0]`)
}
