import { Type } from "@sinclair/typebox"

export const PageSchema = Type.Object({
    slug: Type.String(),
    body: Type.String(),
    read_time: Type.Number(),
})

export const ChapterSchema = Type.Object({
    title: Type.String(),
    description: Type.String(),
    pages: Type.Array(Type.Object({
        title: Type.String(),
        slug: Type.String(),
        read_time: Type.Number(),
    })),
    read_time: Type.Number(),
})
