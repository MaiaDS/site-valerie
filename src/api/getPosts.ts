import { sanityClient } from 'sanity:client'
import groq from 'groq'
import type { Post } from '../utils/types'

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
