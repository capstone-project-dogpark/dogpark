import { sql } from '../database.utils'

export interface Post {
    postId: string|null
    postParkId: string|null
    postProfileId: string
    postCaption: string
    postDate: Date|null
    postImageUrl: string
}

export async function insertPost (post: Post): Promise<string> {
    const {postProfileId, postCaption} = post
    await sql `INSERT INTO post (post_id, post_park_id, post_profile_id, post_caption, post_date, post_image_url) VALUES (gen_random_uuid(), ${postProfileId}, ${postCaption}, NOW())`
    return 'Post created successfully'
}

export async function selectAllPosts(): Promise<Post[]> {
    return sql <Post[]> `SELECT post_id, post_profile_id, post_caption, post_date FROM post ORDER BY post_date DESC`
}

export async function selectPostByPostId (postId: string): Promise<Post|null> {
    const result = <Post[]> await sql `SELECT post_id, post_profile_id, post_caption, post_date FROM post WHERE post_id = ${postId}`
    return result?.length === 1 ? result [0] : null
}

export async function selectPostByPostProfileId (postId: string): Promise<Post|null> {
    const result = <Post[]> await sql `SELECT post_id, post_profile_id, post_caption, post_date FROM post WHERE post_profile_id = ${postId}`
    return result?.length === 1 ? result [0] : null
}