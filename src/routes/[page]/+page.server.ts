import { chapters, page_map } from "$lib/data"
import { error } from "@sveltejs/kit"

// export const prerender = true

export async function load({ params }) {
    const page = page_map[params.page]

    if (!page) throw error(404)

    const chapter = chapters.find(chapter => chapter.pages.find(page => page.slug === params.page))!

    const pages_ordered = chapters.flatMap(chapter => chapter.pages)

    const current_page_index = pages_ordered.findIndex(page => page.slug === params.page)

    const next_page = pages_ordered[current_page_index + 1]
    const prev_page = pages_ordered[current_page_index - 1]

    return {
        next_page,
        prev_page,
        page: {
            ...page,
            ...chapter.pages.find(page => page.slug === params.page),
        },
        chapter
    }
}
