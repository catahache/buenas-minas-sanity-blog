import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    apiVersion: '2023-05-03', //TODO ?
    dataset: 'production',
    projectId: 'lb7sn22e',
    useCdn: false
})

const builder = imageUrlBuilder(client)

export function urlFor(source:any) {
    return builder.image(source)
}