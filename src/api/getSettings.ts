import { sanityClient } from 'sanity:client'
import groq from 'groq'
import type { Menus, Settings } from '../utils/types'

export async function getSettings(): Promise<Settings> {
    return await sanityClient.fetch(groq`*[_type == "settings"][0]`)
}

export async function getMenus(): Promise<Menus> {
    return await sanityClient.fetch(groq`*[_type == "menus"][0]`)
}
