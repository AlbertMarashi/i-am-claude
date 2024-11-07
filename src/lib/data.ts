import book from "$lib/book/book.yaml?raw"
import { parse } from "yaml"
import { ChapterSchema, PageSchema } from "./schema"
import { Value } from "@sinclair/typebox/value"
import { Type, type Static } from "@sinclair/typebox"

const WORDS_PER_MINUTE = 200

const md_pages = import.meta.glob("/src/lib/book/**/*.md", {
    query: "raw",
    import: "default",
    eager: true,
}) as Record<string, string>


export const page_entries = Object.entries(md_pages) as [string, string][]

export const pages = page_entries.map(([path, body]) => {
    const slug = path.split("/")[4].split(".")[0]


    return Value.Parse(PageSchema, {
        slug,
        body,
        read_time: body.split(" ").length / WORDS_PER_MINUTE,
    })
})

export const TOTAL_READ_TIME = pages.reduce((acc, page) => {
    return acc + page.read_time
}, 0)

export const page_map = pages.reduce((acc, page) => {
    acc[page.slug] = page
    return acc
}, {} as Record<string, Static<typeof PageSchema>>)


export const chapters = Value.Parse(
    Type.Array(ChapterSchema),
    parse(book)
        .map((chapter: unknown) => Value.Parse(Type.Object({
            title: Type.String(),
            description: Type.String(),
            pages: Type.Array(Type.Object({
                title: Type.String(),
                slug: Type.String(),
                tag: Type.Optional(Type.String()),
            }))
        }), chapter))
        .map((chapter: Static<typeof ChapterSchema>) => ({
            title: chapter.title,
            description: chapter.description,
            pages: chapter.pages.map(page => ({
                ...page,
                read_time: page_map[page.slug]?.read_time || 0,
            })),
            read_time: chapter.pages.reduce((acc, page) => {
                return acc + (page_map[page.slug]?.read_time || 0)
            }, 0),
        }))
)
