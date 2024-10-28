import { sanityClient } from 'sanity:client'
import groq from 'groq'
import type { Settings } from '../utils/types'

export async function getSettings(): Promise<Settings> {
    return await sanityClient.fetch(groq`*[_type == "settings"][0]`)
}
